import React, { useEffect, useState } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useHeaderData } from "../../../context/headerCtx";
import { useCartData } from "../../../context/cartCtx";
import { useOrder } from "../../../hooks/useOrder";
import { usePayOrder } from "../../../hooks/usePayOrder";
import usePaypalClientId from "../../../hooks/usePaypalClientId";
import formatter from "../../../utils/formatter";
import { FaChevronDown } from "react-icons/fa6";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

let discountCodes = ["SAVE10", "SAVE15"];

function CheckoutSummary({
  currentPayment,
  setCurrentPayment,
  isReviewed,
  setIsReviewed,
  setIsPaid,
  setCompletedOrder,
}) {
  const { state, dispatch } = useCartData();
  const { currency } = useHeaderData();

  const { createOrderInDb, isOrderLoading, orderError, createdOrder } =
    useOrder();
  const { payOrder, isPaymentLoading, updatedOrder } = usePayOrder();
  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();
  const { isPaypalLoading, paypalError, paypal } = usePaypalClientId();

  const [isDiscountCodeSubmitted, setIsDiscountCodeSubmitted] = useState(false);
  const [detailsShown, setDetailsShown] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [fee, setFee] = useState(0);
  const [error, setError] = useState("");
  const [summary, setSummary] = useState({
    priceExclTax: state.priceExclTax,
    taxPrice: state.taxPrice,
    subtotal: state.totalPrice,
  });
  const [finalAmount, setFinalAmount] = useState(state.totalPrice);

  //update summary with fee and totalprice when payment method selected
  useEffect(() => {
    if (currentPayment) {
      setFee(currentPayment.fixFee);
      setSummary((prevValues) => ({
        ...prevValues,
        paymentFee: currentPayment.fixFee,
        totalPrice: state.totalPrice + currentPayment.fixFee,
      }));
      setFinalAmount(state.totalPrice + currentPayment.fixFee);
    } else if (!currentPayment) {
      setFinalAmount((prevPrice) => prevPrice - fee);
    }
  }, [currentPayment, fee, state.totalPrice]);

  //update summary with discount and totalWithDiscount when discount code applied
  useEffect(() => {
    if (discount && currentPayment) {
      setSummary((prevValues) => ({
        ...prevValues,
        discount:
          Math.floor(
            (state.totalPrice + currentPayment.fixFee) * discount * 100,
          ) / 100,
        totalWithDiscount:
          state.totalPrice +
          fee -
          Math.floor(
            (state.totalPrice + currentPayment.fixFee) * discount * 100,
          ) /
            100,
      }));
      setFinalAmount(
        state.totalPrice +
          fee -
          Math.floor(
            (state.totalPrice + currentPayment.fixFee) * discount * 100,
          ) /
            100,
      );
    }
  }, [discount, fee, state.totalPrice, currentPayment]);

  //loading paypal
  useEffect(() => {
    if (!paypalError && !isPaypalLoading && paypal.clientId) {
      const loadPayPalScript = async () => {
        paypalDispatch({
          type: "resetOptions",
          value: {
            "client-id": paypal.clientId,
            currency: currency.cur,
          },
        });
        paypalDispatch({ type: "setLoadingStatus", value: "pending" });
      };
      if (createdOrder && !createdOrder.isPaid) {
        if (!window.paypal) {
          loadPayPalScript();
        }
      }
    }
  }, [
    createdOrder,
    currency.cur,
    isPaypalLoading,
    paypal.clientId,
    paypalDispatch,
    paypalError,
  ]);

  useEffect(() => {
    if (updatedOrder.isPaid) {
      setIsPaid(true);
      setCompletedOrder(updatedOrder);
    }
  }, [updatedOrder, setCompletedOrder, setIsPaid]);

  const changeHandler = (e) => {
    setDiscountCode(e.target.value);
    setError("");
  };

  const discountSubmitHandler = () => {
    if (currentPayment) {
      if (!isDiscountCodeSubmitted) {
        if (discountCodes.includes(discountCode)) {
          if (discountCode === "SAVE10") {
            setDiscount(0.1);
          } else if (discountCode === "SAVE15") {
            setDiscount(0.15);
          } else {
            setDiscount(0);
          }
          setDiscountCode("");
          setError("");
          setIsDiscountCodeSubmitted(true);
        } else {
          setDiscountCode("");
          setError("Invalid discount code");
        }
      } else {
        setDiscountCode("");
        setError("Only one discount code per order accepted");
      }
    } else {
      setDiscountCode("");
      setError("Choose a payment method first");
    }
  };

  const checkoutSubmitHandler = async () => {
    setIsReviewed(true);
    try {
      const orderData = {
        orderItems: state.cartItems,
        paymentMethod: currentPayment.title,
        itemsPrice: summary.priceExclTax,
        taxPrice: summary.taxPrice,
        subtotalPrice: summary.subtotal,
        ...(currentPayment && { paymentFee: summary.paymentFee }),
        ...(currentPayment && { totalPrice: summary.totalPrice }),
        ...(discountCode && { discountCode }),
        ...(summary.discount && { discount: summary.discount }),
        ...(summary.totalWithDiscount && {
          totalAmount: summary.totalWithDiscount,
        }),
      };
      await createOrderInDb(orderData);
    } catch (error) {
      toast.error(error);
    }
  };

  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              value: finalAmount,
            },
          },
        ],
      })
      .then((orderId) => {
        return orderId;
      });
  };

  const onApprove = async (data, actions) => {
    return actions.order.capture().then(async function (details) {
      try {
        await payOrder({ id: createdOrder._id, details });
        toast.success("Payment successful");
        dispatch({ type: "CLEAR", payload: [] });
        setIsReviewed(false);
        setCurrentPayment(null);
      } catch (error) {
        toast.error(error?.data?.message || error.message);
      }
    });
  };

  const onError = (error) => {
    toast.error(error.message);
  };

  return (
    <section className="flex min-w-full flex-col items-start justify-start gap-2 sm:min-w-[360px]">
      <div className="min-h-[36px]">
        <h3>Summary</h3>
      </div>
      <form
        name="checkoutForm"
        id="checkoutForm"
        className="flex w-full flex-col items-center justify-center gap-3 rounded-lg border border-none bg-darkestPurple bg-opacity-35 p-4"
      >
        <div className="flex w-full items-center justify-between">
          <h4 className="text-fontLightGray">Total:</h4>
          <h4>
            {state.cartItems.length > 0
              ? formatter(finalAmount, currency.curSymbol)
              : formatter(0, currency.curSymbol)}
          </h4>
        </div>
        {!isReviewed && (
          <div className="flex w-full flex-col items-start justify-center gap-2">
            <div className="flex w-full flex-col gap-3 xs:flex-row">
              <input
                type="text"
                name="discount-code"
                id="discount-code"
                placeholder="Discount Code"
                onChange={changeHandler}
                value={discountCode}
                style={{ flex: 1 }}
                className={`discount rounded-md bg-lightSepiaPurple px-[16px] py-[8px] text-white outline-none placeholder:text-fontLightGray xs:py-0 ${error ? "border border-red-500" : "border-none"}`}
              />
              <button
                key={"discount_button"}
                onClick={() => discountSubmitHandler()}
                disabled={
                  discountCode === "" ||
                  state.cartItems.length === 0 ||
                  isOrderLoading
                }
                className="flex items-center justify-center rounded-md bg-mediumPurple px-[16px] py-[8px] font-semibold hover:bg-lightPurple disabled:cursor-not-allowed disabled:bg-sepiaPurple"
              >
                Apply
              </button>
            </div>
            {error && (
              <span
                className="mb-8 w-full border-l-2 border-red-500 p-2"
                style={{
                  background:
                    "linear-gradient(to right, rgba(255, 75, 75, 0.15) 0%, rgba(255, 75, 75, 0.03))",
                }}
              >
                {error}
              </span>
            )}
            <span>(Test Codes: SAVE10, SAVE15)</span>
          </div>
        )}
        <button
          type="button"
          key={"details_button"}
          className="flex w-full items-center justify-between"
          onClick={() => setDetailsShown((prevValue) => !prevValue)}
        >
          <span>Detailed invoice</span>
          <FaChevronDown />
        </button>
        <div className="w-full overflow-hidden">
          <div
            className={`w-full flex-col gap-2 ${!detailsShown ? "hidden max-h-0" : "flex max-h-[500px]"}`}
          >
            <div className="flex w-full items-center justify-between">
              <h4 className="text-fontLightGray">Item(s):</h4>
              <h4>
                {state.cartItems.length > 0
                  ? formatter(summary.priceExclTax, currency.curSymbol)
                  : formatter(0, currency.curSymbol)}
              </h4>
            </div>
            <div className="flex w-full items-center justify-between">
              <h4 className="text-fontLightGray">+20% Tax:</h4>
              <h4>
                {state.cartItems.length > 0
                  ? formatter(summary.taxPrice, currency.curSymbol)
                  : formatter(0, currency.curSymbol)}
              </h4>
            </div>
            {!currentPayment && (
              <>
                <hr className="h-[1px] w-full" />
                <div className="flex w-full items-center justify-between">
                  <h4 className="text-fontLightGray">Total:</h4>
                  <h4>
                    {state.cartItems.length > 0
                      ? formatter(summary.subtotal, currency.curSymbol)
                      : formatter(0, currency.curSymbol)}
                  </h4>
                </div>
              </>
            )}
            {currentPayment && (
              <>
                <hr className="h-[1px] w-full" />
                <div className="flex w-full items-center justify-between">
                  <h4 className="text-fontLightGray">Subtotal:</h4>
                  <h4>
                    {state.cartItems.length > 0
                      ? formatter(summary.subtotal, currency.curSymbol)
                      : formatter(0, currency.curSymbol)}
                  </h4>
                </div>
                <div className="flex w-full items-center justify-between">
                  <h4 className="text-fontLightGray">Payment fee:</h4>
                  <h4 className="flex gap-1">
                    {"+"}
                    {state.cartItems.length > 0
                      ? formatter(summary.paymentFee, currency.curSymbol)
                      : formatter(0, currency.curSymbol)}
                  </h4>
                </div>
                <hr className="h-[1px] w-full" />
                <div className="flex w-full items-center justify-between">
                  <h4 className="text-fontLightGray">
                    {discount ? "Total with fee:" : "Amount to pay"}
                  </h4>
                  <h4>
                    {state.cartItems.length > 0
                      ? formatter(summary.totalPrice, currency.curSymbol)
                      : formatter(0, currency.curSymbol)}
                  </h4>
                </div>
              </>
            )}
            {currentPayment && discount > 0 && (
              <>
                <div className="flex w-full items-center justify-between">
                  <h4 className="text-fontLightGray">Discount:</h4>
                  <h4 className="flex gap-1">
                    {"-"}
                    {state.cartItems.length > 0
                      ? formatter(summary.discount, currency.curSymbol)
                      : formatter(0, currency.curSymbol)}
                  </h4>
                </div>
                <hr className="h-[1px] w-full" />
                <div className="flex w-full items-center justify-between">
                  <h4 className="text-fontLightGray">Amount to pay:</h4>
                  <h4>
                    {state.cartItems.length > 0
                      ? formatter(summary.totalWithDiscount, currency.curSymbol)
                      : formatter(0, currency.curSymbol)}
                  </h4>
                </div>
              </>
            )}
          </div>
        </div>
        {currentPayment && !isReviewed && (
          <button
            type="button"
            disabled={
              !currentPayment || state.cartItems.length === 0 || isOrderLoading
            }
            onClick={() => checkoutSubmitHandler()}
            className="flex w-[200px] items-center justify-center rounded-md bg-mediumPurple p-[8px] font-semibold hover:bg-lightPurple disabled:cursor-not-allowed disabled:bg-sepiaPurple md:w-full"
          >
            <span>
              {isOrderLoading ? <ClipLoader color="#fff" /> : "Place order"}
            </span>
          </button>
        )}
        {currentPayment &&
          currentPayment.title === "Stripe" &&
          isReviewed &&
          !updatedOrder.isPaid && (
            <>
              {!isPaymentLoading || !isPending ? (
                <button
                  type="button"
                  disabled={state.cartItems.length === 0 || isOrderLoading}
                  className="flex w-[200px] items-center justify-center rounded-md bg-mediumPurple p-[8px] font-semibold hover:bg-lightPurple disabled:cursor-not-allowed disabled:bg-sepiaPurple md:w-full"
                >
                  <span>STRIPE</span>
                </button>
              ) : (
                <ClipLoader color="#fff" />
              )}
            </>
          )}
        {currentPayment &&
          currentPayment.title === "Paypal" &&
          isReviewed &&
          !updatedOrder.isPaid && (
            <>
              {!isPaymentLoading || !isPending ? (
                <PayPalButtons
                  disabled={state.cartItems.length === 0 || isOrderLoading}
                  className="paypal-buttons-class w-full"
                  onApprove={onApprove}
                  createOrder={createOrder}
                  onError={onError}
                  forceReRender={[finalAmount, createdOrder]}
                  fundingSource="paypal"
                ></PayPalButtons>
              ) : (
                <ClipLoader color="#fff" />
              )}
            </>
          )}
        {orderError && (
          <span
            className="mb-8 w-full border-l-2 border-red-500 p-2"
            style={{
              background:
                "linear-gradient(to right, rgba(255, 75, 75, 0.15) 0%, rgba(255, 75, 75, 0.03))",
            }}
          >
            {orderError}
          </span>
        )}
      </form>
    </section>
  );
}

export default CheckoutSummary;

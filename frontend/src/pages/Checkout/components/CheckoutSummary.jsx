import React, { useEffect, useState } from "react";
import { useHeaderData } from "../../../context/headerCtx";
import { useCartData } from "../../../context/cartCtx";
import { useOrder } from "../../../hooks/useOrder";
import { usePayOrder } from "../../../hooks/usePayOrder";
import StripeCheckout from "./StripeCheckout";
import PaypalCheckout from "./PaypalCheckout";
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
  const { currency, formatter } = useHeaderData();

  const { createOrderInDb, isOrderLoading, orderError, createdOrder } =
    useOrder();
  const { payOrder, isPaymentLoading, updatedOrder } = usePayOrder();

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

  //update the isPaid state to true and completedOrder state to updatedOrder object when updatedOrder's isPaid property returns as true
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

  return (
    <section className="flex min-w-full flex-col items-start justify-start gap-2 rounded-lg border border-none bg-darkestPurple bg-opacity-35 p-4 sm:min-w-[360px]">
      <div className="min-h-[36px]">
        <h3>Summary</h3>
      </div>
      <form
        name="checkoutForm"
        id="checkoutForm"
        className="flex w-full flex-col items-center justify-center gap-3"
      >
        <div className="flex w-full items-center justify-between">
          <h4 className="text-fontLightGray">Total:</h4>
          <h4>
            {state.cartItems.length > 0
              ? formatter(finalAmount, currency.cur)
              : formatter(0, currency.cur)}
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
                  ? formatter(summary.priceExclTax, currency.cur)
                  : formatter(0, currency.cur)}
              </h4>
            </div>
            <div className="flex w-full items-center justify-between">
              <h4 className="text-fontLightGray">+20% Tax:</h4>
              <h4>
                {state.cartItems.length > 0
                  ? formatter(summary.taxPrice, currency.cur)
                  : formatter(0, currency.cur)}
              </h4>
            </div>
            {!currentPayment && (
              <>
                <hr className="h-[1px] w-full" />
                <div className="flex w-full items-center justify-between">
                  <h4 className="text-fontLightGray">Total:</h4>
                  <h4>
                    {state.cartItems.length > 0
                      ? formatter(summary.subtotal, currency.cur)
                      : formatter(0, currency.cur)}
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
                      ? formatter(summary.subtotal, currency.cur)
                      : formatter(0, currency.cur)}
                  </h4>
                </div>
                <div className="flex w-full items-center justify-between">
                  <h4 className="text-fontLightGray">Payment fee:</h4>
                  <h4 className="flex gap-1">
                    {"+"}
                    {state.cartItems.length > 0
                      ? formatter(summary.paymentFee, currency.cur)
                      : formatter(0, currency.cur)}
                  </h4>
                </div>
                <hr className="h-[1px] w-full" />
                <div className="flex w-full items-center justify-between">
                  <h4 className="text-fontLightGray">
                    {discount ? "Total with fee:" : "Amount to pay"}
                  </h4>
                  <h4>
                    {state.cartItems.length > 0
                      ? formatter(summary.totalPrice, currency.cur)
                      : formatter(0, currency.cur)}
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
                      ? formatter(summary.discount, currency.cur)
                      : formatter(0, currency.cur)}
                  </h4>
                </div>
                <hr className="h-[1px] w-full" />
                <div className="flex w-full items-center justify-between">
                  <h4 className="text-fontLightGray">Amount to pay:</h4>
                  <h4>
                    {state.cartItems.length > 0
                      ? formatter(summary.totalWithDiscount, currency.cur)
                      : formatter(0, currency.cur)}
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
      </form>
      <StripeCheckout
        isPaymentLoading={isPaymentLoading}
        isOrderLoading={isOrderLoading}
        state={state}
        payOrder={payOrder}
        dispatch={dispatch}
        setIsReviewed={setIsReviewed}
        setCurrentPayment={setCurrentPayment}
        createdOrder={createdOrder}
        currentPayment={currentPayment}
        finalAmount={finalAmount}
        currency={currency}
        isReviewed={isReviewed}
        updatedOrder={updatedOrder}
      />
      <PaypalCheckout
        isPaymentLoading={isPaymentLoading}
        isOrderLoading={isOrderLoading}
        state={state}
        payOrder={payOrder}
        dispatch={dispatch}
        setIsReviewed={setIsReviewed}
        setCurrentPayment={setCurrentPayment}
        createdOrder={createdOrder}
        currentPayment={currentPayment}
        finalAmount={finalAmount}
        currency={currency}
        isReviewed={isReviewed}
        updatedOrder={updatedOrder}
      />
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
    </section>
  );
}

export default CheckoutSummary;

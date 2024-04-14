import React, { useEffect } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useParams } from "react-router-dom";
import { useHeaderData } from "../../../context/headerCtx";
import useOrderFetch from "../../../hooks/useOrderFetch";
import usePaypalClientId from "../../../hooks/usePaypalClientId";
import { usePayOrder } from "../../../hooks/usePayOrder";
import { formatDate } from "../../../utils/formatDate";
import ErrorMessage from "../../../components/UI/ErrorMessage";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";

const OrderDetails = () => {
  const { id } = useParams();
  const { currency, formatter } = useHeaderData();
  const { refetchOrder, isOrderFetchLoading, orderFetchError, order } =
    useOrderFetch(id);
  const { payOrder, isPaymentLoading, paymentError } = usePayOrder();
  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();
  const { isPaypalLoading, paypalError, paypal } = usePaypalClientId();

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
      if (order && !order.isPaid) {
        if (!window.paypal) {
          loadPayPalScript();
        }
      }
    }
  }, [
    order,
    currency.cur,
    isPaypalLoading,
    paypal.clientId,
    paypalDispatch,
    paypalError,
  ]);

  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              value:
                order.totalAmount === 0 ? order.totalPrice : order.totalAmount,
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
        await payOrder({ id: order._id, details });
        refetchOrder();
        toast.success("Payment successful");
      } catch (error) {
        toast.error(error?.data?.message || error.message);
      }
    });
  };

  const onError = (error) => {
    toast.error(error.message);
  };

  return (
    <section className="w-full">
      {isOrderFetchLoading && <BeatLoader color="#fff" />}
      {orderFetchError && <ErrorMessage msg={orderFetchError} />}
      {order && !isOrderFetchLoading && order.orderItems && (
        <div className="flex w-full flex-col items-start justify-start gap-5">
          <section className="flex w-full items-center justify-start gap-5">
            <h2>ID: </h2>
            <h2>{order._id}</h2>
          </section>
          <section
            className="flex w-full
            max-w-[260px] items-center justify-between text-lg"
          >
            <span className="font-semibold">Created on: </span>
            <span>{formatDate(order.createdAt)}</span>
          </section>
          <section className="w-full sm:w-fit">
            <span className="font-semibold">Products: </span>
            <div className="flex w-full flex-col">
              {order.orderItems.map((p, i) => (
                <div
                  key={i}
                  className={`grid w-full grid-cols-4 border-b border-white sm:grid-cols-10 ${i === 0 ? "border-t" : ""}`}
                >
                  <span className="py-2 pr-3 sm:col-span-2">
                    {p.product.title}
                  </span>
                  <ul className="col-span-2 flex flex-wrap gap-x-2 px-3 py-2 sm:col-span-7">
                    {Object.entries(p.filters).map(
                      ([filterName, filterValue], index, array) => (
                        <React.Fragment key={index}>
                          <li className="flex flex-wrap gap-2">
                            {Array.isArray(filterValue)
                              ? filterValue.join(", ")
                              : filterValue}
                          </li>
                          {index !== array.length - 1 && (
                            <li className="flex items-center justify-center ">
                              <span className="text-center text-xs">
                                &#9679;
                              </span>
                            </li>
                          )}
                        </React.Fragment>
                      ),
                    )}
                  </ul>
                  <span className="px-3 py-2 text-right">
                    {formatter(p.price, currency.cur)}
                  </span>
                </div>
              ))}
            </div>
          </section>
          <section className="flex w-full flex-col text-lg">
            <div
              className="flex w-full
              items-center justify-between sm:max-w-[260px]"
            >
              <span className="font-semibold">Items: </span>
              <span>{formatter(order.itemsPrice, currency.cur)}</span>
            </div>
            <div
              className="flex w-full
              items-center justify-between sm:max-w-[260px]"
            >
              <span className="font-semibold">20% Tax: </span>
              <span>{formatter(order.taxPrice, currency.cur)}</span>
            </div>
            <div
              className="flex w-full
              items-center justify-between sm:max-w-[260px]"
            >
              <span className="font-semibold">Subtotal: </span>
              <span>{formatter(order.subtotalPrice, currency.cur)}</span>
            </div>
            <div
              className="flex w-full
              items-center justify-between sm:max-w-[260px]"
            >
              <span className="font-semibold">Payment fee: </span>
              <span>{formatter(order.paymentFee, currency.cur)}</span>
            </div>
            <div
              className="flex w-full
              items-center justify-between sm:max-w-[260px]"
            >
              <span className="font-semibold">Total with fee: </span>
              <span>{formatter(order.totalPrice, currency.cur)}</span>
            </div>
            {order.discount > 0 && (
              <did>
                <div
                  className="flex w-full
                items-center justify-between sm:max-w-[260px]"
                >
                  <span className="font-semibold">Discount: </span>
                  <span>{formatter(order.discount, currency.cur)}</span>
                </div>
                <div
                  className="flex w-full
                items-center justify-between sm:max-w-[260px]"
                >
                  <span className="font-semibold">Amount to pay: </span>
                  <span>{formatter(order.totalAmount, currency.cur)}</span>
                </div>
              </did>
            )}
          </section>
          <section className="flex w-full items-center justify-between sm:max-w-[260px]">
            <span className="font-semibold">Delivered: </span>
            {order.isDelivered ? (
              <span className="rounded-md border-none bg-lightGreen px-[10px] py-[6px] text-darkGreen">
                Delivered
              </span>
            ) : (
              <span className="rounded-md border-none bg-lightOrange px-[10px] py-[6px] text-mediumOrange">
                Unfulfilled
              </span>
            )}
          </section>
          <section className="flex w-full items-center justify-between sm:max-w-[260px]">
            <span className="font-semibold">Paid: </span>
            {order.isPaid ? (
              <span className="rounded-md border-none bg-lightGreen px-[10px] py-[6px] font-semibold text-darkGreen">
                Paid
              </span>
            ) : (
              <span className="rounded-md border-none bg-skyBlue px-[10px] py-[6px] font-semibold text-blueGreen">
                Unpaid
              </span>
            )}
          </section>
          {order && order.paymentMethod === "Paypal" && !order.isPaid && (
            <section>
              {isPaymentLoading && <BeatLoader color="#fff" />}
              {isPending ? (
                <BeatLoader color="#fff" />
              ) : (
                <PayPalButtons
                  disabled={!order || !order.orderItems.length === 0}
                  className="paypal-buttons-class w-full"
                  onApprove={onApprove}
                  createOrder={createOrder}
                  onError={onError}
                  fundingSource="paypal"
                ></PayPalButtons>
              )}
              {paymentError && <ErrorMessage msg={paymentError} />}
            </section>
          )}
        </div>
      )}
    </section>
  );
};

export default OrderDetails;

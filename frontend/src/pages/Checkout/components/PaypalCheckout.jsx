import React, { useEffect } from "react";
import usePaypalClientId from "../../../hooks/usePaypalClientId";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

const PaypalCheckout = ({
  isPaymentLoading,
  isOrderLoading,
  state,
  payOrder,
  dispatch,
  setIsReviewed,
  setCurrentPayment,
  createdOrder,
  currentPayment,
  finalAmount,
  currency,
  isReviewed,
  updatedOrder,
}) => {
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

  // paypal actions
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
    <>
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
    </>
  );
};

export default PaypalCheckout;

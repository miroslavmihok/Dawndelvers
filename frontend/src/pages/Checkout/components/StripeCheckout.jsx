import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js/pure";
import { Elements } from "@stripe/react-stripe-js";
import { makeRequest } from "../../../makeRequest";
import CheckoutForm from "./CheckoutForm";
import { toast } from "react-toastify";

const StripeCheckout = ({
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
  //Loading Stripe
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const loadStripeWithKey = async () => {
      try {
        const response = await makeRequest.get(
          process.env.REACT_APP_STRIPE_CONFIG_URL,
          null,
          { withCredentials: true },
        );
        if (response.status === 200) {
          const { publishableKey } = response.data;
          setStripePromise(loadStripe(publishableKey));
        }
      } catch (error) {
        toast.error(error?.data?.message || error.message);
      }
    };
    if (currentPayment && currentPayment.title === "Stripe") {
      loadStripeWithKey();
    }
  }, [currentPayment]);

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const response = await makeRequest.post(
          process.env.REACT_APP_STRIPE_INTENT_URL,
          { amount: finalAmount, currency: currency.cur.toLowerCase() },
          { withCredentials: true },
        );
        if (response.status === 200) {
          const { clientSecret } = response.data;
          setClientSecret(clientSecret);
        }
      } catch (error) {
        toast.error(error?.data?.message || error.message);
      }
    };
    if (currentPayment && currentPayment.title === "Stripe") {
      createPaymentIntent();
    }
  }, [currency.cur, finalAmount, currentPayment]);

  return (
    <>
      {currentPayment &&
        currentPayment.title === "Stripe" &&
        isReviewed &&
        !updatedOrder.isPaid &&
        stripePromise &&
        clientSecret && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm
              isPaymentLoading={isPaymentLoading}
              isOrderLoading={isOrderLoading}
              state={state}
              payOrder={payOrder}
              dispatch={dispatch}
              setIsReviewed={setIsReviewed}
              setCurrentPayment={setCurrentPayment}
              createdOrder={createdOrder}
            />
          </Elements>
        )}
    </>
  );
};

export default StripeCheckout;

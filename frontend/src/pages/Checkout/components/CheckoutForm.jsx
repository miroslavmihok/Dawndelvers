import React, { useState } from "react";
import { useAuthData } from "../../../context/authCtx";
import ErrorMessage from "../../../components/UI/ErrorMessage";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

const CheckoutForm = ({
  isPaymentLoading,
  isOrderLoading,
  state,
  payOrder,
  dispatch,
  setIsReviewed,
  setCurrentPayment,
  createdOrder,
}) => {
  const { userItem } = useAuthData();

  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleStripeSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Return URL where the customer should be redirected after the PaymentIntent is confirmed.
        return_url: "https://example.com",
      },
      redirect: "if_required",
    });

    if (error) {
      setMessage(error.message);
    } else {
      try {
        const details = {
          id: Math.floor(Math.random() * 100),
          status: "COMPLETED",
          update_time: new Date(Date.now()),
          payer: {
            email_address: userItem.email,
          },
        };
        await payOrder({ id: createdOrder._id, details });
        toast.success("Payment successful");
        dispatch({ type: "CLEAR", payload: [] });
        setIsReviewed(false);
        setCurrentPayment(null);
      } catch (error) {
        toast.error(error?.data?.message || error.message);
      }
    }

    setIsProcessing(false);
  };

  return (
    <form
      onSubmit={handleStripeSubmit}
      className="stripeCheckoutForm flex w-full flex-col items-center justify-start gap-3 rounded-md border-none bg-white p-2"
    >
      <PaymentElement />
      {!isPaymentLoading ? (
        <button
          type="submit"
          disabled={
            state.cartItems.length === 0 ||
            isOrderLoading ||
            isProcessing ||
            !stripe ||
            !elements
          }
          className="flex w-[200px] items-center justify-center rounded-md bg-mediumPurple p-[8px] font-semibold hover:bg-lightPurple disabled:cursor-not-allowed disabled:bg-sepiaPurple md:w-full"
        >
          {isProcessing ? "Processing..." : "Pay with Stripe"}
        </button>
      ) : (
        <ClipLoader color="#fff" />
      )}
      {/* Show error message to your customers */}
      {message && <ErrorMessage msg={message} />}
    </form>
  );
};

export default CheckoutForm;

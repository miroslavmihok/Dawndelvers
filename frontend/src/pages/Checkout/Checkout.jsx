import React, { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import PaymentMethod from "./components/PaymentMethod";
import bg from "../../assets/backgrounds/main-home-rev-2.png";
import CheckoutSummary from "./components/CheckoutSummary";
import ChosenPaymentMethod from "./components/ChosenPaymentMethod";
import CheckoutSteps from "./components/CheckoutSteps";
import ReviewOrder from "./components/ReviewOrder";
import CompletedOrder from "./components/CompletedOrder";

function Checkout() {
  const [currentPayment, setCurrentPayment] = useState(null);
  const [isReviewed, setIsReviewed] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [completedOrder, setCompletedOrder] = useState({});

  return (
    <>
      <div
        className="mt-[56px] flex max-h-screen w-full flex-col items-center justify-start bg-darkPurple pt-8 md:mt-[66px] xl:mt-0 xl:min-h-[800px]"
        style={{
          background: `linear-gradient(0deg, rgba(28,16,36,1) 0%, rgba(28,16,36,0) 50%, rgba(28,16,36,1) 100%), url(${bg}) center center / cover no-repeat`,
        }}
      >
        <div className="w-full px-8 xl:w-[900px] 2xl:w-[1200px] 3xl:w-[1580px]">
          <Breadcrumbs />
        </div>
        <div className="checkout-container w-full px-8 xl:w-[900px] 2xl:w-[1200px] 3xl:w-[1580px]">
          <div className="rounded-md p-2 md:p-8">
            <h3 className="mb-4 text-center">Checkout</h3>
            <CheckoutSteps
              currentPayment={currentPayment}
              isReviewed={isReviewed}
              isPaid={isPaid}
            />
            {!isPaid && (
              <div className="mt-6 flex flex-col items-center justify-start gap-5 lg:flex-row lg:items-start lg:justify-center">
                {!currentPayment && (
                  <PaymentMethod
                    currentPayment={currentPayment}
                    setCurrentPayment={setCurrentPayment}
                  />
                )}
                {currentPayment && (
                  <div className="flex w-full flex-col items-start justify-start gap-4">
                    <ChosenPaymentMethod
                      item={currentPayment}
                      setCurrentPayment={setCurrentPayment}
                      setIsReviewed={setIsReviewed}
                    />
                    <ReviewOrder
                      currentPayment={currentPayment}
                      isReviewed={isReviewed}
                    />
                  </div>
                )}
                <CheckoutSummary
                  currentPayment={currentPayment}
                  setCurrentPayment={setCurrentPayment}
                  isReviewed={isReviewed}
                  setIsReviewed={setIsReviewed}
                  isPaid={isPaid}
                  setIsPaid={setIsPaid}
                  setCompletedOrder={setCompletedOrder}
                />
              </div>
            )}
            {isPaid && completedOrder && (
              <div className="mt-6 flex flex-col items-center justify-start gap-5 lg:flex-row lg:items-start lg:justify-center">
                <CompletedOrder completedOrder={completedOrder} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;

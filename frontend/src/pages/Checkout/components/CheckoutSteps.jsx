import React from "react";

function CheckoutSteps({ currentPayment, isReviewed, isPaid }) {
  return (
    <section className="flex w-full items-end justify-center gap-3">
      <div
        className={`border-b-2 pb-2 font-semibold uppercase text-white ${currentPayment || isPaid ? "border-green-500" : "border-lightPurple"}`}
        style={{ flex: 1 }}
      >
        <span>1. payment method</span>
      </div>
      <div
        className={`border-b-2 pb-2 font-semibold uppercase ${currentPayment && !isReviewed ? "border-lightPurple text-white" : (currentPayment && isReviewed) || isPaid ? "border-green-500" : "border-gray-500 text-fontCoolGray"}`}
        style={{ flex: 1 }}
      >
        <span>2. review order</span>
      </div>
      <div
        className={`border-b-2 pb-2 font-semibold uppercase ${currentPayment && isReviewed ? "border-lightPurple text-white" : isPaid ? "border-green-500" : "border-gray-500 text-fontCoolGray"}`}
        style={{ flex: 1 }}
      >
        <span>3. payment gateway</span>
      </div>
    </section>
  );
}

export default CheckoutSteps;

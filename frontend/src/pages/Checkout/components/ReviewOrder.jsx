import React from "react";
import { useCartData } from "../../../context/cartCtx";
import CartItem from "../../Cart/components/CartItem";

function ReviewOrder({ currentPayment, isReviewed }) {
  const { state } = useCartData();

  return (
    <section
      className="flex w-full flex-col items-start justify-start gap-2 text-fontLightGray"
      style={{ flex: 1 }}
    >
      <div className="flex w-full items-center justify-start gap-3 text-white">
        <div
          className={`flex size-9 items-center justify-center rounded-full border-none ${isReviewed ? "bg-lemonGreen" : "bg-lightPurple"}`}
        >
          <span className="text-xl font-bold leading-none">2</span>
        </div>
        <h3>Review Order</h3>
      </div>
      <div
        className="flex w-full flex-col gap-3 text-white"
        style={{ flex: 1 }}
      >
        {state.cartItems.map((product, index) => (
          <CartItem
            key={index}
            index={index}
            imgSrc={product.product.imgSrc}
            title={product.product.title}
            price={product.price}
            filters={product.filters}
            id={product.id}
            cartProducts={state.cartItems}
            currentPayment={currentPayment}
          />
        ))}
      </div>
    </section>
  );
}

export default ReviewOrder;

import React from "react";
import { Link } from "react-router-dom";
import { useCartData } from "../../context/cartCtx";
import { useHeaderData } from "../../context/headerCtx";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import formatter from "../../utils/formatter";
import CartItem from "./components/CartItem";

import bg from "../../assets/backgrounds/main-home-rev-2.png";
import { useAuthData } from "../../context/authCtx";

function Cart({ displayAuthModalHandler }) {
  const { state, dispatch } = useCartData();
  const { userItem } = useAuthData();
  const { currency } = useHeaderData();

  return (
    <div
      className="mt-[56px] flex min-h-screen w-full flex-col items-center justify-start bg-darkPurple pt-8 md:mt-[66px] xl:mt-0"
      style={{
        background: `linear-gradient(0deg, rgba(28,16,36,1) 0%, rgba(28,16,36,0) 50%, rgba(28,16,36,1) 100%), url(${bg}) center center / cover no-repeat`,
      }}
    >
      <div className="w-full px-8 xl:w-[900px] 2xl:w-[1200px] 3xl:w-[1580px]">
        <Breadcrumbs />
      </div>
      <div className="cart-container w-full px-8 xl:w-[900px] 2xl:w-[1200px] 3xl:w-[1580px]">
        <div className="rounded-md border border-white/30 p-2 md:p-8">
          <h3 className="mb-4 text-center">
            Shopping Cart (
            <span>
              {state.cartItems.length > 0
                ? state.cartItems.reduce((a, c) => a + 1, 0)
                : 0}
            </span>
            )
          </h3>
          <div className="cart-content flex w-full flex-col gap-8 md:flex-row">
            <section className="flex flex-col gap-3" style={{ flex: 1 }}>
              {state.cartItems.length === 0 && (
                <div className="text-center">No items in Cart yet</div>
              )}
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
                  dispatch={dispatch}
                />
              ))}
            </section>
            <section className="min-w-full sm:min-w-[240px]">
              <div className="flex w-full flex-col items-center justify-center gap-3 rounded-lg border border-none bg-darkestPurple bg-opacity-35 p-4">
                <div className="flex w-full items-center justify-between">
                  <h4>Subtotal:</h4>
                  <h4>
                    {state.cartItems.length > 0
                      ? formatter(state.priceExclTax, currency.curSymbol)
                      : formatter(0, currency.curSymbol)}
                  </h4>
                </div>
                <div className="flex w-full items-center justify-between">
                  <h4>+20% Tax:</h4>
                  <h4>
                    {state.cartItems.length > 0
                      ? formatter(state.taxPrice, currency.curSymbol)
                      : formatter(0, currency.curSymbol)}
                  </h4>
                </div>
                <hr className="h-[1px] w-full" />
                <div className="flex w-full items-center justify-between">
                  <h4>Total:</h4>
                  <h4>
                    {state.cartItems.length > 0
                      ? formatter(state.totalPrice, currency.curSymbol)
                      : formatter(0, currency.curSymbol)}
                  </h4>
                </div>
                <Link
                  to="/checkout"
                  className="flex w-[200px] items-center justify-center rounded-md bg-mediumPurple p-[8px] font-semibold hover:bg-lightPurple md:w-full"
                  onClick={!userItem ? () => displayAuthModalHandler() : null}
                >
                  <span>Proceed to checkout</span>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

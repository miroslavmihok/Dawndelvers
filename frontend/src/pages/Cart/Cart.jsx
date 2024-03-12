import React, { useState } from "react";
import { useCartData } from "../../context/cartCtx";
import { useHeaderData } from "../../context/headerCtx";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import formatter from "../../utils/formatter";
import CartItem from "./components/CartItem";
import { cartPaymentOptions } from "../../data/paymentOptions";
import bg from "../../assets/backgrounds/main-home-rev-2.png";
import { FaAngleDown } from "react-icons/fa6";

function Cart() {
  const {
    cartProducts,
    setCartProducts,
    cartCount,
    setCartCount,
    cartSum,
    setCartSum,
    cartSumWithoutTax,
    setCartSumWithoutTax,
    tax,
    setTax,
  } = useCartData();
  const { currency } = useHeaderData();

  const [isPaymentOptionsShown, setIsPaymentOptionsShown] = useState(false);

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
            Shopping Cart (<span>{cartCount}</span>)
          </h3>
          {cartProducts.length === 0 && (
            <div className="text-center">No items in Cart yet</div>
          )}
          {cartProducts.length > 0 && (
            <div className="cart-content flex w-full flex-col gap-8">
              <section className="flex flex-col gap-3">
                {cartProducts.map((product, index) => (
                  <CartItem
                    key={index}
                    index={index}
                    imgSrc={product.product.imgSrc}
                    title={product.product.title}
                    price={product.price}
                    filters={product.filters}
                    id={product.id}
                    cartProducts={cartProducts}
                    setCartProducts={setCartProducts}
                    cartCount={cartCount}
                    setCartCount={setCartCount}
                    setCartSum={setCartSum}
                    setCartSumWithoutTax={setCartSumWithoutTax}
                    setTax={setTax}
                  />
                ))}
              </section>
              <section className="flex flex-col items-center justify-start gap-2 text-fontLightGray">
                <button
                  className="w-full max-w-[800px] overflow-hidden rounded-md bg-mediumPurple px-4 py-2 text-left"
                  onClick={() =>
                    setIsPaymentOptionsShown(!isPaymentOptionsShown)
                  }
                >
                  <div className="flex min-h-[47px] items-center justify-between">
                    <span className="">Payment options</span>
                    <FaAngleDown size={"24px"} />
                  </div>
                </button>
                <div
                  className={`transition-maxHeight w-full max-w-[800px] overflow-hidden duration-300 ease-in-out ${isPaymentOptionsShown ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <form className="flex w-full flex-col gap-2 overflow-hidden">
                    {cartPaymentOptions.map((item, index) => (
                      <label
                        htmlFor={item.title}
                        key={index}
                        className="flex cursor-pointer items-center justify-between gap-4 rounded-md border border-mediumPurple bg-mediumPurple px-4 py-2 hover:border-lightPurple hover:bg-lightPurple focus:border-mediumPurple focus:bg-lightPurple active:bg-lightPurple"
                      >
                        <div className="flex min-h-[47px] gap-4 ">
                          <img
                            src={item.imgSrc}
                            alt={item.title}
                            className="max-w-[70px] object-contain"
                          />
                          <div className="flex flex-col items-start justify-center">
                            <h5>{item.title}</h5>
                            <ul className="flex flex-wrap items-center justify-start gap-x-3">
                              {item.paymentList?.map((item, index) => (
                                <li key={index}>{item.title}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <input
                          type="radio"
                          name="paymentOption"
                          id={item.title}
                          value={item.title}
                        />
                      </label>
                    ))}
                  </form>
                </div>
              </section>
              <section>
                <div className="flex w-full justify-end">
                  <div className="p-4 md:w-[35%]">
                    <div className="flex w-full items-center justify-between">
                      <h4>Subtotal:</h4>
                      <h4>
                        {formatter(cartSumWithoutTax, currency.curSymbol)}
                      </h4>
                    </div>
                    <div className="flex w-full items-center justify-between">
                      <h4>+20% Tax:</h4>
                      <h4>{formatter(tax, currency.curSymbol)}</h4>
                    </div>
                    <div className="flex w-full items-center justify-between">
                      <h4>Total:</h4>
                      <h4>{formatter(cartSum, currency.curSymbol)}</h4>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;

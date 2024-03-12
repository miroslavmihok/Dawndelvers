import React from "react";
import { useHeaderData } from "../../../context/headerCtx";
import formatter from "../../../utils/formatter";
import { FaTrashCan } from "react-icons/fa6";

function CartItem({
  index,
  imgSrc,
  title,
  filters,
  price,
  id,
  cartProducts,
  setCartProducts,
  cartCount,
  setCartCount,
  setCartSum,
  setCartSumWithoutTax,
  setTax,
}) {
  const { currency } = useHeaderData();

  const removeProductHandler = (id) => {
    const filteredProduct = cartProducts.filter((p) => p.id === id);
    if (filteredProduct) {
      const { price } = filteredProduct[0];
      setCartSum((prevSum) => prevSum - price);
      setCartSumWithoutTax((prevSum) => prevSum - price * 0.8);
      setTax((prevSum) => prevSum - price * 0.2);
    } else {
      return;
    }
    const filteredCartProducts = cartProducts.filter(
      (product) => product.id !== id,
    );
    setCartProducts(filteredCartProducts);
    if (cartCount > 0) {
      setCartCount((prevCount) => prevCount - 1);
    }
  };
  return (
    <div
      key={index}
      className="flex flex-col gap-4 bg-mediumPurple p-4 md:flex-row md:gap-0"
    >
      <div className="cartItem-container flex w-full gap-2">
        <div className="flex items-start justify-center md:w-[25%]">
          <img
            src={imgSrc}
            alt={title}
            className="aspect-square max-w-[64px] object-contain sm:max-w-[100px] lg:max-w-[120px]"
          />
        </div>
        <div className="cartItem-middle flex flex-col items-start justify-start">
          <h4>{title}</h4>
          <ul className="flex flex-wrap gap-x-2">
            {Object.entries(filters).map(
              ([filterName, filterValue], index, array) => (
                <React.Fragment key={index}>
                  <li className="flex flex-wrap gap-2">
                    {Array.isArray(filterValue)
                      ? filterValue.join(", ")
                      : filterValue}
                  </li>
                  {index !== array.length - 1 && (
                    <li className="flex items-center justify-center ">
                      <span className="text-center text-xs">&#9679;</span>
                    </li>
                  )}
                </React.Fragment>
              ),
            )}
          </ul>
        </div>
      </div>
      <div className="flex flex-row-reverse items-center justify-between md:w-[25%] md:flex-col md:items-end">
        <h4>{formatter(price, currency.curSymbol)}</h4>
        <button
          onClick={() => removeProductHandler(id)}
          className="flex items-center gap-2 px-2 py-1"
        >
          <FaTrashCan />
          <span>Remove</span>
        </button>
      </div>
    </div>
  );
}

export default CartItem;

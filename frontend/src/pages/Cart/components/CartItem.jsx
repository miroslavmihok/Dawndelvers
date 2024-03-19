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
  dispatch,
  currentPayment,
}) {
  const { currency } = useHeaderData();

  const removeProductHandler = (id) => {
    const filteredProduct = cartProducts.find((p) => p.id === id);
    dispatch({ type: "REMOVE", payload: filteredProduct });
  };
  return (
    <div
      key={index}
      className="flex flex-col gap-4 rounded-md border-none bg-mediumPurple p-4 md:flex-row md:gap-0"
    >
      <div className="cartItem-container flex w-full gap-2">
        <div className="flex items-start justify-center md:w-[25%]">
          <div className="w-full max-w-[64px] overflow-hidden rounded-md border-none sm:max-w-[100px] lg:max-w-[120px]">
            <img
              src={imgSrc}
              alt={title}
              className="aspect-square w-full max-w-[64px] object-contain sm:max-w-[100px] lg:max-w-[120px]"
            />
          </div>
        </div>
        <div
          className="cartItem-middle flex flex-col items-start justify-start"
          style={{ flex: 1 }}
        >
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
      <div className="flex flex-row-reverse items-center justify-between md:w-[30%] md:flex-col md:items-end lg:w-[25%]">
        <h4>{formatter(price, currency.curSymbol)}</h4>
        {!currentPayment && (
          <button
            onClick={() => removeProductHandler(id)}
            className="flex items-center gap-2 px-2 py-1"
          >
            <FaTrashCan />
            <span>Remove</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default CartItem;

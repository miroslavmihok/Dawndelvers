import React from "react";
import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa6";
import { useHeaderData } from "../../../../context/headerCtx";

function ProductItem({
  gameUrl,
  url,
  deal,
  title,
  description,
  price,
  priceBeforeDiscount,
  imageUrl,
}) {
  const { currency, formatter } = useHeaderData();

  return (
    <Link
      to={`/products/${gameUrl}/${url}`}
      className="product-Card relative flex h-[300px] min-w-[256px] max-w-[530px] flex-grow basis-0 overflow-hidden rounded-2xl"
    >
      <div className="z-20 flex max-w-full flex-grow flex-col items-start justify-between rounded-2xl p-4">
        <div
          className={`${deal ? "opacity-1" : "opacity-0"} text-md flex items-center gap-1 rounded-md bg-yellow-300 px-2 py-1 font-bold text-black`}
        >
          <FaRegClock size={"14px"} />
          <span>Limited Deal!</span>
        </div>
        <div className="w-full">
          <h4 className="font-bold">{title}</h4>
          <p className="mb-2 truncate leading-4">{description}</p>
          <div className="flex items-center gap-x-2">
            <span>From </span>
            <h4
              className={`font-bold ${price < priceBeforeDiscount ? "text-lemonGreen" : "text-white"}`}
            >
              {formatter(price, currency.cur)}
            </h4>
            {price < priceBeforeDiscount && (
              <h4
                className={`font-semibold ${price < priceBeforeDiscount ? "text-sepiaGray line-through" : ""}`}
              >
                {formatter(priceBeforeDiscount, currency.cur)}
              </h4>
            )}
          </div>
        </div>
      </div>
      <div
        className={`product-Card-bg absolute inset-0 z-0 h-[300px] min-w-[256px] max-w-[530px]`}
        style={{
          background: `linear-gradient(rgba(51, 41, 70, 0) 0%, rgb(51, 41, 70) 100%) 0% 0% / 100%, linear-gradient(rgba(51, 41, 70, 0) 0%, rgb(51, 41, 70) 100%), url(${imageUrl}) center top / cover no-repeat`,
        }}
      ></div>
    </Link>
  );
}

export default ProductItem;

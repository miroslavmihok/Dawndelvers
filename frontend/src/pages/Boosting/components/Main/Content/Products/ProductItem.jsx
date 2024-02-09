import React from "react";
import { FaRegClock } from "react-icons/fa6";
import { useData } from "../../../../../../dataContext/dataCtx";

function ProductItem({
  id,
  url,
  deal,
  title,
  description,
  price,
  imageUrl,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) {
  const { currency } = useData();

  let imgSrc = `${process.env.PUBLIC_URL}${imageUrl}`;

  return (
    <a
      href={url}
      className="product-Card flex min-w-[auto] max-w-[530px] flex-grow basis-0 rounded-2xl"
    >
      <div
        className="flex h-[300px] min-w-[256px] max-w-[530px] flex-grow flex-col items-start justify-between rounded-2xl p-4"
        style={{
          transition: "all 0.3s ease-in-out",
          background: isHovered
            ? `linear-gradient(rgba(51, 41, 70, 0) 0%, rgb(51, 41, 70) 100%) 0% 0% / 100%, linear-gradient(rgba(51, 41, 70, 0) 0%, rgb(51, 41, 70) 100%), url(${imgSrc}) center top / 110% no-repeat, rgb(51, 41, 70)`
            : `linear-gradient(rgba(51, 41, 70, 0) 0%, rgb(51, 41, 70) 100%) 0% 0% / 100%, linear-gradient(rgba(51, 41, 70, 0) 0%, rgb(51, 41, 70) 100%), url(${imgSrc}) center top / 100% no-repeat, rgb(51, 41, 70)`,
        }}
        onMouseEnter={() => onMouseEnter(id)}
        onMouseLeave={() => onMouseLeave()}
      >
        <div
          className={`${deal ? "opacity-1" : "opacity-0"} text-md flex items-center gap-1 rounded-md bg-yellow-300 px-2 py-1 font-bold text-black`}
        >
          <FaRegClock size={"14px"} />
          <span>Limited Deal!</span>
        </div>
        <div>
          <h5 className="text-xl font-bold">{title}</h5>
          <p className="mb-2 leading-4">{description}</p>
          <div className="flex items-center ">
            <span className="mr-2">From </span>
            <span className="text-xl font-bold">{currency.curSymbol}</span>
            <span className="text-xl font-bold">{price}</span>
          </div>
        </div>
      </div>
    </a>
  );
}

export default ProductItem;

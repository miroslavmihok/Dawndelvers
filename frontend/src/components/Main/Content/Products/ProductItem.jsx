import React from "react";
import { FaRegClock } from "react-icons/fa6";
import { useData } from "../../../../dataContext/dataCtx";

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
      className={`product-Card flex min-w-[auto] flex-grow basis-0 rounded-2xl`}
    >
      <div
        className={`relative flex h-[300px] min-w-[256px] max-w-[530px] flex-grow flex-col items-start justify-between overflow-hidden border-0`}
        onMouseEnter={() => onMouseEnter(id)}
        onMouseLeave={onMouseLeave}
        style={{
          borderRadius: `inherit`,
        }}
      >
        {/* Product content */}
        {/* <div
          className={`absolute left-0 top-0 z-20 flex h-[300px] flex-col items-start justify-between p-4`}
          style={{
            borderRadius: `inherit`,
          }}
        >
          <div
            className={`${deal ? "opacity-1" : "opacity-0"} text-md flex items-center gap-1 rounded-md bg-yellow-300 px-2 py-1 font-bold text-black`}
          >
            <FaRegClock size={`14px`} />
            <span>Limited offer</span>
          </div>
          <div>
            <h5 className={`text-xl font-bold`}>{title}</h5>
            <p className={`mb-2 leading-4`}>{description}</p>
            <div className={`flex items-center `}>
              <span className={`mr-2`}>From </span>
              <span className={`text-xl font-bold`}>{currency.curSymbol}</span>
              <span className={`text-xl font-bold`}>{price}</span>
            </div>
          </div>
        </div> */}
        {/* Linear gradient overlay */}
        <div
          className={`absolute inset-0 z-10 h-full w-full`}
          style={{
            background: `linear-gradient(to top, rgb(54, 41, 70) 25%, rgba(54, 41, 70, 0) 100%)`,
            borderRadius: `inherit`, // Apply the same border-radius as the parent
          }}
        ></div>
        {/* Product image */}
        <div
          className={`h-full w-full`}
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundPosition: `center top`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: isHovered ? `100%` : `100%`,
            transition: `all 0.3s ease-in-out`,
            // borderRadius: `18px`,
          }}
        ></div>
      </div>
    </a>
  );
}

export default ProductItem;

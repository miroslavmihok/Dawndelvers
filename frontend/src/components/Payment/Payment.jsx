import React from "react";
import { paymentOptions } from "../../Data/paymentOptions";

function Payment() {
  return (
    <div className="mb-8 flex items-center justify-center border-y border-gray-400 border-opacity-15 px-8">
      <ul className="flex w-full flex-wrap items-center justify-evenly gap-x-8 md:max-w-[420px] xl:max-w-[1120px]">
        {paymentOptions.map((item, index) => (
          <li key={index} className="py-3">
            <img
              src={item.imgSrc}
              alt={item.title}
              className="h-[32px] grayscale"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Payment;

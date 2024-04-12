import React, { useEffect } from "react";
import formatter from "../../../utils/formatter";
import { cartPaymentOptions } from "../../../data/paymentOptions";
import { useHeaderData } from "../../../context/headerCtx";

function PaymentMethod({ setCurrentPayment }) {
  const { currency } = useHeaderData();

  useEffect(() => {});

  const changeHandler = (item) => {
    setCurrentPayment(item);
  };

  return (
    <section
      className="flex flex-col items-center justify-start gap-2 text-fontLightGray"
      style={{ flex: 1 }}
    >
      <div className="flex w-full items-center justify-start gap-3 text-white">
        <div className="flex size-9 items-center justify-center rounded-full border-none bg-lightPurple">
          <span className="text-xl font-bold leading-none">1</span>
        </div>
        <h3 className="">Payment Method</h3>
      </div>
      <div className={`w-full overflow-hidden duration-300 ease-in-out`}>
        <form className="flex w-full flex-col gap-2 overflow-hidden">
          {cartPaymentOptions.map((item, index) => (
            <label
              htmlFor={item.title}
              key={index}
              className="flex cursor-pointer items-center justify-between gap-2 rounded-md border border-mediumPurple bg-mediumPurple px-4 py-2 hover:border-lightPurple hover:bg-lightPurple focus:border-mediumPurple focus:bg-lightPurple active:bg-lightPurple xs:gap-4"
            >
              <div className="flex min-h-[47px] flex-col gap-4 xs:flex-row">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="max-w-[70px] object-contain"
                />
                <div className="flex flex-col items-start justify-center">
                  <h5 className="text-white">{item.title}</h5>
                  <ul className="flex flex-wrap items-center justify-start gap-x-3">
                    {item.paymentList?.map((item, index) => (
                      <li key={index}>{item.title}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-end gap-3">
                <span className="flex w-[69px] flex-wrap items-center justify-end gap-1 text-end text-fontLightGray xs:w-full">
                  {`+`}
                  {formatter(item.fixFee, currency.cur)}
                  {`service fee`}
                </span>
                <input
                  type="radio"
                  name="paymentOption"
                  id={item.title}
                  value={item.title}
                  onChange={() => changeHandler(item)}
                />
              </div>
            </label>
          ))}
        </form>
      </div>
    </section>
  );
}

export default PaymentMethod;

import React from "react";
import { useHeaderData } from "../../../context/headerCtx";
import { FaCheck } from "react-icons/fa6";

function ChosenPaymentMethod({ item, setCurrentPayment, setIsReviewed }) {
  const { currency, formatter } = useHeaderData();

  const resetHandler = () => {
    setCurrentPayment(null);
    setIsReviewed(false);
  };

  return (
    <div
      className="flex w-full flex-col items-start justify-start gap-2"
      style={{ flex: 1 }}
    >
      <div className="flex w-full items-center justify-between text-white">
        <div className="flex w-full items-center justify-start gap-3">
          <div
            className={`flex size-9 items-center justify-center rounded-full border-none ${item ? "bg-lemonGreen" : "bg-lightPurple"}`}
          >
            <span className="text-xl font-bold leading-none">
              {item ? <FaCheck /> : "1"}
            </span>
          </div>
          <h3>Payment Method</h3>
        </div>
        <div className="w-fit">
          <button
            className="whitespace-nowrap text-fontCoolGray hover:text-white"
            onClick={() => resetHandler()}
          >
            Change
          </button>
        </div>
      </div>
      <section className="w-full">
        <div className="flex cursor-pointer items-center justify-between gap-4 rounded-md border border-mediumPurple bg-mediumPurple px-4 py-2 hover:border-lightPurple hover:bg-lightPurple focus:border-mediumPurple focus:bg-lightPurple active:bg-lightPurple">
          <div className="flex min-h-[47px] gap-4 ">
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
          <div className="flex items-center justify-end gap-3 text-fontLightGray">
            <span className="flex gap-1">
              {`+`}
              {formatter(item.fixFee, currency.cur)}
              {`service fee`}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ChosenPaymentMethod;

import React, { useRef, useEffect } from "react";
import { useHeaderData } from "../../context/headerCtx";
import { usePayPalScriptReducer } from "@paypal/react-paypal-js";

function Tooltip({ list }) {
  const { isCurrencyVisible, setIsCurrencyVisible, setIsCurrency } =
    useHeaderData();
  const [{ options }, dispatch] = usePayPalScriptReducer();

  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsCurrencyVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("onmousedown", handleClickOutside);
    };
  }, [wrapperRef, setIsCurrencyVisible]);

  const clickHandler = (item) => {
    setIsCurrencyVisible(false);
    if (item === "USD") {
      setIsCurrency({
        cur: item,
        curSymbol: "$",
      });
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: item,
        },
      });
    } else {
      setIsCurrency({
        cur: item,
        curSymbol: "€",
      });
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: item,
        },
      });
    }
  };

  return (
    <>
      <div
        className={`absolute z-40 flex w-full items-center justify-center transition-all duration-500 ease-in-out ${isCurrencyVisible ? "top-[150%] block" : "top-[200%] hidden"}`}
        ref={wrapperRef}
      >
        <div className="absolute top-[-5%] aspect-square h-[10%] rotate-45 bg-lightGrey"></div>
        <ul className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-md bg-white text-black">
          {list.map((item, index) => (
            <li
              key={index}
              onClick={() => clickHandler(item)}
              className="group w-full  cursor-pointer text-center"
            >
              <button className="w-full cursor-pointer px-4 py-3 group-hover:bg-lightGrey">
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Tooltip;

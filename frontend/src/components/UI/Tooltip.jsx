import React from "react";
import { useData } from "../../dataContext/dataCtx";

function Tooltip({ list }) {
  const { isVisible, setIsVisible, setIsCurrency } = useData();

  const clickHandler = (item) => {
    setIsVisible(false);
    if (item === "USD") {
      setIsCurrency({
        cur: "USD",
        curSymbol: "$",
      });
    } else {
      setIsCurrency({
        cur: "Euro",
        curSymbol: "€",
      });
    }
  };

  return (
    <>
      <div
        className={`absolute z-40 flex w-full items-center justify-center transition-all duration-500 ease-in-out ${isVisible ? "top-[150%] opacity-100" : "top-[200%] opacity-0"}`}
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

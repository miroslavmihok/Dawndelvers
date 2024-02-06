import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useHeaderData } from "../../dataContext/headerCtx";

const Dropdown = ({ submenus, parentHeading }) => {
  const [clickedIndex, setClickedIndex] = useState(null);

  const { setIsShown, heading, setHeading } = useHeaderData();

  const clickHandler = (index) => {
    setClickedIndex(index === clickedIndex ? null : index);
    setTimeout(() => {
      setClickedIndex(null);
    }, 1000);
    setTimeout(() => {
      setIsShown(false);
    }, 500);
    setHeading("");
  };

  return (
    // subcateogories of a main category
    <ul
      className={`flex w-full flex-col items-end justify-center overflow-hidden transition-[max-height] duration-300 ease-in-out ${parentHeading === heading ? "max-h-[500px]" : "max-h-0"}`}
    >
      {submenus.map((submenu, index) => (
        // single subcategory design
        <li
          key={index}
          className={`relative h-[38px] w-[285px] overflow-hidden py-[9px]`}
          onClick={() => clickHandler(index)}
        >
          <span
            className={`duration-400 absolute flex w-full items-center gap-2 transition-all hover:text-[#9c53de] ${clickedIndex === index ? "left-0" : "left-[-14px]"}`}
          >
            <FaArrowRight />
            <button className="uppercase">{submenu.title}</button>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useHeaderData } from "../../dataContext/headerCtx";
import { useData } from "../../dataContext/dataCtx";

const Dropdown = ({ submenus, parentHeading }) => {
  const [clickedIndex, setClickedIndex] = useState(null);

  const { setIsShown, heading, setHeading } = useHeaderData();

  const { toggleScroll } = useData();

  const clickHandler = (index) => {
    setClickedIndex(index === clickedIndex ? null : index);
    setTimeout(() => {
      setClickedIndex(null);
    }, 1000);
    setTimeout(() => {
      setIsShown(false);
    }, 500);
    setHeading("");
    toggleScroll();
  };

  return (
    // subcateogories of a main category
    <ul
      className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${parentHeading === heading ? "max-h-[500px]" : "max-h-0"} `}
    >
      <div className="flex flex-col items-end">
        {submenus.map((submenu, index) => (
          // single subcategory design
          <li
            key={index}
            className={`relative h-[38px] w-[275px] overflow-hidden py-[9px]`}
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
      </div>
    </ul>
  );
};

export default Dropdown;

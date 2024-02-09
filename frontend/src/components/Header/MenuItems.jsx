import React from "react";
import Dropdown from "./Dropdown";
import { FaPlus } from "react-icons/fa";
import { useHeaderData } from "../../dataContext/headerCtx";

function MenuItems({ items }) {
  const { heading, setHeading } = useHeaderData();

  const headingClickHandler = () => {
    heading === items.title ? setHeading("") : setHeading(items.title);
    console.log(`this is heading: ${heading}`);
    console.log(`this is title: ${items.title}`);
  };

  return (
    // all game categories
    <li className="menu-items leading-5">
      {/* games categories with subcategories */}
      {/* main category */}
      <div className="relative flex items-center justify-between py-[9px]">
        <span
          className="relative w-full hover:text-[#9c53de]"
          onClick={() => headingClickHandler()}
        >
          <button
            className="uppercase"
            type="button"
            aria-haspopup="menu"
            aria-expanded={heading === items.title ? "true" : "false"}
          >
            {items.title}
          </button>
        </span>
        <FaPlus size="0.7rem" className="absolute right-0" />
      </div>
      {/* subcategories */}
      <Dropdown submenus={items.submenu} parentHeading={items.title} />
    </li>
  );
}

export default MenuItems;

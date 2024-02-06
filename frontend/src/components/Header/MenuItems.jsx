import React from "react";
import Dropdown from "./Dropdown";
import { FaPlus } from "react-icons/fa";
import { useHeaderData } from "../../dataContext/headerCtx";

function MenuItems({ items }) {
  const { heading, setHeading } = useHeaderData();

  return (
    // all game categories
    <li className="menu-items leading-5">
      {/* games categories with subcategories */}
      {items.submenu ? (
        <>
          {/* main category */}
          <div className="relative flex items-center justify-between py-[9px]">
            <span
              className="relative w-full hover:text-[#9c53de]"
              onClick={() =>
                heading === items.title
                  ? setHeading("")
                  : setHeading(items.title)
              }
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
        </>
      ) : (
        // games categories without subcategories
        <div className="py-[9px]">
          <a href="/" className=" uppercase hover:text-[#9c53de]">
            {items.title}
          </a>
        </div>
      )}
    </li>
  );
}

export default MenuItems;

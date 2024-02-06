import React from "react";
import { FaXmark } from "react-icons/fa6";
import { categories } from "../../Data/categories";
import MenuItems from "./MenuItems";
import { useHeaderData } from "../../dataContext/headerCtx";

function Navbar() {
  const { isShown, setIsShown, setHeading } = useHeaderData();

  const clickHandler = () => {
    setIsShown(false);
    setHeading("");
  };

  return (
    // navbar menu
    <nav
      className={`mobile-nav fixed top-0 z-50 flex h-full w-screen flex-col items-center justify-start overflow-hidden bg-darkPurple p-4 font-semibold transition-[height] duration-500 ease-in-out ${isShown ? "" : "hidden"}`}
    >
      {/* main navbar heading and closing button */}
      <div className="flex w-full items-center justify-between">
        <div className="w-[25%]"></div>
        <div className="flex w-[50%] items-center justify-center">
          <h5 className="font-bold">Choose game</h5>
        </div>
        <div className="flex w-[25%] justify-end">
          <button type="button" onClick={() => clickHandler()}>
            <FaXmark size="24px" />
          </button>
        </div>
      </div>
      {/* main game categories */}
      <ul className="menus mt-[24px] w-[300px] text-sm">
        {categories.map((menu, index) => {
          return <MenuItems key={index} items={menu} />;
        })}
      </ul>
    </nav>
  );
}

export default Navbar;

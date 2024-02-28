import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../../../../dataContext/dataCtx";
import { FaXmark, FaAngleRight } from "react-icons/fa6";
import { useProductsData } from "../../../../dataContext/productsCtx";

function MobileNavbar({ currentGame }) {
  const { isNavbarVisible, setIsNavbarVisible, currentGameHandler } = useData();
  const { products } = useProductsData();

  const closeHandler = () => {
    setIsNavbarVisible(false);
  };

  return (
    <>
      {/* navbar for game category below 1280px */}
      <nav
        className={`fixed top-[56px] z-40 flex h-screen w-screen flex-col items-center justify-start overflow-hidden bg-darkPurple p-4 font-semibold transition-[height] duration-500 ease-in-out md:top-[66px] ${isNavbarVisible ? "" : "hidden"}`}
      >
        {/* main navbar heading and closing button */}
        <div className="flex w-full items-center justify-between">
          <div className="w-[25%]"></div>
          <div className="flex w-[50%] items-center justify-center">
            <h3>Choose game</h3>
          </div>
          <div className="flex w-[25%] justify-end">
            <button type="button" onClick={() => closeHandler()}>
              <FaXmark size="24px" />
            </button>
          </div>
        </div>
        {/* main game categories */}
        <ul className="menus mt-[24px] w-full text-sm">
          {products.map((menu, index) => (
            <li
              key={index}
              className="flex w-full flex-col items-center justify-center"
            >
              <Link
                to={`/products/${menu.url}`}
                className={`relative flex w-full items-center justify-between rounded px-4 py-3 text-lg font-bold ${currentGame.title === menu.title ? "border border-[mediumPurple] bg-lightPurple bg-opacity-10 hover:bg-lightPurple hover:bg-opacity-30" : "border-none bg-transparent"}`}
                onClick={() => currentGameHandler()}
              >
                <span
                  className={`${currentGame.title === menu.title ? "text-white hover:text-white" : "text-fontCoolGray hover:text-fontLightGray"}  before:absolute before:inset-0 before:top-[-1px] before:h-[1px] before:w-full before:border-[lightGrey] before:bg-[lightGrey] before:opacity-25`}
                >
                  {menu.title}
                </span>
                <FaAngleRight />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default MobileNavbar;

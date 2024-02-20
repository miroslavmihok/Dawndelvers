import React, { useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { useData } from "../../../../dataContext/dataCtx";
import { FaAngleDown } from "react-icons/fa6";

function DesktopNavbar({ currentGame, products }) {
  const {
    setIsGameListVisible,
    setIsNavbarVisible,
    isNavbarVisible,
    toggleDesktopMenuHandler,
    isGameListVisible,
    currentGameHandler,
  } = useData();

  const gameListRef = useRef(null);

  const openHandler = () => {
    setIsNavbarVisible(true);
  };

  const closeDesktopMenuHandler = useCallback(() => {
    setIsGameListVisible(false);
  }, [setIsGameListVisible]);

  useEffect(() => {
    const handleClicksOutsideGameList = (e) => {
      if (gameListRef.current && !gameListRef.current.contains(e.target)) {
        closeDesktopMenuHandler();
      }
    };
    document.addEventListener("mousedown", handleClicksOutsideGameList);
    return () => {
      document.removeEventListener("mousedown", handleClicksOutsideGameList);
    };
  }, [closeDesktopMenuHandler]);

  return (
    <>
      <div className="mb-4 flex w-full flex-col items-start justify-start px-8">
        <h3 className="text-left">Choose game and category</h3>
        <button
          className="relative mt-4 flex w-full items-center justify-between rounded-md bg-sepiaPurple px-5 py-4 text-fontCoolGray hover:bg-lightSepiaPurple hover:text-fontLightGray xl:hidden"
          onClick={() => openHandler()}
        >
          <h4>{currentGame.title}</h4>
          {!isNavbarVisible && (
            <FaAngleDown className="absolute right-5 size-[14px]" />
          )}
        </button>
        <div
          className="relative hidden w-full xl:flex xl:flex-col"
          ref={gameListRef}
        >
          <button
            className="mt-4 flex w-full cursor-pointer items-center rounded-md bg-sepiaPurple px-5 py-4 font-semibold text-fontCoolGray outline-0 hover:bg-lightSepiaPurple hover:text-fontLightGray"
            onClick={() => toggleDesktopMenuHandler()}
          >
            <h4>{currentGame.title}</h4>
            {!isGameListVisible && (
              <FaAngleDown className="absolute right-5 size-[14px]" />
            )}
          </button>
          <ul
            className={`absolute ${isGameListVisible ? "flex" : "hidden"} top-[72px] w-full flex-col items-center justify-start overflow-hidden rounded-md`}
          >
            {products.map((menu, index) => (
              <li
                key={index}
                className={`w-full bg-sepiaPurple font-semibold text-fontCoolGray outline-0 hover:bg-lightSepiaPurple hover:text-fontLightGray ${index !== products.length - 1 ? "border-b border-gray-400/25" : ""}`}
              >
                <Link
                  to={`/products/${menu.url}`}
                  className="flex h-full w-full cursor-pointer px-5 py-4"
                  onClick={() => currentGameHandler()}
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default DesktopNavbar;

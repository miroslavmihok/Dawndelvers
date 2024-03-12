import React, { useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { useData } from "../../../../context/dataCtx";
import { FaAngleDown } from "react-icons/fa6";
import { useGamesData } from "../../../../context/gamesCtx";

function DesktopNavbar({ currentGame }) {
  //HOOKS

  const {
    isNavbarVisible,
    setIsNavbarVisible,
    isGameListVisible,
    setIsGameListVisible,
    currentGameHandler,
  } = useData();

  const { games } = useGamesData();

  const gameListRef = useRef(null);

  //HANDLERS

  const openNavbarHandler = () => {
    setIsNavbarVisible(true);
  };

  const openGameListHandler = () => {
    setIsGameListVisible((prevIsGameListVisible) => !prevIsGameListVisible);
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
        {/* mobile navbar button */}
        <button
          className="relative mt-4 flex w-full items-center justify-between rounded-md bg-sepiaPurple px-5 py-4 text-fontCoolGray hover:bg-lightSepiaPurple hover:text-fontLightGray xl:hidden"
          onClick={() => openNavbarHandler()}
        >
          <h4>{currentGame.title}</h4>
          {!isNavbarVisible && (
            <FaAngleDown className="absolute right-5 size-[14px]" />
          )}
        </button>
        {/* desktop navbar button + custom dropdown */}
        <div
          className="relative z-40 hidden w-full xl:flex xl:flex-col"
          ref={gameListRef}
        >
          <button
            className="mt-4 flex w-full cursor-pointer items-center rounded-md bg-sepiaPurple px-5 py-4 font-semibold text-fontCoolGray outline-0 hover:bg-lightSepiaPurple hover:text-fontLightGray"
            onClick={() => openGameListHandler()}
          >
            <h4>{currentGame.title}</h4>
            {!isGameListVisible && (
              <FaAngleDown className="absolute right-5 size-[14px]" />
            )}
          </button>
          {/* custom dropdown */}
          <ul
            className={`absolute ${isGameListVisible ? "flex" : "hidden"} top-[72px] w-full flex-col items-center justify-start overflow-hidden rounded-md`}
          >
            {games.map((menu, index) => {
              return menu.title !== currentGame.title ? (
                <li
                  key={index}
                  className={`w-full bg-sepiaPurple font-semibold text-fontCoolGray outline-0 hover:bg-lightSepiaPurple hover:text-fontLightGray ${index !== games.length - 1 ? "border-b border-gray-400/25" : ""}`}
                >
                  <Link
                    to={`/products/${menu.url}`}
                    className="flex h-full w-full cursor-pointer px-5 py-4"
                    onClick={() => currentGameHandler()}
                  >
                    {menu.title}
                  </Link>
                </li>
              ) : null;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default DesktopNavbar;

import React, { useRef, useEffect } from "react";
import { useHeaderData } from "../../dataContext/headerCtx";
import { useData } from "../../dataContext/dataCtx";
import { FaXmark } from "react-icons/fa6";

function Navbar({ onClose }) {
  // Hooks
  const { isShown, setIsShown, setHeading } = useHeaderData();

  const { toggleScroll } = useData();

  const navbarRef = useRef();

  // handling clicks outside the nav for > 1280px
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarRef.current &&
        isShown &&
        !navbarRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    const handleDocumentClick = (event) => {
      // Get the top position of the navbar
      const navbarTop = navbarRef.current.getBoundingClientRect().top;

      // Check if the click occurred below the navbar's top position
      if (event.clientY > navbarTop + 56) {
        handleClickOutside(event);
      }
    };

    // Add event listener only if isShown is true
    if (isShown) {
      document.addEventListener("mousedown", handleDocumentClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [onClose, isShown]);

  // Handlers

  const clickHandler = () => {
    setIsShown(false);
    setHeading("");
    toggleScroll();
  };

  return (
    // navbar menu
    <>
      {/* Navbar for < 768px */}
      <nav
        className={`mobile-nav fixed top-[56px] z-50 overflow-hidden bg-darkPurple text-lg font-semibold transition-[max-height] duration-500 ease-in-out md:top-[66px] xl:hidden ${isShown ? "max-h-[500px]" : "max-h-0"} `}
        ref={navbarRef}
      >
        <div className="flex w-full flex-col items-center justify-start px-2 pb-10 pt-4">
          {/* main navbar heading and closing button */}
          <div className="flex w-full items-center justify-between">
            <div className="flex w-full justify-end">
              <button type="button" onClick={() => clickHandler()}>
                <FaXmark size="24px" />
              </button>
            </div>
          </div>
          {/* main game categories */}
          <ul className="menus flex w-[300px] flex-col items-center justify-center uppercase leading-8">
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <a href="/">boosting</a>
            </li>
            <li>
              <a href="/">about us</a>
            </li>
            <li>
              <a href="/">work with us</a>
            </li>
            <li>
              <a href="/">faq</a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <div
        className={`absolute top-[240px] z-40 h-screen w-screen max-w-full bg-darkPurple transition-opacity duration-500 ease-in-out lg:top-[566px] ${isShown ? "block opacity-70" : "hidden opacity-0"}`}
      ></div> */}
    </>
  );
}

export default Navbar;

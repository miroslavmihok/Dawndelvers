import React, { useRef, useEffect, useState } from "react";
import MenuItems from "./MenuItems";
import { useHeaderData } from "../../dataContext/headerCtx";
import { useData } from "../../dataContext/dataCtx";
import { products } from "../../Data/products";
import { categories } from "../../Data/categories";
import { FaXmark, FaAngleRight } from "react-icons/fa6";

function Navbar({ onClose }) {
  // Hooks
  const { isShown, setIsShown, setHeading } = useHeaderData();

  const { toggleScroll } = useData();

  const [currentGame, setCurrentGame] = useState(products[0].title);

  const [currentHoveredProducts, setCurrentHoveredProducts] = useState(
    products[0].productList,
  );
  const [currentHoveredCategories, setCurrentHoveredCategories] = useState(
    categories[0].submenu,
  );

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

    const main = document.querySelector(".main-section");

    main.addEventListener("mousedown", handleClickOutside);

    return () => {
      main.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose, isShown, setIsShown]);

  // changing subcategories on hover
  useEffect(() => {
    const updateLinks = () => {
      let [currentGameObject] = products.filter(
        (product) => product.title === currentGame,
      );

      let [currentGameSubcategories] = categories.filter(
        (category) => category.title === currentGame,
      );

      setCurrentHoveredProducts(currentGameObject.productList);
      setCurrentHoveredCategories(currentGameSubcategories.submenu);
    };
    updateLinks();
  }, [currentGame]);

  // Handlers

  const clickHandler = () => {
    setIsShown(false);
    setHeading("");
    toggleScroll();
  };

  const hoveringCurrentGameHandler = (e, title) => {
    e.preventDefault();
    setCurrentGame(title);
  };

  return (
    // navbar menu
    <>
      {/* Navbar for < 768px */}
      <nav
        className={`mobile-nav fixed top-[56px] z-50 w-screen overflow-hidden bg-darkPurple text-sm font-semibold transition-[max-height] duration-500 ease-in-out md:top-[66px] xl:hidden ${isShown ? "max-h-[500px]" : "max-h-0"} `}
      >
        <div className="flex w-full flex-col items-center justify-start p-4">
          {/* main navbar heading and closing button */}
          <div className="flex w-full items-center justify-between">
            <div className="w-[25%]"></div>
            <div className="flex w-[50%] items-center justify-center">
              <h5 className="text-lg font-bold">Choose game</h5>
            </div>
            <div className="flex w-[25%] justify-end">
              <button type="button" onClick={() => clickHandler()}>
                <FaXmark size="24px" />
              </button>
            </div>
          </div>
          {/* main game categories */}
          <ul className="menus mt-[24px] w-[300px]">
            {categories.map((menu, index) => {
              return <MenuItems key={index} items={menu} />;
            })}
          </ul>
        </div>
      </nav>
      {/* Navbar for > 768px */}
      <nav
        ref={navbarRef}
        className={`transition-height fixed top-[66px] z-50 hidden w-screen overflow-hidden text-sm font-semibold duration-500 ease-in-out xl:flex ${isShown ? "h-[500px]" : "h-0"} `}
      >
        <div className="relative flex h-full w-full items-center justify-start after:absolute after:bottom-0 after:h-[1px] after:w-full after:border-[lightGrey] after:bg-[lightGrey] after:opacity-25">
          {/* nav left */}
          <div className="h-full bg-darkPurple">
            <ul className="min-w-[300px]">
              <h5 className="ml-10 py-2 text-lg font-semibold uppercase">
                Choose game
              </h5>
              {products.map((menu, index) => (
                <li
                  key={index}
                  className="flex w-full flex-col items-center justify-center"
                  onMouseOver={(e) => hoveringCurrentGameHandler(e, menu.title)}
                >
                  <a
                    href={menu.url}
                    className={`relative flex w-full items-center justify-between rounded px-4 py-3 text-lg font-bold hover:bg-lightPurple hover:bg-opacity-10`}
                  >
                    <span className={`ml-6 text-fontCoolGray hover:text-white`}>
                      {menu.title}
                    </span>
                    <FaAngleRight />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* nav right */}
          <div className="flex h-full w-full flex-col items-start justify-start overflow-scroll bg-sepiaPurple p-4">
            <div className="font-semibol w-full text-lg">
              <h5 className="mb-4 uppercase text-fontCoolGray">Categories</h5>
            </div>
            <ul className="column-container flex h-full flex-col flex-wrap content-start text-lg font-semibold">
              {currentHoveredCategories.map((category, index) => (
                <li
                  key={index}
                  className="list-container mb-4 flex flex-col flex-wrap self-start"
                >
                  <a className="text-white hover:text-fontCoolGray" href="/">
                    {category.title}
                  </a>

                  <ul className="flex flex-col">
                    {currentHoveredProducts.map((product, index) =>
                      category.title === product.category ? (
                        <li key={index} className="block">
                          <a
                            className="text-fontCoolGray hover:text-fontLavenderGray"
                            href="/"
                          >
                            {product.title}
                          </a>
                        </li>
                      ) : null,
                    )}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div
        className={`absolute top-[566px] z-40 h-screen w-screen max-w-full bg-darkPurple transition-opacity duration-500 ease-in-out ${isShown ? "block opacity-70" : "hidden opacity-0"}`}
      ></div>
    </>
  );
}

export default Navbar;

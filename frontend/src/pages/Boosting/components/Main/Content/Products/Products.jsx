import React, { useState, useEffect, useRef, useCallback } from "react";
import Categories from "./Categories";
import ProductItem from "./ProductItem";
import { FaAngleDown, FaAngleRight, FaXmark } from "react-icons/fa6";
import { products } from "../../../../../../Data/products";
import { useData } from "../../../../../../dataContext/dataCtx";

function Products() {
  // Hooks
  const {
    currentGame,
    setCurrentGame,
    currentGameTitle,
    setCurrentGameTitle,
    currentCategory,
    setCurrentCategory,
    toggleScroll,
  } = useData();

  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isGameListVisible, setIsGameListVisible] = useState(false);
  const [currentProducts, setCurrentProducts] = useState(
    products[0].productList,
  );
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const gameListRef = useRef(null);
  const focusRef = useRef(null);
  const setFocus = useCallback(() => focusRef?.current?.focus(), []);

  useEffect(() => {
    const updateGame = () => {
      let [currentGameObject] = products.filter(
        (product) => product.title === currentGameTitle,
      );

      setCurrentGame(currentGameObject);
    };
    updateGame();
  }, [currentGameTitle, setCurrentGame]);

  useEffect(() => {
    const updateProducts = () => {
      let productArray = currentGame.productList;

      let filteredProducts =
        currentCategory === "All Categories"
          ? productArray // ALL CATEGORIES
          : currentCategory === "Limited Deals"
            ? productArray.reduce((acc, curr) => {
                // ONLY products => deal: true;
                if (curr.deal) {
                  acc.push(curr);
                }
                return acc;
              }, [])
            : productArray.reduce((acc, curr) => {
                // Otherwise show products => product category = currentCategory clicked
                if (curr.category === currentCategory) {
                  acc.push(curr);
                }
                return acc;
              }, []);

      setCurrentProducts(filteredProducts);
    };
    updateProducts();
  }, [currentGame, currentCategory]);

  // Handlers
  const openHandler = () => {
    setIsNavbarVisible(true);
    toggleScroll();
  };
  const closeHandler = () => {
    setIsNavbarVisible(false);
    toggleScroll();
  };

  const currentGameHandler = (e, title) => {
    e.preventDefault();
    setCurrentGameTitle(title);
    setTimeout(() => {
      closeHandler();
    }, 200);
    setCurrentCategory("All Categories");
    setFocus();
    toggleDesktopMenuHandler();
  };

  const handleProductItemHover = (productId) => {
    setHoveredProductId(productId);
  };

  const toggleDesktopMenuHandler = () => {
    setIsGameListVisible((prevIsGameListVisible) => !prevIsGameListVisible);
  };

  const closeDesktopMenuHandler = useCallback(() => {
    setIsGameListVisible(false);
  }, []);

  // clicks outside game List

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
    <div className="flex w-full items-start justify-center pb-24">
      {/* navbar for game category below 1280px */}
      <nav
        className={`fixed top-[56px] z-40 flex h-screen w-screen flex-col items-center justify-start overflow-hidden bg-darkPurple p-4 font-semibold transition-[height] duration-500 ease-in-out md:top-[66px] ${isNavbarVisible ? "" : "hidden"}`}
      >
        {/* main navbar heading and closing button */}
        <div className="flex w-full items-center justify-between">
          <div className="w-[25%]"></div>
          <div className="flex w-[50%] items-center justify-center">
            <h5 className="font-bold">Choose game</h5>
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
              <a
                href={menu.url}
                className={`relative flex w-full items-center justify-between rounded px-4 py-3 text-lg font-bold ${currentGameTitle === menu.title ? "border border-[mediumPurple] bg-lightPurple bg-opacity-10 hover:bg-lightPurple hover:bg-opacity-30" : "border-none bg-transparent"}`}
                onClick={(e) => currentGameHandler(e, menu.title)}
              >
                <span
                  className={`${currentGameTitle === menu.title ? "text-white hover:text-white" : "text-fontCoolGray hover:text-fontLightGray"}  before:absolute before:inset-0 before:top-[-1px] before:h-[1px] before:w-full before:border-[lightGrey] before:bg-[lightGrey] before:opacity-25`}
                >
                  {menu.title}
                </span>
                <FaAngleRight />
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex w-full flex-col items-start justify-center xl:w-[900px] 2xl:w-[1200px] 3xl:w-[1580px]">
        {/* Game Category choice */}
        <div className="mb-4 flex w-full flex-col items-start justify-start px-8">
          <h5 className="text-left text-lg font-bold md:text-xl">
            Choose game and category
          </h5>
          <button
            className="relative mt-4 flex w-full items-center justify-between rounded-md bg-sepiaPurple px-5 py-4 font-semibold text-fontCoolGray hover:bg-lightSepiaPurple hover:text-fontLightGray xl:hidden"
            onClick={() => openHandler()}
          >
            {currentGameTitle}
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
              {currentGameTitle}
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
                  className={`w-full cursor-pointer bg-sepiaPurple px-5 py-4 font-semibold text-fontCoolGray outline-0 hover:bg-lightSepiaPurple hover:text-fontLightGray ${index !== products.length - 1 ? "border-b border-gray-400/25" : ""}`}
                  onClick={(e) => currentGameHandler(e, menu.title)}
                >
                  {menu.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* end of navbar for main category below 1280px */}
        {/* products */}
        <div className="flex w-full max-w-full flex-col">
          <h5 className="mb-4 px-8 text-2xl font-bold xl:px-0 xl:pl-8">
            {currentGameTitle} Offers
          </h5>
          <div className="scrolling-wrapper mb-4 flex w-full min-w-0 max-w-full flex-row gap-3 overflow-x-auto px-8 xl:px-0 xl:pl-8">
            <button
              ref={focusRef}
              autoFocus
              className="inline-flex items-center whitespace-nowrap rounded-md border border-transparent bg-sepiaPurple px-3 py-2 font-medium text-fontCoolGray 
              outline-0 transition-all duration-300 ease-in-out hover:bg-lightSepiaPurple hover:text-fontLightGray focus:border-lightPurple focus:bg-darkPurple focus:text-white focus:outline-0 focus:outline-transparent"
              onClick={() => setCurrentCategory("All Categories")}
            >
              All Categories
            </button>
            <Categories currentGameTitle={currentGameTitle} />
          </div>
          <div className="flex w-full flex-col items-center px-8">
            <div className="flex w-full flex-wrap items-center justify-start gap-4">
              {currentProducts.map((product, index) => (
                <ProductItem
                  key={index}
                  id={product.id}
                  url={product.url}
                  deal={product.deal}
                  title={product.title}
                  description={product.description}
                  price={product.lowestPrice}
                  imageUrl={product.imgSrc}
                  isHovered={hoveredProductId === product.id}
                  onMouseEnter={handleProductItemHover}
                  onMouseLeave={() => setHoveredProductId(null)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

import React, { useState, useEffect, useRef, useCallback } from "react";
import Categories from "./Categories";
import ProductItem from "./ProductItem";
import { FaAngleDown, FaAngleRight, FaXmark } from "react-icons/fa6";
import { products } from "../../../../Data/products";
import { useData } from "../../../../dataContext/dataCtx";

function Products() {
  // Hooks
  const { currentGame, setCurrentGame, currentCategory, setCurrentCategory } =
    useData();
  const [isVisible, setIsVisible] = useState(false);
  const [currentProducts, setCurrentProducts] = useState(
    products[0].productList,
  );
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const focusRef = useRef(null);
  const setFocus = useCallback(() => focusRef?.current?.focus(), []);

  useEffect(() => {
    const updateProducts = () => {
      let [currentGameObject] = products.filter(
        (product) => product.title === currentGame,
      );

      let productArray = currentGameObject.productList;

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
    setIsVisible(true);
  };
  const closeHandler = () => {
    setIsVisible(false);
  };

  const currentGameHandler = (e, title) => {
    e.preventDefault();
    setCurrentGame(title);
    setTimeout(() => {
      closeHandler();
    }, 200);
    setCurrentCategory("All Categories");
    setFocus();
  };

  const handleProductItemHover = (productId) => {
    setHoveredProductId(productId);
  };

  return (
    <div className="w-full pb-24">
      <div className="flex flex-col items-center justify-center">
        {/* Game Category choice */}
        <div className="mb-4 w-full px-8">
          <h5 className="text-left text-xl font-bold md:text-2xl">
            Choose game and category
          </h5>
          <button
            className="relative mt-2 flex w-full items-center justify-between rounded-md bg-sepiaPurple px-5 py-4 font-semibold text-fontCoolGray hover:bg-lightSepiaPurple hover:text-fontLightGray"
            onClick={() => openHandler()}
          >
            {currentGame}
            <FaAngleDown className="absolute right-5 size-[14px]" />
          </button>
        </div>
        {/* navbar for game category */}
        <nav
          className={`fixed top-[56px] z-40 flex h-screen w-screen flex-col items-center justify-start overflow-hidden bg-darkPurple p-4 font-semibold transition-[height] duration-500 ease-in-out md:top-[66px] ${isVisible ? "" : "hidden"}`}
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
                  className={`relative flex w-full items-center justify-between rounded bg-transparent px-4 py-3 text-lg font-bold focus:border focus:border-[mediumPurple] ${currentGame === menu.title ? "border border-[mediumPurple]" : "border-none"}`}
                  onClick={(e) => currentGameHandler(e, menu.title)}
                >
                  <span
                    className={`${currentGame === menu.title ? "text-white hover:text-white" : "text-fontCoolGray hover:text-fontLightGray"}  before:absolute before:inset-0 before:top-[-1px] before:h-[1px] before:w-full before:border-[lightGrey] before:bg-[lightGrey] before:opacity-25`}
                  >
                    {menu.title}
                  </span>
                  <FaAngleRight />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* end of navbar for main category */}
        {/* products */}
        <div className="flex w-full max-w-full flex-col">
          <div className="scrolling-wrapper mb-4 flex w-full min-w-0 max-w-full flex-row gap-3 overflow-x-auto px-8">
            <button
              ref={focusRef}
              autoFocus
              className="inline-flex items-center whitespace-nowrap rounded-md border border-transparent bg-sepiaPurple px-3 py-2 font-medium text-fontCoolGray 
              transition-all duration-300 ease-in-out hover:bg-lightSepiaPurple hover:text-fontLightGray focus:border-lightPurple focus:bg-darkPurple focus:text-white focus:outline-0 focus:outline-transparent"
              onClick={() => setCurrentCategory("All Categories")}
            >
              All Categories
            </button>
            <Categories currentGame={currentGame} />
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

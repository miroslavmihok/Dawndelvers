import React, { useRef, useEffect, useCallback } from "react";
import { useData } from "../../../../context/dataCtx";

function Categories({ currentGameTitle, products }) {
  const { isLoading, setCurrentCategory } = useData();

  const focusRef = useRef(null);
  const setFocus = useCallback(() => focusRef?.current?.focus(), []);

  useEffect(() => {
    setFocus();
  }, [setFocus, currentGameTitle]);

  const categories = products.map((product) => product.category);
  const limitedDeal = (product) => product.deal === true;

  const currentCategoryHandler = (category) => {
    setCurrentCategory(category);
  };

  return (
    <>
      {!isLoading && (
        <button
          ref={focusRef}
          autoFocus
          className="inline-flex items-center whitespace-nowrap rounded-md border border-transparent bg-sepiaPurple px-3 py-2 font-medium text-fontCoolGray 
        outline-0 transition-all duration-300 ease-in-out hover:bg-lightSepiaPurple hover:text-fontLightGray focus:border-lightPurple focus:bg-darkPurple focus:text-white focus:outline-0 focus:outline-transparent focus:hover:bg-lightPurple"
          onClick={() => setCurrentCategory("All Categories")}
        >
          All Categories
        </button>
      )}
      {products && products.some(limitedDeal) && (
        <button
          className="inline-flex items-center whitespace-nowrap rounded-md border border-transparent bg-sepiaPurple px-3 py-2 font-medium text-fontCoolGray 
        outline-0 transition-all duration-300 ease-in-out hover:bg-lightSepiaPurple hover:text-fontLightGray focus:border-lightPurple focus:bg-darkPurple focus:text-white focus:outline-0 focus:outline-transparent focus:hover:bg-lightPurple"
          onClick={() => setCurrentCategory("Limited Deals")}
        >
          Limited Deals
        </button>
      )}
      {!isLoading &&
        categories.map((category, index) => (
          <button
            key={index}
            className="inline-flex items-center whitespace-nowrap rounded-md border border-transparent bg-sepiaPurple px-3 py-2 font-medium text-fontCoolGray outline-0 transition-all duration-300 ease-in-out hover:bg-lightSepiaPurple hover:text-fontLightGray focus:border-lightPurple focus:bg-darkPurple focus:text-white focus:outline-0 focus:hover:bg-lightPurple"
            onClick={() => currentCategoryHandler(category)}
          >
            {category}
          </button>
        ))}
    </>
  );
}

export default Categories;

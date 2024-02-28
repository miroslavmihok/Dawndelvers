import React, { useRef, useEffect, useCallback } from "react";
import { categories } from "../../../../Data/categories";
import { useData } from "../../../../dataContext/dataCtx";

function Categories({ currentGameTitle }) {
  const { isLoading, setCurrentCategory } = useData();

  const focusRef = useRef(null);
  const setFocus = useCallback(() => focusRef?.current?.focus(), []);

  useEffect(() => {
    setFocus();
  }, [setFocus, currentGameTitle]);

  const currentGameArr = categories.filter(
    (game) => game.title === currentGameTitle,
  );
  const submenu = currentGameArr.length > 0 ? currentGameArr[0].submenu : [];

  const currentCategoryHandler = (category) => {
    setCurrentCategory(category.title);
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
      {!isLoading &&
        submenu.map((category, index) => (
          <button
            key={index}
            className="inline-flex items-center whitespace-nowrap rounded-md border border-transparent bg-sepiaPurple px-3 py-2 font-medium text-fontCoolGray outline-0 transition-all duration-300 ease-in-out hover:bg-lightSepiaPurple hover:text-fontLightGray focus:border-lightPurple focus:bg-darkPurple focus:text-white focus:outline-0 focus:hover:bg-lightPurple"
            onClick={() => currentCategoryHandler(category)}
          >
            {category.title}
          </button>
        ))}
    </>
  );
}

export default Categories;

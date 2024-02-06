import React from "react";
import { categories } from "../../../../Data/categories";
import { useData } from "../../../../dataContext/dataCtx";

function Categories({ currentGame }) {
  const currentGameArr = categories.filter(
    (game) => game.title === currentGame,
  );
  const { submenu } = currentGameArr[0];

  const { setCurrentCategory } = useData();

  const currentCategoryHandler = (category) => {
    setCurrentCategory(category.title);
  };

  return (
    <>
      {submenu.map((category, index) => (
        <button
          key={index}
          className="text-fontCoolGray hover:text-fontLightGray focus:border-lightPurple inline-flex items-center whitespace-nowrap rounded-md border border-transparent bg-sepiaPurple px-3 py-2 font-medium transition-all duration-300 ease-in-out hover:bg-lightSepiaPurple focus:bg-darkPurple focus:text-white focus:outline-0"
          onClick={() => currentCategoryHandler(category)}
        >
          {category.title}
        </button>
      ))}
    </>
  );
}

export default Categories;

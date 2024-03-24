import React, { useState, useEffect, useCallback } from "react";
import { useData } from "../../../../context/dataCtx";
import Categories from "./Categories";
import ProductItem from "./ProductItem";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import Breadcrumbs from "../../../../components/Breadcrumbs/Breadcrumbs";
import ErrorMessage from "../../../../components/UI/ErrorMessage";
import { BeatLoader } from "react-spinners";
import Skeleton from "react-loading-skeleton";
import ProductsSkeleton from "../../../../components/Skeletons/ProductsSkeleton";

function Products({
  game,
  isGameLoading,
  gameError,
  products,
  areProductsLoading,
  productsError,
}) {
  // Hooks
  const { currentCategory } = useData();

  const [filteredProducts, setFilteredProducts] = useState([]);

  const updateProducts = useCallback(() => {
    let productArray = products ? products : [];

    let filteredProducts =
      currentCategory === "All Categories"
        ? productArray
        : currentCategory === "Limited Deals"
          ? productArray.filter((product) => product.deal)
          : productArray.filter(
              (product) => product.category === currentCategory,
            );
    setFilteredProducts(filteredProducts);
  }, [products, currentCategory]);

  useEffect(() => {
    if (!areProductsLoading) {
      updateProducts();
    }
  }, [areProductsLoading, updateProducts]);

  return (
    <div className="flex w-full flex-col items-center justify-start pb-24">
      <div className="w-full px-8 xl:w-[900px] 2xl:w-[1200px] 3xl:w-[1580px]">
        <Breadcrumbs game={game.title} />
      </div>
      <MobileNavbar currentGame={game} />
      <div className="flex w-full flex-col items-start justify-center xl:w-[900px] 2xl:w-[1200px] 3xl:w-[1580px]">
        {/* Game Category choice */}
        <DesktopNavbar
          currentGame={game}
          isGameLoading={isGameLoading}
          gameError={gameError}
        />
        {/* products */}
        <div className="flex w-full max-w-full flex-col">
          <div className="scrolling-wrapper mb-4 flex w-full min-w-0 max-w-full flex-row gap-3 overflow-x-auto px-8 xl:px-0 xl:pl-8">
            {isGameLoading ? (
              <div className="h-[42px] w-full">
                <Skeleton height={34} />
              </div>
            ) : (
              <Categories currentGameTitle={game.title} />
            )}
          </div>
          <div className="flex w-full flex-col items-center px-8">
            <div className="flex w-full flex-wrap items-center justify-start gap-4">
              {productsError && <ErrorMessage msg={productsError} />}
              {areProductsLoading && <ProductsSkeleton cards={4} />}
              {!areProductsLoading &&
                filteredProducts &&
                filteredProducts.map((product, index) => (
                  <ProductItem
                    key={index}
                    id={product.id}
                    gameUrl={game.url}
                    url={product.url}
                    deal={product.deal}
                    title={product.title}
                    description={product.description}
                    price={product.basePrice}
                    imageUrl={product.imgSrc}
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

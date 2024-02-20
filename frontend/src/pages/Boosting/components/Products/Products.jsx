import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import ProductItem from "./ProductItem";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import { useData } from "../../../../dataContext/dataCtx";

function Products({ gameUrl }) {
  // Hooks
  const { products, currentCategory } = useData();

  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [currentGame, setCurrentGame] = useState({});
  const [currentProducts, setCurrentProducts] = useState([]);

  console.log("rendering Products");

  useEffect(() => {
    const updateProducts = () => {
      const game = products.find((product) => product.url === gameUrl);
      const productList = game ? game.productList : [];
      let productArray = productList;

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
      setCurrentGame(game);
    };
    updateProducts();
  }, [gameUrl, products, currentCategory, setCurrentProducts]);

  // Handlers

  const handleProductItemHover = (productId) => {
    setHoveredProductId(productId);
  };

  return (
    <div className="flex w-full items-start justify-center pb-24">
      <MobileNavbar currentGame={currentGame} products={products} />
      <div className="flex w-full flex-col items-start justify-center xl:w-[900px] 2xl:w-[1200px] 3xl:w-[1580px]">
        {/* Game Category choice */}
        <DesktopNavbar currentGame={currentGame} products={products} />
        {/* end of navbar for main category below 1280px */}
        {/* products */}
        <div className="flex w-full max-w-full flex-col">
          <div className="scrolling-wrapper mb-4 flex w-full min-w-0 max-w-full flex-row gap-3 overflow-x-auto px-8 xl:px-0 xl:pl-8">
            <Categories currentGameTitle={currentGame.title} />
          </div>
          <div className="flex w-full flex-col items-center px-8">
            <div className="flex w-full flex-wrap items-center justify-start gap-4">
              {currentProducts.map((product, index) => (
                <ProductItem
                  key={index}
                  id={product.id}
                  gameUrl={currentGame.url}
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

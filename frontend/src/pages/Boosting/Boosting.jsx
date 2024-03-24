import React from "react";
import { useParams } from "react-router-dom";
import useGameFetch from "../../hooks/useGameFetch";
import useProductsFetch from "../../hooks/useProductsFetch";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Payment from "../../components/Payment/Payment";

function Boosting() {
  const { gameUrl } = useParams();
  const { isGameLoading, gameError, game } = useGameFetch(
    `${process.env.REACT_APP_GAMES_URL}/${gameUrl}`,
  );
  const { areProductsLoading, productsError, products } = useProductsFetch(
    `${process.env.REACT_APP_PRODUCTS_URL}/${gameUrl}`,
  );

  return (
    <div className={`main-section relative bg-darkPurple`}>
      <Hero game={game} />
      <Products
        game={game}
        isGameLoading={isGameLoading}
        gameError={gameError}
        products={products}
        areProductsLoading={areProductsLoading}
        productsError={productsError}
      />
      <Payment />
    </div>
  );
}

export default Boosting;

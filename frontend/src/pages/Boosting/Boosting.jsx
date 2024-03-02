import React from "react";
import { useParams } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Payment from "../../components/Payment/Payment";
import useFetch from "../../hooks/useFetch";

function Boosting() {
  const { gameUrl } = useParams();
  const gameData = useFetch(`/games/${gameUrl}`);
  const productsData = useFetch(`/products/${gameUrl}`);

  return (
    <div className={`main-section relative bg-darkPurple`}>
      <Hero game={gameData.data} />
      <Products
        gameUrl={gameUrl}
        game={gameData.data}
        products={productsData.data}
        areProductsLoading={productsData.isLoading}
        productsError={productsData.error}
      />
      <Payment />
    </div>
  );
}

export default Boosting;

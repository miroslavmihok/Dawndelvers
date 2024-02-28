import React from "react";
import { useParams } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Payment from "../../components/Payment/Payment";
import useFetch from "../../hooks/useFetch";

function Boosting() {
  const { gameUrl } = useParams();
  const { isLoading, error, data } = useFetch(`/products/${gameUrl}`);

  return (
    <div className={`main-section relative bg-darkPurple`}>
      <Hero game={data} />
      <Products
        gameUrl={gameUrl}
        isLoading={isLoading}
        error={error}
        game={data}
      />
      <Payment />
    </div>
  );
}

export default Boosting;

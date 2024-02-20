import React from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../dataContext/dataCtx";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Payment from "../../components/Payment/Payment";

function Boosting() {
  const { gameUrl } = useParams();
  const { isLoading, error } = useData();

  console.log("rendering Boosting");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={`main-section relative`}>
      <Hero gameUrl={gameUrl} />
      <Products gameUrl={gameUrl} />
      <Payment />
    </div>
  );
}

export default Boosting;

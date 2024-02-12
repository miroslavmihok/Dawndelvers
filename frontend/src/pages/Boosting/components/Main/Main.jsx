import React from "react";
import Hero from "./Content/Hero/Hero";
import Products from "./Content/Products/Products";
import Payment from "../../../../components/Payment/Payment";

function Main() {
  return (
    <div className={`main-section relative`}>
      <Hero />
      <Products />
      <Payment />
    </div>
  );
}

export default Main;

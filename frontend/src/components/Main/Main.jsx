import React from "react";
import Hero from "./Content/Hero/Hero";
import Products from "./Content/Products/Products";
import Testimonials from "./Content/Testimonials/Testimonials";
import Newsletter from "./Content/Newsletter/Newsletter";
import Payment from "./Content/Payment/Payment";

function Main() {
  return (
    <div className={`main-section relative`}>
      <Hero />
      <Products />
      <Testimonials />
      <Newsletter />
      <Payment />
    </div>
  );
}

export default Main;

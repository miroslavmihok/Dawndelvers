import React from "react";
import Header from "../../components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "../../components/Footer/Footer";

function Boosting() {
  return (
    <div className="flex flex-col xl:flex-row">
      <Header />
      <div className="w-full xl:ml-[300px]">
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default Boosting;

import React from "react";
import Header from "../../components/Header/Header";
import Hero from "./components/Hero/Hero";
import Games from "./components/Games/Games";
import Services from "./components/Services/Services";
import WorkWithUs from "./components/WorkWithUs/WorkWithUs";
import FAQ from "./components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className="flex flex-col xl:flex-row">
      <Header />
      <div className="w-full xl:ml-[300px]">
        <Hero />
        <Games />
        <Services />
        <WorkWithUs />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

export default Home;

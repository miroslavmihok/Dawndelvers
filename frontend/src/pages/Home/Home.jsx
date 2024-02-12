import React from "react";
import Header from "../../components/Header/Header";
import Hero from "./components/Hero/Hero";
import Games from "./components/Games/Games";
import Services from "./components/Services/Services";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import WorkWithUs from "./components/WorkWithUs/WorkWithUs";
import FAQ from "./components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import bg from "../../assets/backgrounds/main-home-rev-3.png";
import img1 from "../../assets/backgrounds/h5-rev-8.png";
import img2 from "../../assets/backgrounds/Untitled-6.png";

function Home() {
  return (
    <div className="flex flex-col xl:flex-row">
      <Header />
      <div className="w-full xl:ml-[300px]">
        <div
          className="w-full"
          style={{
            background: `linear-gradient(0deg, rgba(28,17,36,1) 0%, rgba(28,17,36,0) 100%), url(${bg}) center center / cover no-repeat`,
          }}
        >
          <Hero />
          <Games />
        </div>
        <div className="relative w-full overflow-hidden">
          <img
            src={img1}
            alt="smoke img"
            className="absolute left-[-150px] top-[350px] z-0 scale-[400%] opacity-60 lg:scale-[200%] 2xl:left-[-50px] 2xl:top-[230px] 2xl:scale-[180%]"
          />
          <Services />
          <HowItWorks />
        </div>
        <WorkWithUs />
        <div
          className="relative w-full"
          style={{
            background: `linear-gradient(0deg, rgba(28,16,36,0) 0%, rgba(28,16,36,1) 100%), url(${img2}) bottom center / cover no-repeat`,
          }}
        >
          <FAQ />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;

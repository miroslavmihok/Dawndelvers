import React from "react";
import bg from "../../../../assets/backgrounds/landing-bckgrd-img.jpeg";

function Hero() {
  return (
    <div
      className="mt-[56px] flex flex-col items-center justify-center px-4 py-[64px] md:mt-[66px] md:py-[118px]
    "
      style={{
        background: `linear-gradient(
              to top,
              rgba(19, 5, 34, 1) 30%,
              rgba(19, 5, 34, 0.6) 50%,
              transparent
            ), url(${bg}) center top no-repeat`,
      }}
    >
      <h6 className="text-center text-lg font-extrabold uppercase text-[mediumPurple] sm:text-xl">
        Level Up Your Game with Pro Boosters
      </h6>
      <h1 className="mb-8 mt-4 w-[300px] max-w-[80%] text-center text-2xl font-extrabold sm:w-[50%] md:min-w-[500px] md:max-w-[67%] md:text-[56px] md:leading-[64px]">
        Our pros and coaches,
        <br />
        <em className="text-[mediumPurple]">your ultimate allies</em>
        <br />
        in conquering the toughest challenges of MMO gaming
      </h1>
    </div>
  );
}

export default Hero;

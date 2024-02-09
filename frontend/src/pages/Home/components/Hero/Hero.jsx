import React from "react";

function Hero() {
  return (
    <div className="mt-[56px] flex flex-col items-center justify-center px-8 py-[1rem] md:mt-[66px] md:py-[2rem]">
      <h1 className="w-[300px] max-w-[80%] text-center text-2xl font-extrabold sm:w-[50%] md:min-w-[500px] md:max-w-[67%] md:text-[56px] md:leading-[64px]">
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

import React from "react";

function Hero() {
  return (
    <div className="mt-[56px] flex flex-col items-center justify-center px-8 py-8 sm:py-10 md:mt-[66px] md:py-12 xl:mt-0 xl:py-14">
      <h1 className="max-w-[360px] text-center md:max-w-[500px] xl:max-w-[700px]">
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

import React from "react";

function Hero({ game }) {
  const title = game ? game.title : null;
  const image = game
    ? `linear-gradient(rgba(28,17,36, 0.2) 0%, rgb(28,17,36) 100%) 0% 0% / 100%, linear-gradient(rgba(28,17,36, 0.2) 0%, rgb(28,17,36) 100%), url(${game.bg}) center center / cover no-repeat`
    : "rgba(28,17,36,1)";

  return (
    <div
      className="mt-[56px] flex basis-0 flex-col items-center justify-center pb-8 md:mt-[66px] xl:mt-0
    "
    >
      <div
        className="flex aspect-video max-h-[300px] w-full items-center justify-center"
        style={{
          background: `${image}`,
        }}
      >
        <h1 className="w-[300px] max-w-[80%] text-center sm:w-[50%] md:min-w-[500px] md:max-w-[67%]">
          {title}
        </h1>
      </div>
    </div>
  );
}

export default Hero;

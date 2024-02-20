import React from "react";
import { useData } from "../../../../dataContext/dataCtx";

function Hero({ gameUrl }) {
  const { products } = useData();
  const game = products.find((game) => game.url === gameUrl);
  const title = game ? game.title : null;
  const image = game
    ? `linear-gradient(270deg, rgba(28,17,36,1) 0%,rgba(28,17,36,0.3) 50%, rgba(28,17,36,0) 100%), linear-gradient(90deg, rgba(28,17,36,1) 0%,rgba(28,17,36,0.3) 50%, rgba(28,17,36,0) 100%), url(${game.bg}) center center / cover no-repeat`
    : "rgba(28,17,36,1)";

  console.log("rendering Hero");

  return (
    <div
      className="mt-[56px] flex basis-0 flex-col items-center justify-center py-8 md:mt-[66px] xl:mt-0
    "
    >
      <div
        className="flex aspect-video max-h-[300px] w-full items-center justify-center xl:w-[836px] 2xl:w-[1136px] 3xl:w-[1516px]"
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

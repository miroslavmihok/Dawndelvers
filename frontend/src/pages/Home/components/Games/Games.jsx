import React from "react";
import GameItem from "./GameItem";
import { products } from "../../../../Data/products";

function Games() {
  return (
    <div className="mb-4 flex w-full flex-col items-center justify-center px-8">
      <div className="games-scrolling-wrapper flex w-full min-w-0 max-w-full flex-row gap-2 overflow-x-auto xl:w-[836px] 2xl:w-[1136px] 3xl:w-[1516px]">
        {products.map((product, index) => (
          <GameItem
            key={index}
            title={product.title}
            bgUrl={product.bg}
            logoUrl={product.logo}
          />
        ))}
      </div>
    </div>
  );
}

export default Games;

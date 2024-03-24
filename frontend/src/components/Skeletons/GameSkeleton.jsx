import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GameSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div
        key={i}
        className="flex h-[300px] w-full bg-[#312F2C] opacity-90 lg:h-[360px]"
      >
        <div className={`flex h-full w-full flex-col items-center justify-end`}>
          <div className="mb-2 flex h-[64px] w-full items-center justify-center text-wrap text-center font-bold">
            <Skeleton width={120} />
          </div>
          <div className="mb-5 flex items-center justify-center rounded-full">
            <Skeleton height={30} width={30} />
          </div>
        </div>
      </div>
    ));
};

export default GameSkeleton;

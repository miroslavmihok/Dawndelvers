import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductsSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div
        className={`flex h-[300px] min-w-[256px] max-w-[530px] flex-grow basis-0 flex-col items-start justify-between overflow-hidden rounded-2xl bg-[#312F2C] p-4`}
      >
        <div className="mb-2 flex h-[64px] w-full items-center justify-start text-wrap text-center font-bold">
          <Skeleton width={120} />
        </div>
        <div className="flex flex-col items-center justify-start rounded-full">
          <div className="mb-2 flex w-full items-end justify-center text-wrap text-center font-bold">
            <Skeleton width={200} height={30} />
          </div>
          <div className="mb-2 flex w-full items-start justify-center text-wrap text-center font-bold">
            <Skeleton width={200} height={30} />
          </div>
        </div>
      </div>
    ));
};

export default ProductsSkeleton;

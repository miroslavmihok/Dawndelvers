import React from "react";

function GameItem({ title, bgUrl, logoUrl }) {
  let bgSrc = `${process.env.PUBLIC_URL}${bgUrl}`;
  let logoSrc = `${process.env.PUBLIC_URL}${logoUrl}`;

  return (
    <div
      className={`flex h-[300px] min-w-[160px] flex-col items-center justify-end gap-2 whitespace-nowrap py-4`}
      style={{
        background: `linear-gradient(0deg, rgba(7,2,12,1) 10%, rgba(7,2,12,0) 100%), url(${bgSrc}) center center / cover no-repeat, rgb(51, 41, 70)`,
      }}
    >
      <span className="flex h-[64px] items-center justify-center text-wrap text-center text-2xl font-bold">
        {title}
      </span>
      <div className="flex items-center justify-center overflow-hidden rounded-full">
        <img
          src={logoSrc}
          width={"30px"}
          height={"30px"}
          alt={`${title} logo`}
        />
      </div>
    </div>
  );
}

export default GameItem;

import React from "react";

function GameItem({ title, url, bgUrl, logoUrl }) {
  let bgSrc = `${process.env.PUBLIC_URL}${bgUrl}`;
  let logoSrc = `${process.env.PUBLIC_URL}${logoUrl}`;

  return (
    <a
      href={url}
      className="flex h-[300px] w-full overflow-hidden opacity-90 lg:h-[360px]"
    >
      <div
        className={`game-card flex h-full  w-full flex-col items-center justify-end`}
        style={{
          background: `linear-gradient(0deg, rgba(7,2,12,1) 10%, rgba(7,2,12,0) 100%), url(${bgSrc}) center center / cover no-repeat, rgb(51, 41, 70)`,
        }}
      >
        <h4 className="mb-2 flex h-[64px] w-full items-center justify-center text-wrap text-center font-bold">
          {title}
        </h4>
        <div className="mb-5 flex items-center justify-center overflow-hidden rounded-full">
          <img
            src={logoSrc}
            width={"30px"}
            height={"30px"}
            alt={`${title} logo`}
          />
        </div>
      </div>
    </a>
  );
}

export default GameItem;

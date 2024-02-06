import React from "react";

let imgSrc = `${process.env.PUBLIC_URL}./assets/products/wow.png`;

function Testimonials() {
  return (
    <div className="mb-24 flex items-center justify-center">
      <a className="" href="/">
        <div className="relative flex h-[300px] min-w-[256px] max-w-[530px]">
          {/* Linear gradient overlay */}
          <div
            className={`absolute inset-0 z-10 h-full w-full`}
            style={{
              background: `black`,
              borderRadius: `inherit`, // Apply the same border-radius as the parent
            }}
          ></div>
          {/* Product image */}
          <div
            className={`h-full w-full`}
            style={{
              backgroundImage: `url(${imgSrc})`,
            }}
          ></div>
        </div>
      </a>
    </div>
  );
}

export default Testimonials;

import React from "react";
import { FaAnglesRight } from "react-icons/fa6";

function HowItWorksContainer({ icon, title, description, index }) {
  return (
    <>
      <div
        className="howto-cards flex aspect-square max-w-[264px] flex-col items-center justify-evenly rounded-3xl p-6 text-center text-xl md:text-2xl 2xl:max-w-[300px] "
        style={{
          background: `radial-gradient(circle, rgba(237,237,245,0.5) 0%, rgba(119,109,121,0.5) 100%)`,
        }}
      >
        <i className={`fa-solid ${icon} text-4xl`}></i>
        <h3 className="my-2">{title}</h3>
        <p className="text-base md:text-base">{description}</p>
      </div>
      <div
        className={`arrow-container hidden ${index === 0 || index === 2 ? "xs:flex" : ""}`}
      >
        <FaAnglesRight size={"44px"} />
      </div>
    </>
  );
}

export default HowItWorksContainer;

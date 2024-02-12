import React from "react";
import { FaAnglesRight } from "react-icons/fa6";

const steps = [
  {
    icon: "fa-gamepad",
    title: "Select Your Game",
    description:
      "Browse through our collection of games and choose the one that catches your interest.",
  },
  {
    icon: "fa-pen-nib",
    title: "Provide Details",
    description:
      "Complete the required fields with your contact information to ensure smooth communication.",
  },
  {
    icon: "fa-cart-shopping",
    title: "Confirm Your Order",
    description:
      "Review all the details you've provided and confirm your order with confidence.",
  },
  {
    icon: "fa-clipboard-check",
    title: "Await Confirmation",
    description:
      "Sit back and relax as our dedicated team processes your order.",
  },
];

function HowItWorks() {
  return (
    <div className="mb-8 flex w-full flex-col items-center justify-center px-8 sm:mb-10 md:mb-12 xl:mb-14">
      <h2 className="mb-8">How to place an order?</h2>
      <div className="howto-cards-container grid items-center gap-4">
        {steps.map((step, index) => (
          <>
            <div
              key={index}
              className="howto-cards flex aspect-square max-w-[264px] flex-col items-center justify-evenly rounded-3xl p-6 text-center text-xl md:text-2xl 2xl:max-w-[300px] "
              style={{
                background: `radial-gradient(circle, rgba(237,237,245,0.5) 0%, rgba(119,109,121,0.5) 100%)`,
              }}
            >
              <i className={`fa-solid ${step.icon} text-4xl`}></i>
              <h3 className="my-2">{step.title}</h3>
              <p className="text-base md:text-base">{step.description}</p>
            </div>
            <div
              className={`arrow-container hidden ${index === 0 || index === 2 ? "xs:flex" : ""}`}
            >
              <FaAnglesRight size={"44px"} />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default HowItWorks;

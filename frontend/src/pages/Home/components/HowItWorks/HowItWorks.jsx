import React from "react";
import HowItWorksContainer from "./components/HowItWorksContainer";
import { steps } from "../../../../Data/howItWorksSteps";

function HowItWorks() {
  return (
    <div className="mb-8 flex w-full flex-col items-center justify-center px-8 sm:mb-10 md:mb-12 xl:mb-14">
      <h2 className="mb-8">How to place an order?</h2>
      <div className="howto-cards-container grid items-center gap-4">
        {steps.map((step, index) => (
          <HowItWorksContainer
            key={index}
            index={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </div>
  );
}

export default HowItWorks;

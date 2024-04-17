import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { questions } from "../../data/questions";
import bg from "../../assets/backgrounds/main-home-rev-2.png";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

function FAQ() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const clickHandler = (index) => {
    if (currentIndex === index) {
      setCurrentIndex(null);
    } else {
      setCurrentIndex(index);
    }
  };

  return (
    <div
      className="mt-[56px] flex min-h-screen flex-col items-center justify-center md:mt-[66px]"
      style={{
        background: `linear-gradient(0deg, rgba(28,16,36,1) 0%, rgba(28,16,36,0) 50%, rgba(28,16,36,1) 100%), url(${bg}) center center / cover no-repeat`,
      }}
    >
      <Breadcrumbs />
      <h2 className="mb-14">Frequently Asked Questions</h2>
      <div className="flex flex-col items-center justify-center gap-4 px-8 pb-8 pt-8 text-black sm:pb-10 md:pb-12 lg:px-0 xl:pb-14">
        {questions.map((question, index) => (
          <button
            key={index}
            className="w-full max-w-[800px] overflow-hidden rounded-md bg-lightGrey px-4 py-3 text-left"
            onClick={() => clickHandler(index)}
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold">{question.title}</span>
              <FaAngleDown size={"24px"} />
            </div>
            <div
              className={`transition-maxHeight font-normal duration-300 ease-in-out ${index === currentIndex ? "max-h-[100px]" : "max-h-0 overflow-hidden"}`}
            >
              {question.answer}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default FAQ;

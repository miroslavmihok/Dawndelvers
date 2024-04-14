import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { questions } from "../../../../data/questions";

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
    <div className="flex w-full flex-col items-center justify-center gap-8 px-8 lg:flex-row">
      <h2>
        Frequently Asked <br className="hidden lg:flex" />
        Questions
      </h2>
      <div className="flex flex-col items-center justify-center gap-4 pb-8 pt-8 text-black sm:pb-10 md:pb-12 xl:pb-14">
        {questions.map((question, index) => (
          <button
            key={index}
            className="w-full max-w-[800px] overflow-hidden rounded-md bg-lightGrey px-4 py-3 text-left"
            onClick={() => clickHandler(index)}
          >
            <div className="flex items-center justify-between">
              <span className="">{question.title}</span>
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

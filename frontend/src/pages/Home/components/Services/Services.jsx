import React from "react";
import { Link } from "react-router-dom";
import { FaRocket, FaGraduationCap, FaWpforms } from "react-icons/fa6";

function Services() {
  return (
    <div className="mb-8 flex w-full flex-col items-center justify-center px-8 sm:mb-10 md:mb-12 xl:mb-14">
      <h2 className="mb-8">Our Services</h2>
      <div className="z-10 flex flex-col items-center justify-center gap-4 lg:flex-row">
        <div
          className="max-w-[500px] rounded-3xl p-6"
          style={{
            background: `radial-gradient(circle, rgba(7,2,12,0) 0%, rgba(7,2,12,1) 200%)`,
          }}
        >
          <div>
            <div className="mb-2">
              <h3 className="flex items-center justify-start gap-2">
                <FaRocket />
                Boosting
              </h3>
            </div>
            <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Deserunt, minima! Quidem nostrum saepe ad, sit veniam consectetur
              hic tempore vero?
            </p>
            <ul className="mb-8 ml-8 flex list-disc flex-col items-start justify-center">
              <li>Advantage</li>
              <li>Advantage</li>
              <li>Advantage</li>
              <li>Advantage</li>
            </ul>
            <Link
              to="/workwithus"
              className="flex w-fit items-center justify-center gap-2 rounded-md bg-mediumPurple px-6 py-3 font-semibold hover:bg-lightPurple"
            >
              <FaWpforms />
              Sign Up Today
            </Link>
          </div>
        </div>
        <div
          className="max-w-[500px] rounded-3xl p-6"
          style={{
            background: `radial-gradient(circle, rgba(7,2,12,0) 0%, rgba(7,2,12,1) 200%)`,
          }}
        >
          <div>
            <div className="mb-2">
              <h3 className="flex items-center justify-start gap-2">
                <FaGraduationCap />
                Coaching
              </h3>
            </div>
            <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Deserunt, minima! Quidem nostrum saepe ad, sit veniam consectetur
              hic tempore vero?
            </p>
            <ul className="mb-8 ml-8 flex list-disc flex-col items-start justify-center">
              <li>Advantage</li>
              <li>Advantage</li>
              <li>Advantage</li>
              <li>Advantage</li>
            </ul>
            <Link
              to="/workwithus"
              className="flex w-fit items-center justify-center gap-2 rounded-md bg-mediumPurple px-6 py-3 font-semibold hover:bg-lightPurple"
            >
              <FaWpforms />
              Sign Up Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

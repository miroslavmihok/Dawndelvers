import React from "react";
import { Link } from "react-router-dom";
import { FaRocket, FaGraduationCap, FaWpforms } from "react-icons/fa6";

function Services() {
  return (
    <div className="z-10 mb-8 flex w-full flex-col items-center justify-center px-8 sm:mb-10 md:mb-12 xl:mb-14">
      <h2 className="mb-8">Our Services</h2>
      <div className="z-10 grid grid-cols-1 grid-rows-2 items-center justify-center gap-4 lg:grid-cols-2 lg:grid-rows-1">
        <div
          className="h-full max-w-[500px] rounded-3xl p-6"
          style={{
            background: `radial-gradient(circle, rgba(7,2,12,0.5) 0%, rgba(7,2,12,1) 100%)`,
          }}
        >
          <div className="flex h-full flex-col items-start justify-between">
            <div>
              <div className="mb-2">
                <h3 className="flex items-center justify-start gap-2">
                  <FaRocket />
                  Boosting
                </h3>
              </div>
              <p className="mb-2">
                We value responsibility, professionalism, and motivation as
                essential qualities for this role. If you embody these traits
                and are passionate about delivering exceptional service, we
                encourage you to submit your application.
              </p>
              <ul className="mb-8 ml-8 flex list-disc flex-col items-start justify-center">
                <li>
                  After successfully completing an order, funds will be promptly
                  credited to your currency account
                </li>
                <li>Semi-Automated Payouts Delivered Daily</li>
                <li>History of orders and payments</li>
              </ul>
            </div>
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
          className="h-full max-w-[500px] rounded-3xl p-6"
          style={{
            background: `radial-gradient(circle, rgba(7,2,12,0.5) 0%, rgba(7,2,12,1) 100%)`,
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
              As a coach, you'll have the opportunity to guide and mentor
              gamers, offering personalized training sessions, strategic advice,
              and valuable insights to help them improve their skills and
              achieve their gaming goals.
            </p>
            <ul className="mb-8 ml-8 flex list-disc flex-col items-start justify-center">
              <li>Flexible Schedule</li>
              <li>
                Joining our coaching team offers valuable opportunities for
                professional growth and development
              </li>
              <li>Semi-Automated Payouts Delivered Daily</li>
              <li>History of orders and payments</li>
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

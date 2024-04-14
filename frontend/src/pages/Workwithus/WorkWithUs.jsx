import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import WorkWithUsComponent from "../../components/WorkWithUs/WorkWithUsComponent";
import bg from "../../assets/backgrounds/main-home-rev-2.png";

function WorkWithUs() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center"
      style={{
        background: `linear-gradient(0deg, rgba(28,16,36,1) 0%, rgba(28,16,36,0) 50%, rgba(28,16,36,1) 100%), url(${bg}) center center / cover no-repeat`,
      }}
    >
      <div className="mb-8 flex w-full flex-col items-center justify-center px-8 sm:mb-10 md:mb-12 xl:mb-14">
        <Breadcrumbs />
        <h2 className="mb-14">Work with us</h2>
        <WorkWithUsComponent />
      </div>
    </div>
  );
}

export default WorkWithUs;

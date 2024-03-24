import React from "react";
import { Link, useParams } from "react-router-dom";
import { useAuthData } from "../../context/authCtx";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ProfileDetails from "./components/ProfileDetails";
import OrderHistory from "./components/OrderHistory";
import OrderDetails from "./components/OrderDetails";
import bg from "../../assets/backgrounds/main-home-rev-1.png";
import image from "../../assets/backgrounds/main-home-img-7.jpg";
import { FaAngleRight } from "react-icons/fa6";

const ProfileScreen = () => {
  const { section, id } = useParams();
  const { userItem } = useAuthData();

  return (
    <div className="mt-[56px] flex basis-0 flex-col items-center justify-center pb-8 md:mt-[66px] xl:mt-0">
      <div
        className="mb-8 flex aspect-video max-h-[300px] w-full flex-col items-center justify-end"
        style={{
          background: `linear-gradient(rgba(28,17,36, 0.1) 0%, rgb(28,17,36) 100%), url(${image}) center center / cover no-repeat`,
        }}
      >
        <div className="flex w-full flex-col items-start justify-end px-8 xl:w-[900px] 2xl:w-[1200px] 3xl:w-[1580px]">
          <Breadcrumbs />
          <h1 className="text-center">{userItem.name}</h1>
          <hr className="h-[1px] w-full" />
        </div>
      </div>
      <div
        className="flex w-full flex-col items-center justify-start"
        style={{
          background: `linear-gradient(0deg, rgba(28,16,36,1) 0%, rgba(28,16,36,0) 50%, rgba(28,16,36,1) 100%), url(${bg}) center center / cover no-repeat`,
        }}
      >
        <div className="flex w-full flex-col px-8 xl:w-[900px] 2xl:w-[1200px] 3xl:w-[1580px]">
          <div
            className="flex flex-col gap-3 py-6 md:min-h-[600px] md:flex-row"
            style={{ backdropFilter: "blur(10px)" }}
          >
            <aside className="flex w-full flex-row items-center justify-center gap-3 md:w-[25%] md:flex-col md:items-start md:justify-start md:gap-0 2xl:w-[15%]">
              <Link
                to="/profile/details"
                className="border-b-none flex items-center justify-between rounded-b-md rounded-t-md border-b-coolGray bg-mediumPurple px-3 py-2 font-semibold text-fontLightGray hover:bg-lightPurple hover:text-white md:w-full md:rounded-b-none md:border-b-[1px]"
              >
                <span>Personal details</span>
                <FaAngleRight className="hidden md:flex" />
              </Link>
              <Link
                to="/profile/orders"
                className="flex items-center justify-between rounded-b-md rounded-t-md bg-mediumPurple px-3 py-2 font-semibold text-fontLightGray hover:bg-lightPurple hover:text-white md:w-full md:rounded-t-none"
              >
                <span>Order history</span>
                <FaAngleRight className="hidden md:flex" />
              </Link>
            </aside>
            <div className="flex w-full items-center justify-center md:w-[75%] md:items-start md:justify-center 2xl:w-[85%]">
              {section === "details" && <ProfileDetails />}
              {section === "orders" && !id && <OrderHistory />}
              {section === "orders" && id && <OrderDetails />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;

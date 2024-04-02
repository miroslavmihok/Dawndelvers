import React from "react";
import { Link, useParams } from "react-router-dom";
import { useAuthData } from "../../../context/authCtx";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import ProfileDetails from "./components/ProfileDetails";
import GameList from "./components/GameList";
import GameDetails from "./components/GameDetails";
import AddGame from "./components/AddGame";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import AddProduct from "./components/AddProduct";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import OrderList from "./components/OrderList";
import OrderDetails from "./components/OrderDetails";
import bg from "../../../assets/backgrounds/main-home-rev-1.png";
import image from "../../../assets/backgrounds/main-home-img-7.jpg";
import { FaAngleRight } from "react-icons/fa6";

const AdminProfileScreen = () => {
  const { section, action, url } = useParams();
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
            className="flex flex-col gap-9 py-6 xl:min-h-[600px] xl:flex-row xl:gap-3"
            style={{ backdropFilter: "blur(10px)" }}
          >
            <aside className="flex w-full flex-row flex-wrap items-center justify-center gap-3 xl:w-[25%] xl:flex-col xl:items-start xl:justify-start xl:gap-0 2xl:w-[15%]">
              <Link
                to="/admin/profile/details"
                className="border-b-none flex items-center justify-between rounded-b-md rounded-t-md border-b-coolGray bg-mediumPurple px-3 py-2 font-semibold text-fontLightGray hover:bg-lightPurple hover:text-white xl:w-full xl:rounded-b-none xl:border-b-[1px]"
              >
                <span>Personal details</span>
                <FaAngleRight className="hidden xl:flex" />
              </Link>

              <Link
                to="/admin/profile/gamelist"
                className="flex items-center justify-between rounded-b-md rounded-t-md border-b-coolGray bg-mediumPurple px-3 py-2 font-semibold text-fontLightGray hover:bg-lightPurple hover:text-white xl:w-full xl:rounded-b-none xl:rounded-t-none xl:border-b-[1px]"
              >
                <span>Games</span>
                <FaAngleRight className="hidden xl:flex" />
              </Link>

              <Link
                to="/admin/profile/productlist"
                className="flex items-center justify-between rounded-b-md rounded-t-md border-b-coolGray bg-mediumPurple px-3 py-2 font-semibold text-fontLightGray hover:bg-lightPurple hover:text-white xl:w-full xl:rounded-b-none xl:rounded-t-none xl:border-b-[1px]"
              >
                <span>Products</span>
                <FaAngleRight className="hidden xl:flex" />
              </Link>

              <Link
                to="/admin/profile/userlist"
                className="flex items-center justify-between rounded-b-md rounded-t-md border-b-coolGray bg-mediumPurple px-3 py-2 font-semibold text-fontLightGray hover:bg-lightPurple hover:text-white xl:w-full xl:rounded-b-none xl:rounded-t-none xl:border-b-[1px]"
              >
                <span>Users</span>
                <FaAngleRight className="hidden xl:flex" />
              </Link>

              <Link
                to="/admin/profile/orderlist"
                className="flex items-center justify-between rounded-b-md rounded-t-md bg-mediumPurple px-3 py-2 font-semibold text-fontLightGray hover:bg-lightPurple  hover:text-white xl:w-full xl:rounded-t-none"
              >
                <span>Orders</span>
                <FaAngleRight className="hidden xl:flex" />
              </Link>
            </aside>
            <div className="flex w-full items-center justify-center xl:w-[75%] xl:items-start xl:justify-center 2xl:w-[85%]">
              {section === "details" && !action && <ProfileDetails />}
              {/* GAMES sections */}
              {section === "gamelist" && !action && !url && <GameList />}
              {section === "gamelist" && action === "details" && url && (
                <GameDetails />
              )}
              {section === "gamelist" && action === "add" && <AddGame />}
              {/* PRODUCTS sections */}
              {section === "productlist" && !action && !url && <ProductList />}
              {section === "productlist" && action === "details" && url && (
                <ProductDetails />
              )}
              {section === "productlist" && action === "add" && <AddProduct />}
              {/* USERS sections */}
              {section === "userlist" && !action && !url && <UserList />}
              {section === "userlist" && action === "details" && url && (
                <UserDetails />
              )}
              {/* ORDERS sections */}
              {section === "orderlist" && !action && <OrderList />}
              {section === "orderlist" && action === "details" && url && (
                <OrderDetails />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfileScreen;

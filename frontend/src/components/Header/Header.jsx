import React from "react";
import { Link } from "react-router-dom";
import { useHeaderData } from "../../context/headerCtx";
import { useCartData } from "../../context/cartCtx";
import { useLogout } from "../../hooks/useLogout";
import { useAuthData } from "../../context/authCtx";
import Navbar from "./components/Navbar";
import UserSection from "./components/UserSection";
import UserMobileSection from "./components/UserMobileSection";
import { FaBars, FaCartShopping, FaRegUser } from "react-icons/fa6";
import Logo from "../../assets/identity/Logo.png";
import Logoname from "../../assets/identity/Logoname.png";

const Header = ({ displayAuthModalHandler }) => {
  const { setIsShown } = useHeaderData();

  const { userItem } = useAuthData();
  const { state } = useCartData();

  const { logout } = useLogout();

  const clickHandler = () => {
    setIsShown((showValue) => !showValue);
  };

  const logoutHandler = () => {
    logout();
  };

  return (
    <>
      <header
        className={`fixed top-0 z-50 flex w-full items-center bg-darkPurple font-semibold tracking-[0.01rem] text-[#fdfdfd] xl:h-screen xl:w-[300px] xl:flex-col`}
      >
        <div className="flex w-full justify-between px-8 py-3 xl:h-full xl:flex-col xl:px-3">
          {/* HEADER LEFT */}
          <div className="flex w-full items-center justify-between gap-4 xl:h-[25%] xl:w-full xl:flex-col xl:justify-around xl:py-5">
            {/* Logo > 1280px */}
            <div className="flex items-center justify-start gap-4 xl:flex-col xl:justify-center">
              {/* Catalog Btn */}
              <button
                onClick={() => clickHandler()}
                className="flex items-center justify-start rounded-sm bg-lightPurple p-[3px] hover:bg-mediumPurple md:rounded-md md:p-[8px] xl:hidden"
              >
                <FaBars className="size-[26px] xl:mr-2 xl:size-[18px]" />
              </button>
              <Link to="/">
                <img
                  src={Logo}
                  alt="logo"
                  className="icon block aspect-square w-[32px] max-w-[32px] xl:w-[64px] xl:max-w-[64px]"
                />
              </Link>
              {/* Logoname > 1536px */}
              <Link to="/">
                <img
                  src={Logoname}
                  alt="logoname"
                  className="icon hidden h-[26px] sm:block"
                />
              </Link>
            </div>
            {userItem && (
              <div className="hidden items-center justify-center xl:flex xl:w-full xl:flex-col xl:gap-4">
                <UserSection
                  logoutHandler={logoutHandler}
                  userItem={userItem}
                />
              </div>
            )}
          </div>
          <div className="hidden w-full items-center justify-center xl:flex xl:h-[50%]">
            <ul className="menus flex w-full flex-col items-start justify-center text-3xl uppercase leading-8">
              <li className="w-full">
                <Link
                  to="/"
                  className={`group group relative flex w-full items-center justify-between overflow-hidden rounded border border-none border-[mediumPurple] px-4 py-3 font-bold`}
                >
                  <div className="transition-width absolute left-0 z-20 h-full w-0 bg-lightPurple bg-transparent duration-300 ease-in-out group-hover:w-full group-hover:bg-lightPurple"></div>
                  <span className="z-30 text-fontLavenderGray group-hover:text-white">
                    home
                  </span>
                </Link>
              </li>
              <li className="w-full">
                <Link
                  to={`/products/worldofwarcraft`}
                  className={`group group relative flex w-full items-center justify-between overflow-hidden rounded border border-none border-[mediumPurple] px-4 py-3 font-bold`}
                >
                  <div className="transition-width absolute left-0 z-20 h-full w-0 bg-lightPurple bg-transparent duration-300 ease-in-out group-hover:w-full group-hover:bg-lightPurple"></div>
                  <span className="z-30 text-fontLavenderGray group-hover:text-white">
                    products
                  </span>
                </Link>
              </li>
              <li className="w-full">
                <Link
                  to="/about"
                  className={`group group relative flex w-full items-center justify-between overflow-hidden rounded border border-none border-[mediumPurple] px-4 py-3 font-bold`}
                >
                  <div className="transition-width absolute left-0 z-20 h-full w-0 bg-lightPurple bg-transparent duration-300 ease-in-out group-hover:w-full group-hover:bg-lightPurple"></div>
                  <span className="z-30 text-fontLavenderGray group-hover:text-white">
                    about us
                  </span>
                </Link>
              </li>
              <li className="w-full">
                <Link
                  to="/workwithus"
                  className={`group group relative flex w-full items-center justify-between overflow-hidden rounded border border-none border-[mediumPurple] px-4 py-3 font-bold`}
                >
                  <div className="transition-width absolute left-0 z-20 h-full w-0 bg-lightPurple bg-transparent duration-300 ease-in-out group-hover:w-full group-hover:bg-lightPurple"></div>
                  <span className="z-30 text-fontLavenderGray group-hover:text-white">
                    work with us
                  </span>
                </Link>
              </li>
              <li className="w-full">
                <Link
                  to="/faq"
                  className={`group group relative flex w-full items-center justify-between overflow-hidden rounded border border-none border-[mediumPurple] px-4 py-3 font-bold`}
                >
                  <div className="transition-width absolute left-0 z-20 h-full w-0 bg-lightPurple bg-transparent duration-300 ease-in-out group-hover:w-full group-hover:bg-lightPurple"></div>
                  <span className="z-30 text-fontLavenderGray group-hover:text-white">
                    faq
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          {/* HEADER RIGHT*/}
          {/* three icons < 1280px , two icons > 1280px */}
          <div className="flex w-fit items-center justify-end gap-2 xl:h-[25%] xl:w-full xl:flex-col xl:gap-4 xl:pb-5">
            {/* user icons on > 1280px */}
            {!userItem && (
              <button
                className="mx-3 hidden rounded-md border border-lightPurple hover:bg-lightPurple md:px-[16px] md:py-[10px] xl:flex xl:w-full xl:items-center xl:justify-center xl:gap-2"
                onClick={() => displayAuthModalHandler()}
              >
                <span>Login / Sign Up</span>
              </button>
            )}
            {!userItem && (
              <button
                className="mx-3 block xl:hidden"
                onClick={() => displayAuthModalHandler()}
              >
                <FaRegUser size="26px" />
              </button>
            )}
            {userItem && (
              <UserMobileSection
                logoutHandler={logoutHandler}
                userItem={userItem}
              />
            )}
            <Link
              to={`/cart`}
              className="rounded-md hover:bg-lightPurple md:bg-mediumPurple md:p-[8px] xl:flex xl:w-full xl:items-center xl:justify-center xl:gap-2"
            >
              <FaCartShopping size="26px" />
              <span className="hidden xl:block">
                Cart (
                <span>
                  {state.cartItems.length > 0
                    ? state.cartItems.reduce((a, c) => a + 1, 0)
                    : 0}
                </span>
                )
              </span>
            </Link>
          </div>
        </div>
      </header>
      <Navbar onClose={clickHandler} />
    </>
  );
};

export default Header;

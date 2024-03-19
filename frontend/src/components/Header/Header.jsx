import React from "react";
import { Link } from "react-router-dom";
import { useHeaderData } from "../../context/headerCtx";
import { useCartData } from "../../context/cartCtx";
import { useLogout } from "../../hooks/useLogout";
import { useAuthData } from "../../context/authCtx";
import Tooltip from "../UI/Tooltip";
import Navbar from "./components/Navbar";
import UserSection from "./components/UserSection";
import UserMobileSection from "./components/UserMobileSection";
import {
  FaBars,
  FaCartShopping,
  FaRegUser,
  FaMagnifyingGlass,
  FaCaretDown,
} from "react-icons/fa6";
import Logo from "../../assets/identity/Logo.png";
import Logoname from "../../assets/identity/Logoname.png";

const Header = ({ displayAuthModalHandler }) => {
  const { setIsShown, setIsCurrencyVisible, currency } = useHeaderData();

  const { userItem } = useAuthData();
  const { state } = useCartData();

  const { logout } = useLogout();

  const clickHandler = () => {
    setIsShown((showValue) => !showValue);
  };

  const currencyClickHandler = () => {
    setIsCurrencyVisible((currencyVisible) => !currencyVisible);
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
          <div className="flex w-[50%] items-center justify-start gap-4 sm:w-[70%] xl:h-[25%] xl:w-full xl:flex-col xl:justify-between xl:py-5">
            {/* Logo > 1280px */}
            <div className="flex items-center justify-start gap-4 xl:flex-col xl:justify-center">
              {/* Catalog Btn */}
              <button
                onClick={() => clickHandler()}
                className="flex items-center justify-start rounded-sm bg-lightPurple p-[3px] hover:bg-mediumPurple md:rounded-md md:p-[8px] xl:hidden"
              >
                <FaBars className="size-[26px] xl:mr-2 xl:size-[18px]" />
                <span className="hidden h-[22px] items-center xl:flex xl:h-[18px]">
                  Catalog
                </span>
              </button>
              <Link to="/">
                <img
                  src={Logo}
                  alt="logo"
                  className="icon block aspect-square w-[32px] xl:w-[64px]"
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
            <div className="flex items-center justify-center xl:w-full xl:flex-col xl:gap-4">
              {userItem && <UserSection logoutHandler={logoutHandler} />}
              <form name="searchForm" className="hidden w-full px-4 xl:block">
                <div className="relative flex w-full items-center justify-between text-sepiaGray">
                  <input
                    type="search"
                    name="searchBar"
                    placeholder="Search"
                    className="h-[42px] w-full rounded-md border border-[rgba(0,0,0,0)] bg-sepiaPurple py-[12px] pl-[12px] pr-[44px] font-medium outline-0  focus:border-lightPurple"
                  />
                  <button className="absolute right-[12px]" type="submit">
                    <FaMagnifyingGlass size="21px" />
                  </button>
                </div>
              </form>
            </div>
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
          <div className="flex w-[50%] items-center justify-end gap-2 sm:w-[30%] xl:h-[25%] xl:w-full xl:flex-col xl:gap-4 xl:pb-5">
            <button className="block xl:hidden">
              <FaMagnifyingGlass size="26px" />
            </button>
            {/* currency and currency dropdown on > 1280px */}
            <div className="relative hidden xl:flex xl:w-full xl:items-center xl:justify-center">
              <button
                className="mx-[12px] hidden xl:block"
                type="button"
                onClick={() => currencyClickHandler()}
              >
                <div className="flex items-center gap-1">
                  <div className="flex gap-1 text-fontCoolGray hover:text-white">
                    <span>{currency.curSymbol}</span>
                    <span>{currency.cur}</span>
                  </div>
                  <FaCaretDown />
                </div>
              </button>
              <Tooltip list={["USD", "EUR"]} />
            </div>
            {/* user icons on > 1280px */}
            {!userItem && (
              <button
                className="mx-3 hidden rounded-md border border-lightPurple hover:bg-lightPurple md:px-[16px] md:py-[10px] xl:flex xl:w-full xl:items-center xl:justify-center xl:gap-2"
                onClick={() => displayAuthModalHandler()}
              >
                <span>Login / Sign Up</span>
              </button>
            )}
            {/* user icon on < 1280px */}
            {!userItem && (
              <button
                className="mx-3 block xl:hidden"
                onClick={() => displayAuthModalHandler()}
              >
                <FaRegUser size="26px" />
              </button>
            )}
            {userItem && <UserMobileSection logoutHandler={logoutHandler} />}
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

import React from "react";
import Tooltip from "../UI/Tooltip";
import {
  FaBars,
  FaCartShopping,
  FaRegUser,
  FaMagnifyingGlass,
  FaCaretDown,
} from "react-icons/fa6";
import Logo from "../../assets/identity/Logo.png";
import Logoname from "../../assets/identity/Logoname.png";
import { useHeaderData } from "../../dataContext/headerCtx";
import { useData } from "../../dataContext/dataCtx";

const Header = () => {
  const { setIsShown, setHeading } = useHeaderData();
  const { isCurrencyVisible, setIsCurrencyVisible, currency } = useData();

  const clickHandler = () => {
    setIsShown(true);
    setHeading("");
  };

  const currencyClickHandler = () => {
    setIsCurrencyVisible(!isCurrencyVisible);
  };

  return (
    <>
      <header
        className={`fixed top-0 z-30 flex w-full flex-col items-center bg-darkPurple font-semibold tracking-[0.01rem] text-[#fdfdfd]`}
      >
        <div className="flex w-full justify-between px-2 py-3 xl:px-8">
          {/* HEADER LEFT */}
          <div className="flex w-[28%] items-center justify-start sm:w-[25%] xl:max-h-[42px] xl:w-fit xl:gap-4">
            {/* Logo > 1280px */}
            <a href="/">
              <img
                src={Logo}
                alt="logo"
                className="icon hidden aspect-square w-[32px] xl:block"
              />
            </a>
            {/* Logoname > 1536px */}
            <a href="/">
              <img
                src={Logoname}
                alt="logoname"
                className="icon hidden h-[22px] 2xl:block"
              />
            </a>
            {/* Catalog Btn */}
            <button
              onClick={() => clickHandler()}
              className="flex items-center justify-start rounded-sm bg-lightPurple p-[3px] hover:bg-mediumPurple md:rounded-sm xl:p-[12px]"
            >
              <FaBars className="size-[22px] xl:mr-2 xl:size-[18px]" />
              <span className="hidden h-[22px] items-center xl:flex xl:h-[18px]">
                Catalog
              </span>
            </button>
            {/* Search form on > 1280px */}
            <form className="hidden xl:block">
              <div className="relative flex items-center justify-between text-sepiaGray">
                <input
                  type="search"
                  placeholder="Search"
                  className="h-[42px] rounded-md border border-[rgba(0,0,0,0)] bg-sepiaPurple py-[12px] pl-[12px] pr-[44px] font-medium outline-0  focus:border-lightPurple"
                />
                <button className="absolute right-[12px]" type="submit">
                  <FaMagnifyingGlass size="21px" />
                </button>
              </div>
            </form>
          </div>
          {/* HEADER MIDDLE */}
          {/* Logo on < 1280px */}
          <div className="flex w-[44%] items-center justify-center sm:w-[50%] xl:hidden xl:max-h-[42px]">
            <img
              src={Logo}
              alt="logo"
              className="icon aspect-square w-[32px]"
            />
          </div>
          {/* HEADER RIGHT*/}
          {/* three icons < 1280px , two icons > 1280px */}
          <div className="flex w-[28%] items-center justify-end sm:w-[25%] xl:max-h-[42px]">
            <button className="block xl:hidden">
              <FaMagnifyingGlass size="21px" />
            </button>
            {/* currency and currency dropdown on > 1280px */}
            <div className="relative">
              <button
                className="mx-[12px] hidden xl:block"
                type="button"
                onClick={() => currencyClickHandler()}
              >
                <div className="flex gap-1">
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
            <button className="mx-3 hidden text-fontLightGray hover:text-white xl:block">
              <span>Log in</span>
            </button>
            <button className="mx-3 hidden rounded-md hover:bg-mediumPurple md:bg-lightPurple md:px-[16px] md:py-[10px] xl:block">
              <span>Sign up</span>
            </button>
            {/* user icon on < 1280px */}
            <button className="mx-3 block xl:hidden">
              <FaRegUser size="22px" />
            </button>
            <button className="rounded-md hover:bg-mediumPurple md:bg-lightPurple md:p-[10px]">
              <FaCartShopping size="22px" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

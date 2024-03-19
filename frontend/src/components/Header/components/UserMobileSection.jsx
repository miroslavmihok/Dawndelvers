import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Avatar from "../../../assets/user/Avatar.png";
import { FaCaretDown } from "react-icons/fa6";

function UserMobileSection({ logoutHandler }) {
  const [isUserClicked, setIsUserClicked] = useState(false);

  const mobileWrapperRef = useRef();
  const mobileButtonRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileWrapperRef.current &&
        !mobileWrapperRef.current.contains(event.target) &&
        !mobileButtonRef.current.contains(event.target) &&
        event.button === 0
      ) {
        setIsUserClicked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("onmousedown", handleClickOutside);
    };
  }, [mobileWrapperRef, setIsUserClicked]);

  return (
    <>
      <div className="relative flex items-center justify-center xl:hidden">
        <button
          ref={mobileButtonRef}
          onClick={() => setIsUserClicked((prevValue) => !prevValue)}
        >
          {/* setIsUserClicked((prevValue) => !prevValue) */}
          <div className="flex items-center justify-center gap-1">
            <img
              src={Avatar}
              alt="user icon"
              className="w-[32px] object-cover md:w-[42px]"
            />
            <FaCaretDown />
          </div>
        </button>
        <div
          className={`absolute z-40 min-w-[100px] items-center justify-center transition-all duration-500 ease-in-out ${isUserClicked ? "top-[150%] flex" : "top-[200%] hidden"}`}
          ref={mobileWrapperRef}
        >
          <div className="absolute top-[-5%] aspect-square h-[10%] rotate-45 bg-lightGrey"></div>
          <ul className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-md bg-white text-black">
            <li className="group w-full  cursor-pointer text-center">
              <Link
                to="/profile"
                className="w-full cursor-pointer px-4 py-3 group-hover:bg-lightGrey"
              >
                Profile
              </Link>
            </li>
            <li className="group w-full  cursor-pointer text-center">
              <button
                className="w-full cursor-pointer px-4 py-3 group-hover:bg-lightGrey"
                onClick={() => logoutHandler()}
              >
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default UserMobileSection;

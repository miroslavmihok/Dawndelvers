import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Avatar from "../../../assets/user/Avatar.png";
import { FaCaretDown } from "react-icons/fa6";

function UserSection({ logoutHandler, userItem }) {
  const [isUserClicked, setIsUserClicked] = useState(false);

  const wrapperRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target) &&
        event.button === 0
      ) {
        setIsUserClicked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("onmousedown", handleClickOutside);
    };
  }, [wrapperRef, setIsUserClicked]);

  const clickHandler = () => {
    logoutHandler();
    setIsUserClicked((prevValue) => !prevValue);
  };

  return (
    <>
      <div className="relative hidden xl:flex xl:w-full xl:items-center xl:justify-center">
        <button
          ref={buttonRef}
          onClick={() => setIsUserClicked((prevValue) => !prevValue)}
        >
          <div className="flex items-center justify-center gap-1">
            <img
              src={Avatar}
              alt="user icon"
              className="w-[42px] object-cover"
            />
            <FaCaretDown />
          </div>
        </button>
        <div
          className={`absolute z-40 w-full items-center justify-center transition-all duration-500 ease-in-out ${isUserClicked ? "top-[150%] flex" : "top-[200%] hidden"}`}
          ref={wrapperRef}
        >
          <div className="absolute top-[-5%] aspect-square h-[10%] rotate-45 bg-lightGrey"></div>
          <ul className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-md bg-white text-black">
            <li className="group w-full cursor-pointer text-center">
              <Link
                to={`${userItem.isAdmin ? "/admin/profile/details" : "/profile/details"}`}
                className={`flex w-full cursor-pointer items-center justify-center px-4 py-3 text-center group-hover:bg-lightGrey`}
                onClick={() => setIsUserClicked((prevValue) => !prevValue)}
              >
                Profile
              </Link>
            </li>
            <li className="group w-full  cursor-pointer text-center">
              <button
                className="w-full cursor-pointer px-4 py-3 group-hover:bg-lightGrey"
                onClick={() => clickHandler()}
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

export default UserSection;

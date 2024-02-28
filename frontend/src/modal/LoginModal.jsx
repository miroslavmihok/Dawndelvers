import React, { forwardRef, useRef, useEffect, useState } from "react";
import { PasswordStrength } from "./components/PasswordStrength";
import { FaCalendarDays, FaEnvelope, FaLock } from "react-icons/fa6";

const LoginModal = forwardRef(function LoginModal({ onClose }, ref) {
  const userAuthRef = useRef(null);

  const [formType, setFormType] = useState("login");
  const [values, setValues] = useState({
    email: "",
    birthday: "",
    password: "",
    passwordRepeat: "",
  });

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userAuthRef.current && !userAuthRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const changeFromTypeHandler = (e) => {
    e.preventDefault();
    if (formType === "login") {
      setFormType("signup");
    } else {
      setFormType("login");
    }
  };

  const changeHandler = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  return (
    <dialog
      ref={ref}
      className="flex min-w-[90%] flex-col items-center justify-start rounded-lg bg-mediumPurple xs:min-w-[500px]"
    >
      <form
        ref={userAuthRef}
        className="flex w-full flex-col items-center justify-start gap-3 p-8 text-white"
      >
        <h2 className="text-center text-white">{`${formType === "login" ? "Log in" : "Sign up"}`}</h2>
        <div className="formInput mt-4">
          <input
            type="email"
            id="userEmail"
            name="email"
            className="control"
            placeholder="Email"
            onChange={changeHandler}
          />
          <FaEnvelope
            size={"20px"}
            className="absolute left-[10px] top-[12px]"
          />
        </div>
        <div className="formInput">
          <input
            type="date"
            id="userBirthday"
            name="birthday"
            className="control"
            onChange={changeHandler}
          />
          <FaCalendarDays
            size={"20px"}
            className="absolute left-[10px] top-[12px]"
          />
        </div>
        <div className="formInput">
          <PasswordStrength
            placeholder={"Password"}
            values={values}
            setValues={setValues}
          />
          <FaLock size={"20px"} className="absolute left-[10px] top-[12px]" />
        </div>
        <div className="formInput">
          <input
            type="password"
            id="userPasswordRepeat"
            name="passwordRepeat"
            spellCheck="false"
            placeholder="Repeat Password"
            className="control"
            onChange={changeHandler}
          />
          <FaLock size={"20px"} className="absolute left-[10px] top-[12px]" />
          {values.passwordRepeat.length > 0 &&
            values.passwordRepeat !== values.password && (
              <span>Password doesn't match</span>
            )}
        </div>
        <button
          type="submit"
          className="rounded-md border border-lightPurple bg-lightPurple px-4 py-2"
        >{`${formType === "login" ? "Log in" : "Sign up"}`}</button>
        <div className="flex items-center justify-center gap-2">
          <span>{`${formType === "login" ? "Don't have an account? " : "Already have an account? "}`}</span>
          <button
            onClick={(e) => changeFromTypeHandler(e)}
          >{`${formType === "login" ? "Sign up" : "Log in"}`}</button>
        </div>
      </form>
    </dialog>
  );
});

export default LoginModal;

import React, { useRef, useEffect, useState } from "react";
import { PasswordStrength } from "./components/PasswordStrength";
import { useHeaderData } from "../context/headerCtx";
import { useSignup } from "../hooks/useSignup";
import { useLogin } from "../hooks/useLogin";
import validator from "validator";
import {
  FaRegEnvelope,
  FaLock,
  FaRegEye,
  FaRegEyeSlash,
} from "react-icons/fa6";

const AuthModal = ({ onClose, resetFormData }) => {
  const userAuthRef = useRef(null);

  const [formType, setFormType] = useState("login");
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [currentError, setCurrentError] = useState(null);
  const [emailFocus, setEmailFocus] = useState(true);
  const [passwordFocus, setPasswordFocus] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { showDialog, setShowDialog } = useHeaderData();

  const { signup, signupError, isSignupLoading } = useSignup();
  const { login, loginError, isLoginLoading } = useLogin();

  //if currentError true - dont close
  useEffect(() => {
    if (isSubmitted && !currentError) {
      setValues({
        name: "",
        email: "",
        password: "",
      });
      onClose();
      setIsSubmitted(false);
    } else if (isSubmitted && currentError) {
      setShowDialog(true);
      setIsSubmitted(false);
    }
  }, [isSubmitted, currentError, onClose, setShowDialog]);

  //remove red border and remove validator error msg when email/password are correct format
  useEffect(() => {
    if (validator.isEmail(values.email)) {
      setEmailFocus(true);
    }
    if (validator.isStrongPassword(values.password)) {
      setPasswordFocus(true);
    }
  }, [values.email, values.password]);

  //reset error when changing formType (login | signup)
  useEffect(() => {
    if (formType === "login" && isSubmitted) {
      setCurrentError(loginError);
    } else if (formType === "signup" && isSubmitted) {
      setCurrentError(signupError);
    }
  }, [loginError, signupError, formType, isSubmitted]);

  //close modal and reset inputs on outside clicks
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        userAuthRef.current &&
        !userAuthRef.current.contains(e.target) &&
        e.button === 0 &&
        showDialog
      ) {
        onClose();
        setValues({
          name: "",
          email: "",
          password: "",
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose, showDialog]);

  const changeFormTypeHandler = (e) => {
    e.preventDefault();
    if (formType === "login") {
      setFormType("signup");
    } else {
      setFormType("login");
    }
    setValues({
      name: "",
      email: "",
      password: "",
    });
    setIsSubmitted(false);
    setCurrentError(null);
  };

  const changeHandler = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const showPasswordHandler = (e) => {
    e.preventDefault();
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formType === "signup") {
      await signup(values.name, values.email, values.password);
    } else if (formType === "login") {
      await login(values.email, values.password);
    }
    setIsSubmitted(true);
  };

  return (
    <>
      {showDialog && (
        <div
          className={`fixed left-0 top-0 z-50 flex h-screen w-screen max-w-full items-center justify-center bg-black bg-opacity-40`}
        >
          <div className="flex min-w-[90%] flex-col items-center justify-start rounded-lg bg-mediumPurple xs:min-w-[500px]">
            <form
              ref={userAuthRef}
              action="/form"
              className="flex w-full flex-col items-center justify-start gap-3 p-8 text-white"
              onSubmit={handleSubmit}
            >
              <h2 className="text-center text-white">{`${formType === "login" ? "Log in" : "Sign up"}`}</h2>
              {formType === "signup" && (
                <div className="formInput mt-4">
                  <input
                    type="text"
                    id="userName"
                    name="name"
                    value={values.name}
                    className="control"
                    placeholder="Your name"
                    onChange={changeHandler}
                    autoComplete="new-name"
                  />
                  <FaRegEnvelope
                    size={"20px"}
                    className="absolute left-[10px] top-[12px]"
                  />
                </div>
              )}
              <div className="formInput">
                <input
                  type="email"
                  id="userEmail"
                  name="email"
                  value={values.email}
                  className={`control ${values.email.length > 0 && !emailFocus && !validator.isEmail(values.email) ? "border border-red-500" : ""}`}
                  placeholder="Email"
                  onChange={changeHandler}
                  autoComplete="new-email"
                  onFocus={
                    values.email.length === 0 ? () => setEmailFocus(true) : null
                  }
                  onBlur={() => setEmailFocus(false)}
                />
                <FaRegEnvelope
                  size={"20px"}
                  className="absolute left-[10px] top-[12px]"
                />
                <span className="text-sm text-red-500">
                  {values.email.length > 0 &&
                  !emailFocus &&
                  !validator.isEmail(values.email)
                    ? "Email is not valid"
                    : null}
                </span>
              </div>
              <div className="formInput">
                <PasswordStrength
                  placeholder={"Password"}
                  values={values}
                  password={values.password}
                  setValues={setValues}
                  showPassword={showPassword}
                  resetFormData={resetFormData}
                  formType={formType}
                  passwordFocus={passwordFocus}
                  setPasswordFocus={setPasswordFocus}
                />
                <FaLock
                  size={"20px"}
                  className="absolute left-[10px] top-[12px]"
                />
                <button
                  className="absolute right-[10px] top-[12px]"
                  onClick={(e) => showPasswordHandler(e)}
                >
                  {!showPassword ? (
                    <FaRegEye size={"20px"} />
                  ) : (
                    <FaRegEyeSlash size={"20px"} />
                  )}
                </button>
              </div>
              <button
                type="submit"
                className="rounded-md border border-lightPurple bg-lightPurple px-4 py-2 hover:bg-purple-500 disabled:cursor-not-allowed disabled:border-gray-500 disabled:bg-gray-500"
                disabled={
                  !validator.isEmail(values.email) ||
                  !validator.isStrongPassword(values.password) ||
                  isLoginLoading ||
                  isSignupLoading
                }
              >{`${formType === "login" ? "Log in" : "Sign up"}`}</button>
              {/* error message */}
              {currentError && (
                <div className="rounded-sm border border-red-500 px-2 py-1 text-red-500">
                  {currentError}
                </div>
              )}
              {/* switch to login/singup */}
              <div className="flex items-center justify-center gap-2">
                <span>{`${formType === "login" ? "Don't have an account? " : "Already have an account? "}`}</span>
                <button
                  onClick={(e) => changeFormTypeHandler(e)}
                >{`${formType === "login" ? "Sign up" : "Log in"}`}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthModal;

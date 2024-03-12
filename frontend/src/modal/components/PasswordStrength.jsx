import React, { useState, useEffect } from "react";
import validator from "validator";

const strengthLabels = ["weak", "medium", "medium", "strong"];

export const PasswordStrength = ({
  placeholder,
  values,
  password,
  setValues,
  showPassword,
  resetFormData,
  formType,
  passwordFocus,
  setPasswordFocus,
}) => {
  const [strength, setStrength] = useState("");

  useEffect(() => {
    return () => {
      // reset the strength when the component unmounts
      setStrength("");
    };
  }, []);

  const getStrength = (password) => {
    let indicator = -1;

    if (/[a-z]/.test(password)) indicator++;
    if (/[A-Z]/.test(password)) indicator++;
    if (/\d/.test(password)) indicator++;
    if (/[^a-zA-Z0-9]/.test(password)) indicator++;

    if (password.length >= 16) indicator++;

    return strengthLabels[indicator];
  };

  const handleChange = (e) => {
    setValues({ ...values, password: e.target.value });
    if (formType === "signup") {
      setStrength(getStrength(e.target.value));
    }
  };

  return (
    <>
      <input
        name="password"
        id="userPassword"
        spellCheck="false"
        value={password}
        className={`control ${values.password.length > 0 && !passwordFocus && !validator.isStrongPassword(values.password) ? "border border-red-500" : ""}`}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        onChange={handleChange}
        autoComplete="new-password"
        onFocus={
          values.password.length === 0 ? () => setPasswordFocus(true) : null
        }
        onBlur={() => setPasswordFocus(false)}
      />
      <span className="text-sm text-red-500">
        {values.password.length > 0 &&
        !passwordFocus &&
        !validator.isStrongPassword(values.password)
          ? "Password is not strong enough"
          : null}
      </span>
      {formType === "signup" && values.password.length > 0 && (
        <div>
          <div
            className={`bars mt-2 flex h-[6px] w-full items-center gap-2 rounded-md bg-sepiaPurple`}
          >
            <div
              className={`h-[6px] rounded-md transition-all ${strength === "weak" ? "w-[33%] bg-[#e24c71]" : strength === "medium" ? "w-[66%] bg-[#f39845]" : strength === "strong" ? "w-full bg-[#57c558]" : "w-[0%] bg-sepiaPurple"}`}
            ></div>
          </div>
          <div className="strength h-[30px] text-left capitalize">
            {strength && `${strength} password`}
          </div>
        </div>
      )}
    </>
  );
};

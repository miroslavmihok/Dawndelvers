import React, { useState } from "react";

const strengthLabels = ["weak", "medium", "medium", "strong"];

export const PasswordStrength = ({ placeholder, values, setValues }) => {
  const [strength, setStrength] = useState("");

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
    setStrength(getStrength(e.target.value));
  };

  return (
    <>
      <input
        name="password"
        id="userPassword"
        spellCheck="false"
        className="control"
        type="password"
        placeholder={placeholder}
        onChange={handleChange}
      />
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
    </>
  );
};

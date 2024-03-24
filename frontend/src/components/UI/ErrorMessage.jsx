import React from "react";

const ErrorMessage = ({ msg }) => {
  return (
    <span
      className="border-l-2 border-red-500 p-2"
      style={{
        background:
          "linear-gradient(to right, rgba(255, 75, 75, 0.15) 0%, rgba(255, 75, 75, 0.03))",
      }}
    >
      {msg}
    </span>
  );
};

export default ErrorMessage;

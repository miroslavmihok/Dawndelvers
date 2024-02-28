import React from "react";
import CurrencyFormat from "react-currency-format";

const formatter = (number, prefix) => {
  return (
    <CurrencyFormat
      value={number}
      displayType={"text"}
      thousandSeparator={true}
      prefix={prefix}
      decimalScale={2}
      fixedDecimalScale={true}
      renderText={(value) => <div>{value}</div>}
    />
  );
};

export default formatter;

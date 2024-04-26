import React, { createContext, useContext, useState } from "react";

export const HeaderContext = createContext();

export function useHeaderData() {
  return useContext(HeaderContext);
}

export function HeaderDataProvider({ children }) {
  // burger icon state - opened/closed on click of burger icon - closed on submenu click aswell
  const [isShown, setIsShown] = useState(false);
  const [isCurrencyVisible, setIsCurrencyVisible] = useState(false);
  const [currency, setIsCurrency] = useState({
    cur: "EUR",
    curSymbol: "€",
  });
  const [showDialog, setShowDialog] = useState(false);

  const formatter = (value, currencySymbol) => {
    let changedValue = value;

    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: currencySymbol,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(changedValue);
  };

  return (
    <HeaderContext.Provider
      value={{
        isShown,
        setIsShown,
        isCurrencyVisible,
        setIsCurrencyVisible,
        currency,
        setIsCurrency,
        showDialog,
        setShowDialog,
        formatter,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}

import React, { createContext, useContext, useState } from "react";

const HeaderContext = createContext();

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
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}

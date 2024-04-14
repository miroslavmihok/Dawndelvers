import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

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
  const [currentRate, setCurrentRate] = useState(1);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get(
          process.env.REACT_APP_RATES_URL +
            `?apikey=${process.env.REACT_APP_RATES_API_KEY}&base_currency=EUR&currencies=USD`,
        );

        setCurrentRate(response.data.data["USD"]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchExchangeRates();
  }, []);

  const formatter = (value, currencySymbol) => {
    let changedValue = value;

    if (currency.cur === "USD") {
      changedValue = changedValue * currentRate;
    }

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

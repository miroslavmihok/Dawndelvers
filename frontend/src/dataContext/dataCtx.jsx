import React, { createContext, useContext, useState } from "react";
import { products } from "../Data/products";

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [isCurrencyVisible, setIsCurrencyVisible] = useState(false);
  const [currency, setIsCurrency] = useState({
    cur: "EUR",
    curSymbol: "€",
  });
  const [currentGame, setCurrentGame] = useState(products[0]);
  const [currentGameTitle, setCurrentGameTitle] = useState(products[0].title);
  const [currentCategory, setCurrentCategory] = useState("All Categories");

  const toggleScroll = () => {
    const body = document.body;
    body.classList.toggle("prevent-scrolling");
  };

  return (
    <DataContext.Provider
      value={{
        isCurrencyVisible,
        setIsCurrencyVisible,
        currency,
        setIsCurrency,
        currentGame,
        setCurrentGame,
        currentGameTitle,
        setCurrentGameTitle,
        currentCategory,
        setCurrentCategory,
        toggleScroll,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

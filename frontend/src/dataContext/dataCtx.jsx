import React, { createContext, useContext, useState } from "react";
import { products } from "../Data/products";

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currency, setIsCurrency] = useState({
    cur: "Euro",
    curSymbol: "€",
  });
  const [currentGame, setCurrentGame] = useState(products[0].title);
  const [currentCategory, setCurrentCategory] = useState("All Categories");

  return (
    <DataContext.Provider
      value={{
        isVisible,
        setIsVisible,
        currency,
        setIsCurrency,
        currentGame,
        setCurrentGame,
        currentCategory,
        setCurrentCategory,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

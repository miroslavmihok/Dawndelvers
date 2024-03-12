import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [currentCategory, setCurrentCategory] = useState("All Categories");
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isGameListVisible, setIsGameListVisible] = useState(false);

  const currentGameHandler = () => {
    setCurrentCategory("All Categories");
    setIsGameListVisible(false);
    setIsNavbarVisible(false);
  };

  return (
    <DataContext.Provider
      value={{
        isNavbarVisible,
        setIsNavbarVisible,
        currentCategory,
        setCurrentCategory,
        isGameListVisible,
        setIsGameListVisible,
        currentGameHandler,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

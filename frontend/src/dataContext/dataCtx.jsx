import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("All Categories");
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isGameListVisible, setIsGameListVisible] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error);
      }
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  const currentGameHandler = () => {
    setCurrentCategory("All Categories");
    toggleDesktopMenuHandler();
    setIsNavbarVisible(false);
  };

  // clicks outside game List
  const toggleDesktopMenuHandler = () => {
    setIsGameListVisible((prevIsGameListVisible) => !prevIsGameListVisible);
  };

  return (
    <DataContext.Provider
      value={{
        isCurrencyVisible,
        setIsCurrencyVisible,
        currency,
        setIsCurrency,
        isLoading,
        setIsLoading,
        error,
        setError,
        isNavbarVisible,
        setIsNavbarVisible,
        currentCategory,
        setCurrentCategory,
        isGameListVisible,
        setIsGameListVisible,
        products,
        currentGameHandler,
        toggleDesktopMenuHandler,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

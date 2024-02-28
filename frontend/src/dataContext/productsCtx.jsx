import React, { createContext, useContext } from "react";
import useFetch from "../hooks/useFetch";

const ProductsContext = createContext();

export function useProductsData() {
  return useContext(ProductsContext);
}

export function ProductsDataProvider({ children }) {
  const { isLoading, error, data } = useFetch(`/products`);

  return (
    <ProductsContext.Provider
      value={{
        isLoading,
        error,
        products: data,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

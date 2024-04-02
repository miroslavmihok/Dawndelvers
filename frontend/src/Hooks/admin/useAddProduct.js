import { useState } from "react";
import { makeRequest } from "../../makeRequest";

export const useAddProduct = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [addedProduct, setAddedProduct] = useState({});

  const addProduct = async (details) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await makeRequest.post(
        `${process.env.REACT_APP_PRODUCTS_URL}`,
        { ...details },
        {
          withCredentials: true,
        },
      );
      const data = response.data;
      if (response.status === 201) {
        setAddedProduct(data);
      }
    } catch (error) {
      setError(error?.response?.data?.message || error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    addProduct,
    isAddingProductLoading: isLoading,
    addingProductError: error,
    addedProduct,
  };
};

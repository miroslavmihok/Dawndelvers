import { useState } from "react";
import { makeRequest } from "../../makeRequest";

export const useRemoveProduct = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const removeProduct = async (id) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await makeRequest.delete(
        `${process.env.REACT_APP_PRODUCTS_URL}/${id}`,
        {
          withCredentials: true,
        },
      );
      const data = response.data;
      if (response.status === 200) {
        return data;
      }
    } catch (error) {
      setError(error?.response?.data?.message || error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    removeProduct,
    isProductRemoveLoading: isLoading,
    productRemoveError: error,
  };
};

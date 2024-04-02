import { useState } from "react";
import { makeRequest } from "../../makeRequest";

export const useUpdateProduct = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState({});

  const updateProduct = async (details) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await makeRequest.put(
        `${process.env.REACT_APP_PRODUCTS_URL}`,
        {
          ...details,
        },
        {
          withCredentials: true,
        },
      );
      const data = response.data;
      if (response.status === 200) {
        setUpdatedProduct(data);
        return data;
      }
    } catch (error) {
      setError(error?.response?.data?.message || error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    updateProduct,
    isProductUpdateLoading: isLoading,
    productUpdateError: error,
    updatedProduct,
  };
};

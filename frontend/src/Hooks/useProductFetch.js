import { useState, useEffect, useCallback } from "react";
import { makeRequest } from "../makeRequest";

const useProductFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  const fetchProduct = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await makeRequest.get(url, {
        withCredentials: true,
      });
      setData(response.data);
    } catch (error) {
      setError(error?.response?.data?.message || error?.message);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchProduct();
  }, [url, fetchProduct]);

  const refetchProduct = () => {
    fetchProduct();
  };

  return {
    refetchProduct,
    isProductLoading: isLoading,
    productError: error,
    product: data,
  };
};

export default useProductFetch;

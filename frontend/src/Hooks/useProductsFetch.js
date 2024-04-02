import { useState, useEffect, useCallback } from "react";
import { makeRequest } from "../makeRequest";

const useProductsFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await makeRequest.get(url);
      setData(response.data);
    } catch (error) {
      setError(error?.response?.data?.message || error?.message);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchProducts();
  }, [url, fetchProducts]);

  const refetchProducts = () => {
    fetchProducts();
  };

  return {
    refetchProducts,
    areProductsLoading: isLoading,
    productsError: error,
    products: data,
  };
};

export default useProductsFetch;

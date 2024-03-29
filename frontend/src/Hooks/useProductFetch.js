import { useState, useEffect } from "react";
import { makeRequest } from "../makeRequest";

const useProductFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await makeRequest.get(url);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [url]);

  return { isProductLoading: isLoading, productError: error, product: data };
};

export default useProductFetch;

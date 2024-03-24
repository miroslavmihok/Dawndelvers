import { useState, useEffect } from "react";
import { makeRequest } from "../makeRequest";

const useGameFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
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
    };
    fetchProducts();
  }, [url]);

  return { isGameLoading: isLoading, gameError: error, game: data };
};

export default useGameFetch;

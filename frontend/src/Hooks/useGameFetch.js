import { useState, useEffect } from "react";
import { makeRequest } from "../makeRequest";

const useGameFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await makeRequest.get(url);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching game:", error);
        setError(error);
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [url]);

  return { isGameLoading: isLoading, gameError: error, game: data };
};

export default useGameFetch;

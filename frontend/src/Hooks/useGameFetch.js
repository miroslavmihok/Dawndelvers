import { useState, useEffect, useCallback } from "react";
import { makeRequest } from "../makeRequest";

const useGameFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  const fetchGame = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await makeRequest.get(url, { withCredentials: true });
      setData(response.data);
    } catch (error) {
      setError(error?.response?.data?.message || error?.message);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchGame();
  }, [url, fetchGame]);

  const refetchGame = () => {
    fetchGame();
  };

  return {
    refetchGame,
    isGameLoading: isLoading,
    gameError: error,
    game: data,
  };
};

export default useGameFetch;

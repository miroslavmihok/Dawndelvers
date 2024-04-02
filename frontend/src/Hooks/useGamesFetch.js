import { useState, useEffect, useCallback } from "react";
import { makeRequest } from "../makeRequest";

const useGamesFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchGames = useCallback(async () => {
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
    fetchGames();
  }, [url, fetchGames]);

  const refetchGames = () => {
    fetchGames();
  };

  return {
    refetchGames,
    areGamesLoading: isLoading,
    gamesError: error,
    games: data,
  };
};

export default useGamesFetch;

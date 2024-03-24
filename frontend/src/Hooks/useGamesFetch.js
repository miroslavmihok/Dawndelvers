import { useState, useEffect } from "react";
import { makeRequest } from "../makeRequest";

const useGamesFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await makeRequest.get(
          `${process.env.REACT_APP_GAMES_URL}`,
        );
        setData(response.data);
      } catch (error) {
        setError(error?.response?.data?.message || error?.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchGames();
  }, []);

  return { areGamesLoading: isLoading, gamesError: error, games: data };
};

export default useGamesFetch;

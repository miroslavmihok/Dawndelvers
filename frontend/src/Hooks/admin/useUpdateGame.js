import { useState } from "react";
import { makeRequest } from "../../makeRequest";

export const useUpdateGame = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [updatedGame, setUpdatedGame] = useState({});

  const updateGame = async ({ id, title, url, bg, logo }) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await makeRequest.put(
        `${process.env.REACT_APP_GAMES_URL}`,
        { id, title, url, bg, logo },
        {
          withCredentials: true,
        },
      );
      const data = response.data;
      if (response.status === 200) {
        setUpdatedGame(data);
        return data;
      }
    } catch (error) {
      setError(error?.response?.data?.message || error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    updateGame,
    isGameUpdateLoading: isLoading,
    gameUpdateError: error,
    updatedGame,
  };
};

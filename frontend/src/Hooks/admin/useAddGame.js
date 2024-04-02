import { useState } from "react";
import { makeRequest } from "../../makeRequest";

export const useAddGame = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [addedGame, setAddedGame] = useState({});

  const addGame = async ({ title, url, bg, logo }) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await makeRequest.post(
        `${process.env.REACT_APP_GAMES_URL}`,
        { title, url, bg, logo },
        {
          withCredentials: true,
        },
      );
      const data = response.data;
      if (response.status === 201) {
        setAddedGame(data);
      }
    } catch (error) {
      setError(error?.response?.data?.message || error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    addGame,
    isAddingGameLoading: isLoading,
    addingGameError: error,
    addedGame,
  };
};

import { useState } from "react";
import { makeRequest } from "../../makeRequest";

export const useRemoveGame = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const removeGame = async (id) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await makeRequest.delete(
        `${process.env.REACT_APP_GAMES_URL}/${id}`,
        {
          withCredentials: true,
        },
      );
      const data = response.data;
      if (response.status === 200) {
        return data;
      }
    } catch (error) {
      setError(error?.response?.data?.message || error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    removeGame,
    isGameRemoveLoading: isLoading,
    gameRemoveError: error,
  };
};

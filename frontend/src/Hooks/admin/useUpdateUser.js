import { useState } from "react";
import { makeRequest } from "../../makeRequest";

export const useUpdateUser = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({});

  const updateUser = async (id, details) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await makeRequest.put(
        `${process.env.REACT_APP_USERS_URL}/${id}`,
        {
          ...details,
        },
        {
          withCredentials: true,
        },
      );
      const data = response.data;
      if (response.status === 200) {
        setUpdatedUser(data);
        return data;
      }
    } catch (error) {
      setError(error?.response?.data?.message || error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    updateUser,
    isUserUpdateLoading: isLoading,
    userUpdateError: error,
    updatedUser,
  };
};

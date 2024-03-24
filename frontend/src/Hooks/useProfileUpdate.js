import { useState } from "react";
import { makeRequest } from "../makeRequest";

export const useProfileUpdate = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [updatedUserProfile, setUpdatedUserProfile] = useState({});

  const updateProfile = async ({ name, email, password }) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await makeRequest.put(
        `${process.env.REACT_APP_USER_PROFILE}`,
        { name, email, password },
        {
          withCredentials: true,
        },
      );
      const data = response.data;
      if (response.status === 200) {
        setUpdatedUserProfile(data);
        return data;
      }
    } catch (error) {
      setError(error?.response?.data?.message || error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    updateProfile,
    isProfileLoading: isLoading,
    profileError: error,
    updatedUserProfile,
  };
};

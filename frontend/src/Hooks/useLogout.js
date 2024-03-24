import { useState } from "react";
import { useAuthData } from "../context/authCtx";
import { makeRequest } from "../makeRequest";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthData();

  const logout = async () => {
    try {
      const response = await makeRequest.post(
        `${process.env.REACT_APP_USER_LOGOUT}`,
        null,
        {
          withCredentials: true,
        },
      );
      if (response.status === 200) {
        dispatch({ type: "LOGOUT" });
      }
    } catch (error) {
      setError(error?.response?.data?.message || error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { logout, isLogoutLoading: isLoading, logoutError: error };
};

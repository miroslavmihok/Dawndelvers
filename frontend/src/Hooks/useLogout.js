import { useState } from "react";
import axios from "axios";
import { useAuthData } from "../context/authCtx";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthData();

  const logout = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_USER_LOGOUT}`,
        null,
        {
          withCredentials: true,
        },
      );
      // Handle success
      if (response.status === 200) {
        //remove user from storage
        localStorage.removeItem("userItem");

        //dispatch logout action
        dispatch({ type: "LOGOUT" });
      }
    } catch (error) {
      console.log(error);
      setError(error?.response?.data?.message || "An error occured");
    } finally {
      setIsLoading(false);
    }
  };

  return { logout, isLogoutLoading: isLoading, logoutError: error };
};

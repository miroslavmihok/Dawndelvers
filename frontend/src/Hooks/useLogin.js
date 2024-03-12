import { useState } from "react";
import axios from "axios";
import { useAuthData } from "../context/authCtx";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthData();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_USER_LOGIN}`,
        { email: email, password: password },
        {
          withCredentials: true,
        },
      );
      const data = response.data;
      // Handle success
      if (response.status === 200) {
        // Save the user to local storage
        localStorage.setItem("userItem", JSON.stringify(data));

        // Update the auth context
        dispatch({ type: "LOGIN", payload: data });
      }
    } catch (error) {
      console.log("in useLogin:", error);
      setError(error?.response?.data?.message || "An error occured");
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoginLoading: isLoading, loginError: error };
};

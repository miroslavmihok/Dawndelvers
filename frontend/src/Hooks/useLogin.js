import { useState } from "react";
import { makeRequest } from "../makeRequest";
import { useAuthData } from "../context/authCtx";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthData();

  const login = async ({ email, password }) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await makeRequest.post(
        `${process.env.REACT_APP_USER_LOGIN}`,
        { email: email, password: password },
        {
          withCredentials: true,
        },
      );
      const data = response.data;
      if (response.status === 200) {
        dispatch({ type: "LOGIN", payload: data });
      }
    } catch (error) {
      setError(error?.response?.data?.message || error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoginLoading: isLoading, loginError: error };
};

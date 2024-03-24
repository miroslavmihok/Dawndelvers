import { useState } from "react";
import { useAuthData } from "../context/authCtx";
import { makeRequest } from "../makeRequest";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthData();

  const signup = async ({ name, email, password }) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await makeRequest.post(
        `${process.env.REACT_APP_USER_SIGNUP}`,
        { name: name, email: email, password: password },
        {
          withCredentials: true,
        },
      );
      const data = response.data;
      if (response.status === 201) {
        dispatch({ type: "LOGIN", payload: data });
      }
    } catch (error) {
      setError(error?.response?.data?.message || error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, isSignupLoading: isLoading, signupError: error };
};

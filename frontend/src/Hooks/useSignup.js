import { useState } from "react";
import { useAuthData } from "../context/authCtx";
import { makeRequest } from "../makeRequest";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthData();

  const signup = async (name, email, password) => {
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
      // Handle success
      if (response.status === 201) {
        // Save the user to local storage
        localStorage.setItem("userItem", JSON.stringify(data));

        // Update the auth context
        dispatch({ type: "LOGIN", payload: data });
      }
    } catch (error) {
      console.log(error);
      setError(error?.response?.data?.message || "An error occured");
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, isSignupLoading: isLoading, signupError: error };
};

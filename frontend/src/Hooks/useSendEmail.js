import { useState } from "react";
import { makeRequest } from "../makeRequest";

export const useSendEmail = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (details) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await makeRequest.post(
        `${process.env.REACT_APP_EMAILS_URL}`,
        details,
        { withCredentials: true },
      );
      console.log(response);
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
    sendEmail,
    isLoading,
    error,
  };
};

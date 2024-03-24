import { useState } from "react";
import { makeRequest } from "../makeRequest";

export const usePayOrder = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  const payOrder = async ({ id, details }) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await makeRequest.put(
        `${process.env.REACT_APP_ORDERS_URL}/${id}/pay`,
        { ...details },
        {
          withCredentials: true,
        },
      );
      const data = response.data;
      if (response.status === 200) {
        setData(data);
      }
    } catch (error) {
      setError(error?.response?.data?.message || error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    payOrder,
    isPaymentLoading: isLoading,
    paymentError: error,
    updatedOrder: data,
  };
};

import { useState } from "react";
import { makeRequest } from "../makeRequest";

export const useOrder = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [createdOrder, setCreatedOrder] = useState({});

  const createOrderInDb = async (order) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await makeRequest.post(
        `${process.env.REACT_APP_ORDERS_URL}`,
        { ...order },
        {
          withCredentials: true,
        },
      );
      const data = response.data;
      if (response.status === 201) {
        setCreatedOrder(data);
      }
    } catch (error) {
      setError(error?.response?.data?.message || error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createOrderInDb,
    isOrderLoading: isLoading,
    orderError: error,
    createdOrder,
  };
};

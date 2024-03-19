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
      // Handle success
      if (response.status === 201) {
        setCreatedOrder(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
      setError(error?.response?.data?.message || "An error occured");
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

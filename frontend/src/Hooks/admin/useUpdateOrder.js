import { useState } from "react";
import { makeRequest } from "../../makeRequest";

export const useUpdateOrder = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [updatedOrder, setUpdatedOrder] = useState({});

  const updateOrder = async (id) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await makeRequest.put(
        `${process.env.REACT_APP_ORDERS_URL}/${id}${process.env.REACT_APP_DELIVER_URL}`,
        null,
        { withCredentials: true },
      );
      const data = response.data;
      if (response.status === 200) {
        setUpdatedOrder(data);
        return data;
      }
    } catch (error) {
      setError(error?.response?.data?.message || error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    updateOrder,
    isOrderUpdateLoading: isLoading,
    orderUpdateError: error,
    updatedOrder,
  };
};

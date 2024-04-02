import { useState, useEffect, useCallback } from "react";
import { makeRequest } from "../../makeRequest";

const useGetAllOrders = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchOrders = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await makeRequest.get(
        `${process.env.REACT_APP_ORDERS_URL}`,
        { withCredentials: true },
      );
      setData(response.data);
    } catch (error) {
      setError(error?.response?.data?.message || error?.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const refetchOrders = () => {
    fetchOrders();
  };

  return {
    refetchOrders,
    areOrdersLoading: isLoading,
    ordersError: error,
    orders: data,
  };
};

export default useGetAllOrders;

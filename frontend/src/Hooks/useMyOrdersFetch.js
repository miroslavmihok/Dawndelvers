import { useState, useEffect } from "react";
import { makeRequest } from "../makeRequest";

const useMyOrdersFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await makeRequest.get(
          `${process.env.REACT_APP_ORDERS_URL}/myorders`,
          {
            withCredentials: true,
          },
        );
        setData(response.data);
      } catch (error) {
        setError(error?.response?.data?.message || error?.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchOrders();
  }, []);

  return {
    areOrdersLoading: isLoading,
    ordersError: error,
    orders: data,
  };
};

export default useMyOrdersFetch;

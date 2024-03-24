import { useState, useEffect, useCallback } from "react";
import { makeRequest } from "../makeRequest";

const useOrderFetch = (id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  const fetchOrder = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await makeRequest.get(
        `${process.env.REACT_APP_ORDERS_URL}/${id}`,
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
  }, [id]);

  useEffect(() => {
    fetchOrder();
  }, [id, fetchOrder]);

  const refetchOrder = () => {
    fetchOrder();
  };

  return {
    isOrderFetchLoading: isLoading,
    orderFetchError: error,
    order: data,
    refetchOrder,
  };
};

export default useOrderFetch;

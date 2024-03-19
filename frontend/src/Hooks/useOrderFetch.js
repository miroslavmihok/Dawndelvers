import { useState, useEffect } from "react";
import { makeRequest } from "../makeRequest";

const useOrderFetch = (id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchOrder = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await makeRequest.get(
          `${process.env.REACT_APP_ORDERS_URL}/${id}`,
        );
        setData(response.data);
      } catch (error) {
        console.log("Error fetching order:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchOrder();
  }, [id]);

  return {
    isOrderFetchLoading: isLoading,
    orderFetchError: error,
    order: data,
  };
};

export default useOrderFetch;

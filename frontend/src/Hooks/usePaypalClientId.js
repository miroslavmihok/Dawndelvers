import { useState, useEffect } from "react";
import { makeRequest } from "../makeRequest";

const usePaypalClientId = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPaypalData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await makeRequest.get(
          `${process.env.REACT_APP_PAYPAL_URL}`,
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPaypalData();
  }, []);

  return { isPaypalLoading: isLoading, paypalError: error, paypal: data };
};

export default usePaypalClientId;

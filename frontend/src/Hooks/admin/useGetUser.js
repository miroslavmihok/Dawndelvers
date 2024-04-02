import { useState, useEffect, useCallback } from "react";
import { makeRequest } from "../../makeRequest";

const useGetUser = (id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchUser = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await makeRequest.get(
        `${process.env.REACT_APP_USERS_URL}/${id}`,
        { withCredentials: true },
      );
      setData(response.data);
    } catch (error) {
      setError(error?.response?.data?.message || error?.message);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const refetchUser = () => {
    fetchUser();
  };

  return {
    refetchUser,
    isUserLoading: isLoading,
    userError: error,
    user: data,
  };
};

export default useGetUser;

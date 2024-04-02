import { useState, useEffect, useCallback } from "react";
import { makeRequest } from "../../makeRequest";

const useGetAllUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchUsers = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await makeRequest.get(
        `${process.env.REACT_APP_USERS_URL}`,
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
    fetchUsers();
  }, [fetchUsers]);

  const refetchUsers = () => {
    fetchUsers();
  };

  return {
    refetchUsers,
    areUsersLoading: isLoading,
    usersError: error,
    users: data,
  };
};

export default useGetAllUsers;

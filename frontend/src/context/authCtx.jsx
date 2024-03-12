import React, { createContext, useContext, useReducer, useEffect } from "react";

const AuthCtx = createContext();

export const useAuthData = () => {
  return useContext(AuthCtx);
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { userItem: action.payload };
    case "LOGOUT":
      return { userItem: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    userItem: null,
  });

  console.log(state);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userItem"));
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  return (
    <AuthCtx.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthCtx.Provider>
  );
};

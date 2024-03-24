import React, { createContext, useContext, useReducer, useEffect } from "react";

const AuthCtx = createContext();

export const useAuthData = () => {
  return useContext(AuthCtx);
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("userItem", JSON.stringify(action.payload));
      return { userItem: action.payload };
    case "LOGOUT":
      localStorage.removeItem("userItem");
      return { userItem: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const initialState = localStorage.getItem("userItem")
    ? { userItem: JSON.parse(localStorage.getItem("userItem")) }
    : { userItem: null };

  const [state, dispatch] = useReducer(authReducer, initialState);

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

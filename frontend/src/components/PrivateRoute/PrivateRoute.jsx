import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuthData } from "../../context/authCtx";

function PrivateRoute() {
  const { userItem } = useAuthData();

  return userItem ? <Outlet /> : <Navigate to="/cart" replace />;
}

export default PrivateRoute;

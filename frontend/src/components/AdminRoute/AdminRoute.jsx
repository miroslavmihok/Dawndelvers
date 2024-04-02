import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuthData } from "../../context/authCtx";

function AdminRoute() {
  const { userItem } = useAuthData();

  return userItem && userItem.isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace />
  );
}

export default AdminRoute;

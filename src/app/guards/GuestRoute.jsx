// GuestRoute.jsx
import React from "react";
import { Route, Navigate } from "react-router-dom";

const GuestRoute = ({ children }) => {
  // Check if the user is authenticated
  const isAuthenticated = localStorage.getItem("isLog");
  const logUser = JSON.parse(localStorage.getItem("logUser"));

  if (!isAuthenticated) {
    return children;
  } else if (isAuthenticated && logUser.role_id === 2) {
    return <Navigate to="/profile/candidat" />;
  }
  else {
    return <Navigate to="/" />;
  }
};

export default GuestRoute;

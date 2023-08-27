// GuestRoute.jsx
import React from "react";
import { Route, Navigate } from "react-router-dom";

const GuestRoute = ({ children }) => {
  // Check if the user is authenticated
  const isAuthenticated = localStorage.getItem("isLog");

  if (!isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default GuestRoute;

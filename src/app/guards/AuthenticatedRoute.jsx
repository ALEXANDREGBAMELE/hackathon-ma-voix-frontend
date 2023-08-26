// AuthenticatedRoute.jsx
import React from "react";
import { Route, Navigate } from "react-router-dom";

const AuthenticatedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isLog");
  
  if (isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default AuthenticatedRoute;

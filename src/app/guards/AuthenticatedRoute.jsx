/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// AuthenticatedRoute.jsx
import React from "react";
import { Route, Navigate } from "react-router-dom";

const AuthenticatedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isLog");
  const logUser = JSON.parse(localStorage.getItem("logUser"));
  if (isAuthenticated ) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default AuthenticatedRoute;

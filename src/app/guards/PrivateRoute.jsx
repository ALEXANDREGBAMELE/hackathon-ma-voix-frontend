import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ allowedRoles, element }) => {
  const isLogged = JSON.parse(localStorage.getItem("isLog"));
  const logUser = JSON.parse(localStorage.getItem("logUser"));

  if (isLogged && allowedRoles.includes(logUser.role_id)) {
    return element
  } else {
    return <Navigate to="/login" />;
  }
}


export default PrivateRoute;
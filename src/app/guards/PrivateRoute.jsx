import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ allowedRoles, component: Component, ...rest }) => {
  const user = JSON.parse(localStorage.getItem("logUser"));

  if (!user || !allowedRoles.includes(user.role_id)) {
    // Si l'utilisateur n'est pas connecté ou n'a pas le rôle autorisé
    return <Navigate to="/login" />; // Rediriger vers la page de connexion
  }

  return <Route {...rest} element={Component} />;
};

export default PrivateRoute;

import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("logUser");
    localStorage.removeItem("token");
    localStorage.removeItem("isLog");
    localStorage.clear();
    navigate("/login");
  };

  return <button onClick={handleLogout}>Se deconnecter</button>;
}

export default Logout;

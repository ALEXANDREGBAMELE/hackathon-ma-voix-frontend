import React from "react";
import { useNavigate } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons"; // Import de l'icône de déconnexion d'Ant Design

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("logUser");
    localStorage.removeItem("token");
    localStorage.removeItem("isLog");
    localStorage.clear();
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        border: "none",
        cursor: "pointer",
        color: "#1890ff", 
        fontSize: "16px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <LogoutOutlined style={{ marginRight: "6px" }} /> Se déconnecter
    </button>
  );
}

export default Logout;

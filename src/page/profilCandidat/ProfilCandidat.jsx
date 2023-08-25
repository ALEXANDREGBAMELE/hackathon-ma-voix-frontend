
import React, { useState } from "react";
import SideBarProfilCandidat from "./SideBarProfilCandidat";
import NavbarProfilCandidat from "./NavBarProfilCandidat";
import Dashboard from "./MiniDashBoard";
import NotificationCandidat from "./NotificationCandidat";
function ProfilCandidat() {


    
  const [currentPage, setCurrentPage] = useState("dashboard"); // Utilisez un état pour suivre la page actuelle

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;
      case "programme":
        return <Programme />;
      case "notification":
        return <NotificationCandidat />;
      default:
        return null;
    }
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="side-bar" style={{ backgroundColor: "#e0e0e0", width: "20%" }}>
          <SideBarProfilCandidat />
        </div>
        <div className="right-container" style={{ backgroundColor: "", width: "80%" }}>
          <div className="navbar">
            <NavbarProfilCandidat setCurrentPage={setCurrentPage} />
          </div>
          <div>{renderPage()}</div> {/* Affiche la page en fonction de l'état */}
        </div>
      </div>
    </>
  );
}

export default ProfilCandidat;

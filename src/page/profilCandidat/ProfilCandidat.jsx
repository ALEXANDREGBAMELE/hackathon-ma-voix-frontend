import React, { useState } from "react";
import SideBarProfilCandidat from "./SideBarProfilCandidat";
import NavbarProfilCandidat from "./NavBarProfilCandidat";
// import TrendChart from "./GraphTendance";

function ProfilCandidat() {


    return (
        <>
            <div style={{ display: "flex", }}>
                <div className="side-bar" style={{backgroundColor:"#e0e0e0", width:"20%"}}>
                    <SideBarProfilCandidat />
                </div>
                <div className="right-container" style={{backgroundColor:"", width:"80%" }}>
                    <div className="navbar">
                        <NavbarProfilCandidat />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfilCandidat;

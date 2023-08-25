import React, { useState } from "react";
import { Button, Modal } from 'antd';
import CandidatPostForm from './CandidatPostForm';
import { NewsCard } from "../../components/candidatCard/NewsCard";
import NotificationCandidat from "./NotificationCandidat";
import ModificationProfilCandidat from "./modificationProfilCandidat";
import UserInfoCard from "./InfoUserCard";
import Dashboard from "./MiniDashBoard";
// import TrendChart from "./GraphTendance";

function ProfilCandidat() {
    const [select, setSelect] = useState("Programme");
    const [isProgrammeModalOpen, setIsProgrammeModalOpen] = useState(false);
    const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
    const [isParamettreModalOpen, setIsParamettreModalOpen] = useState(false);
    const [isResultatsModalOpen, setIsResultatsModalOpen] = useState(false);

    const handleProgrammeModalOpen = () => {
        setIsProgrammeModalOpen(true);
    };

    const handleNotificationModalOpen = () => {
        setIsNotificationModalOpen(true);
    };

    const handleParamettreModalOpen = () => {
        setIsParamettreModalOpen(true);
    };

    const handleResultatsModalOpen = () => {
        setIsResultatsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsProgrammeModalOpen(false);
        setIsNotificationModalOpen(false);
        setIsParamettreModalOpen(false);
        setIsResultatsModalOpen(false);
    };

    return (
        <>
            <div className="top-part">
                <UserInfoCard></UserInfoCard>
            </div>
            <div className="botton-part">
                <div className="container" style={{ display: "flex", backgroundColor: "white", justifyContent: "center", alignItems: "center", gap: "20px", paddingTop: "40px", paddingBot: "40px" }}>

                    {/* ... Autres parties de votre composant ... */}

                    <div className="card-button" style={{}} onClick={handleProgrammeModalOpen}>
                        {/* ... Bouton 1 ... */}
                        <div className="card-button" style={{}}>
                            <div style={{ border: "solid 2px green", height: "120px", width: "275px", padding: "10px", borderRadius: "10px", textAlign: "center", padding: "15px" }}><i class="fa-solid fa-bell" style={{ fontSize: "40px", color: "green" }}> </i> <br /><br /> <span style={{ fontSize: "24px" }}> Notification</span> </div>
                        </div>
                    </div>
                    <div className="card-button" style={{}} onClick={handleNotificationModalOpen}>
                        {/* ... Bouton 2 ... */}
                        <div className="card-button" style={{}}>
                            <div style={{ border: "solid 2px green", height: "120px", width: "275px", padding: "10px", borderRadius: "10px", textAlign: "center", padding: "15px" }}><i class="fa-solid fa-gear" style={{ fontSize: "40px", color: "green" }}> </i> <br /><br /> <span style={{ fontSize: "24px" }}> Voir les sondages</span> </div>
                        </div>
                    </div>
                    <div className="card-button" style={{}} onClick={handleParamettreModalOpen}>
                        {/* ... Bouton 3 ... */}
                        <div className="card-button" style={{}}>
                            <div style={{ border: "solid 2px green", height: "120px", width: "275px", padding: "10px", borderRadius: "10px", textAlign: "center", padding: "15px" }}><i class="fa-solid fa-gear" style={{ fontSize: "40px", color: "green" }}> </i> <br /><br /> <span style={{ fontSize: "24px" }}> Publier un programme</span> </div>
                        </div>
                    </div>
                    <div className="card-button" style={{}} onClick={handleResultatsModalOpen}>
                        {/* ... Bouton 4 ... */}
                        <div className="card-button" style={{}}>
                            <div style={{ border: "solid 2px green", height: "120px", width: "275px", padding: "10px", borderRadius: "10px", textAlign: "center", padding: "15px" }}><i class="fa-solid fa-gear" style={{ fontSize: "40px", color: "green" }}> </i> <br /><br /> <span style={{ fontSize: "24px" }}> Resultats</span> </div>
                        </div>
                    </div>



                    {/* ... Autres boutons et modals ... */}
                    <Modal title="Programme Modal" visible={isProgrammeModalOpen} onOk={handleModalClose} onCancel={handleModalClose} width={800}>

                        <NotificationCandidat />
                    </Modal>
                    <Modal title="Notification Modal" visible={isNotificationModalOpen} onOk={handleModalClose} onCancel={handleModalClose} width={800}>
                        <ModificationProfilCandidat />
                    </Modal>
                    <Modal title="Paramettre Modal" visible={isParamettreModalOpen} onOk={handleModalClose} onCancel={handleModalClose} width={800}>
                        <CandidatPostForm />
                    </Modal>
                    <Modal title="Resultats Modal" visible={isResultatsModalOpen} onOk={handleModalClose} onCancel={handleModalClose} width={800}>
                        {/* Contenu du modal des résultats */}
                    </Modal>
                </div>

                <div className="mini-dashboard">
                    <Dashboard />
                </div>
                <div className="graph-tendance">
                    {/* <TrendChart/> */}
                </div>
            </div>
        </>
    );
}

export default ProfilCandidat;

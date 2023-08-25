import { React, useState } from "react";
import { Modal } from "antd";
import CandidatPostForm from "./CandidatPostForm";

function ButtonActionProfilCandidat() {

    const [select, setSelect] = useState("Programme");
    const [isProgrammeModalOpen, setIsProgrammeModalOpen] = useState(false);
    const [isParamettreModalOpen, setIsParamettreModalOpen] = useState(false);
    const [isResultatsModalOpen, setIsResultatsModalOpen] = useState(false);

    const handleProgrammeModalOpen = () => {
        setIsProgrammeModalOpen(true);
    };

    const handleParamettreModalOpen = () => {
        setIsParamettreModalOpen(true);
    };

    const handleResultatsModalOpen = () => {
        setIsResultatsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsProgrammeModalOpen(false);
        setIsParamettreModalOpen(false);
        setIsResultatsModalOpen(false);
    };
    return (
        <>
            <div className="botton-part">
                <div className="container" style={{ justifyContent: "center", alignItems: "center", paddingTop: "40px", paddingBot: "40px", marginLeft: "10px" }}>

                    {/* ... Autres parties de votre composant ... */}


                    <div className="card-button" style={{}} onClick={handleResultatsModalOpen}>
                        {/* ... Bouton 2 ... */}
                        <div className="card-button" style={{ marginTop: "15px" }}>
                            <div style={{ border: "solid 2px green", height: "60px", width: "275px", padding: "10px", borderRadius: "10px", padding: "15px" }}><i class="fa-solid fa-gear" style={{ fontSize: "30px" }}> </i> <span style={{ fontSize: "24px" }}> Voir les sondages</span> </div>
                        </div>
                    </div>
                    <div className="card-button" style={{}} onClick={handleParamettreModalOpen}>
                        {/* ... Bouton 3 ... */}
                        <div className="card-button" style={{ marginTop: "15px" }}>
                            <div style={{ border: "solid 2px green", height: "60px", width: "275px", padding: "10px", borderRadius: "10px", padding: "15px" }}><i class="fa-solid fa-gear" style={{ fontSize: "30px" }}> </i> <span style={{ fontSize: "24px" }}> Publier Programme</span> </div>
                        </div>
                    </div>
                    <div className="card-button" style={{}} onClick={handleProgrammeModalOpen}>
                        {/* ... Bouton 4 ... */}
                        <div className="card-button" style={{ marginTop: "15px" }}>
                            <div style={{ border: "solid 2px green", height: "60px", width: "275px", padding: "10px", borderRadius: "10px", padding: "15px" }}><i class="fa-solid fa-gear" style={{ fontSize: "30px" }}> </i> <span style={{ fontSize: "24px" }}> Resultats</span> </div>
                        </div>
                    </div>

                    <div className="card-button" style={{}} onClick={handleResultatsModalOpen}>
                        {/* ... Bouton 4 ... */}
                        <div className="card-button" style={{ marginTop: "170px" }}>
                            <div style={{ height: "60px", width: "275px", padding: "10px", borderRadius: "10px", padding: "15px" }}><i class="fa-solid fa-gear" style={{ fontSize: "30px" }}> </i> <span style={{ fontSize: "24px" }}> Parametre</span> </div>
                        </div>
                    </div>



                    {/* ... Autres boutons et modals ... */}

                    <Modal title="Programme Modal" visible={isProgrammeModalOpen} onOk={handleModalClose} onCancel={handleModalClose} width={800}>
                        
                    </Modal>
                    <Modal title="Paramettre Modal" visible={isParamettreModalOpen} onOk={handleModalClose} onCancel={handleModalClose} width={800}>
                        <CandidatPostForm />
                    </Modal>
                    <Modal title="Resultats Modal" visible={isResultatsModalOpen} onOk={handleModalClose} onCancel={handleModalClose} width={800}>
                        {/* Contenu du modal des résultats */}
                    </Modal>
                </div>
            </div>
        </>
    );
}
export default ButtonActionProfilCandidat;
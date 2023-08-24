import React, { useState } from "react";
import { ShareAltOutlined } from '@ant-design/icons';
import { Button, Radio, Space, Divider, Select, Result } from 'antd';
import CandidatPostForm from './CandidatPostForm';
import { NewsCard } from "../../components/candidatCard/NewsCard";
import NotificationCandidat from "./NotificationCandidat";
NotificationCandidat
function ProfilCandidat() {
    const [select, setSelect] = useState("Post");

    const handleClick = (name) => {
        setSelect(name);
    };

    const clicked = (name) => {
        setSelect(name);
        handleClick(name);
    };

    const buttonAction = [
        {
            name: "Post",
            id: 1,
            page: <NewsCard />,
        },
        {
            name: "Programme",
            id: 2,
            page: <CandidatPostForm />,
        },
        {
            name: "Notification",
            id: 3,
            page: <NotificationCandidat />,
        },
        
    ];

    return (
        <div className="container" style={{ display: "flex", gridTemplateColumns: "1fr 1fr", gap: "5rem", height: "calc(100vh - 4rem)" }}>
            <div className="left-part" style={{ width: "20rem", marginTop: "11px" }}>
                <div className="top" style={{ borderRadius: "15px", backgroundColor: "white" }}>
                    <div style={{textAlign:"center"}}>
                        <img src="https://cotedivoirenews.ci/wp-content/uploads/2019/02/Jean-Marc-Yace-1.jpeg" alt="" style={{ borderRadius: "100%", height: "100px", width: "100px" }} />
                    </div>
                    <div className="information-personnelle" style={{textAlign:"center"}}>
                        <h1>Yace Jean-Marc</h1>
                        <h3 style={{color:"blue"}}>yacejeanmarc@gmail.com</h3>
                        <h2 style={{color:"green"}}>PDCI</h2>
                    </div>
                </div>
                <div className="bottom" style={{ borderRadius: "15px", backgroundColor: "white", marginTop: "15px", height:"300px" }}>
                    <div className="liste-commune" style={{textAlign:"center"}}>
                    <h1 >Actions</h1>
                        {buttonAction.map((item) => (
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    flexWrap: "nowrap",
                                }}
                                key={item.id}
                                className="buttonAction"
                            >
                                <div
                                    onClick={() => clicked(item.name)}
                                    className={
                                        select === item.name
                                            ? "butomFillSecondary"
                                            : "butomAoutlin"
                                    }
                                    style={{ width: "6.5rem" }}
                                >
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        ))}
                    <button>Paramettre</button>
                    </div>
                </div>
            </div>
            <div className="right-part" style={{}}>
                {/* Affichage de la page correspondant à l'élément sélectionné */}
                {buttonAction.find(item => item.name === select)?.page}
            </div>
        </div>
    );
}

export default ProfilCandidat;

import React, { useState } from "react";
import { ShareAltOutlined, DownOutlined } from '@ant-design/icons';
import { Button, Radio, Space, Divider, Select, Result, Dropdown, Menu, Modal } from 'antd';
import CandidatPostForm from './CandidatPostForm';
import { NewsCard } from "../../components/candidatCard/NewsCard";
import NotificationCandidat from "./NotificationCandidat";
import ModificationProfilCandidat from "./modificationProfilCandidat";


function ProfilCandidat() {
    const [select, setSelect] = useState("Post");

    const handleClick = (name) => {
        setSelect(name);
    };

    const clicked = (name) => {
        setSelect(name);
        handleClick(name);
    };

    // Button paramettre
    const handleMenuClick = (e) => {
        console.log("Click on item:", e);
    };

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
        </Menu>
    );

    const buttonAction = [
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
        {
            name: "paramettre",
            id: 4,
            page: <ModificationProfilCandidat />,
        },


    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const publier = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="container" style={{ display: "block", backgroundColor:"white" }}>
            <div className="top-part" style={{ display: "flex", gridTemplateColumns: "1fr 1fr", padding: "15px" }}>
                <div className="img-card">
                    <img src="https://www.koaci.com/assets/news/thumbnails/1500/2023/05/photo_1683720735.jpg" alt="" />
                </div>
                <div className="info-card" style={{ height: "400px" }}>
                    <div style={{ fontSize: "25px", fontWeight: "", padding: "10px" }}>Bienvenue, <span style={{ fontSize: "25px", fontWeight: "bolder" }}>Yace Jean Marc</span></div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam maxime, nemo libero fuga eaque laborum exercitationem sequi accusamus perspiciatis pariatur laboriosam assumenda, quos voluptatibus nam ea dolores aperiam ab natus.</p>
                    </div>
                </div>
            </div>
            <div className="bottom-part">
                <div className="card-container" style={{ display: "flex", gap: "50px", marginLeft: "10%" }}>
                    <div className="card-button" style={{}} >
                        <div style={{ border: "solid 2px green", height: "120px", width: "275px", padding: "10px", borderRadius: "10px", textAlign: "center", padding: "15px" }}><i class="fa-solid fa-bell" style={{ fontSize: "40px", color:"green" }}> </i> <br /><br /> <span style={{fontSize:"24px", color:"", fontWeight:"bold"}}> Notification</span> </div>
                    </div>
                    <div className="card-button" style={{}}>
                        <div style={{ border: "solid 2px green", height: "120px", width: "275px", padding: "10px", borderRadius: "10px", textAlign: "center", padding: "15px" }}><i class="fa-solid fa-square-poll-vertical" style={{ fontSize: "40px",color:"orange" }}> </i> <br /><br /> <span style={{fontSize:"24px",}}> Voir les sondages</span>  </div>
                    </div>
                    <div className="card-button" style={{}} onClick={publier}>
                        <div style={{ border: "solid 2px green", height: "120px", width: "275px", padding: "10px", borderRadius: "10px", textAlign: "center", padding: "15px" }}><i class="fa-solid fa-gear" style={{ fontSize: "40px",color:"green" }}> </i> <br /><br /> <span style={{fontSize:"24px"}}> Publier un programme</span> </div>
                    </div>
                    <div className="card-button" style={{}}>
                        <div style={{ border: "solid 2px green", height: "120px", width: "275px", padding: "10px", borderRadius: "10px", textAlign: "center", padding: "15px" }}><i class="fa-solid fa-gear" style={{ fontSize: "40px",color:"green" }}> </i> <br /><br /> <span style={{fontSize:"24px"}}> Resultats</span> </div>
                    </div>

                    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={800} padding={30}>
                        <CandidatPostForm/>
                    </Modal>

                    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={800} padding={30}>
                        <CandidatPostForm/>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default ProfilCandidat;

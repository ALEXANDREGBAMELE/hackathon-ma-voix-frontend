import React, { useState } from "react";
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import "./topbar.css";
import { Link } from "react-router-dom";
import Header from "../Header";
const menuItems = [
    {
        label: "Aceuille",
        key: "acceuille",
    },
    {
        label: "Candidats",
        key: "candidats",
    },

    {
        label: "Sondages",
        key: "sondage",
    },
];
function Topbar() {
    const [ShowNave, setShowNave] = useState(true);
    const [current, setCurrent] = useState("acceuille");
    const onClick = (e) => {
        setCurrent(e.key);
    };

    return (
        <>
            <div className="topbarContainer">
                <div class="img_logo">
                    <img src="./05.png" alt="logo" />
                </div>
                <Menu
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    items={menuItems}
                    style={{ flex: "auto", marginLeft: "25rem",height:"55px",display:"flex",alignItems:"end" }}
                />
                <nav class="icons">
                    <i class="fa fa-bell" aria-hidden="true"></i>
                    <div className="userAvatar">
                        <p>yacou</p>
                        <img
                            src="https://images.unsplash.com/photo-1517598024396-46c53fb391a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                            alt=""
                        />
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Topbar;

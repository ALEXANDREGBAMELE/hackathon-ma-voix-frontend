import React, { useState } from "react";
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { Button, Menu,Badge } from "antd";
import "./topbar.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header";
import CustomButon from "../CustomButon";
import { useSelector } from "react-redux";
import { curentUser, isLoggedIn } from "../../features/auth/authSlice";

const menuItems = [
    {
        label: "Acceuil",
        key: "/",
    },
    {
        label: "Candidats",
        key: "candidats",
    },

    {
        label: "Sondages",
        key: "sondage",
    },
    {

        label: "Resultat",
        key: "resultat",
    },
];
// eslint-disable-next-line no-empty-pattern
function Topbar({}) {
    const [current, setCurrent] = useState("/");
    const isLogged = useSelector(isLoggedIn);
    const logUser = useSelector(curentUser);
    const navigation = useNavigate();
    const onClick = (e) => {
        setCurrent(e.key);
        navigation(e.key);
    };

    return (
        <>
            <div className="topbarContainer">
                <div className="img_logo">
                    <Link to="/">
                        <img src="./05.png" alt="logo" />
                    </Link>
                </div>
                <Menu
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    items={menuItems}
                    style={{
                        flex: "auto",
                        marginLeft: "25rem",
                        height: "55px",
                        display: "flex",
                        alignItems: "end",
                    }}
                />
                {isLogged ? (
                    <nav className="icons">
                        <i className="fa fa-bell" aria-hidden="true"></i>
                        <div className="userAvatar">
                            <p>{logUser.nom}</p>
                            <img
                                src="https://images.unsplash.com/photo-1517598024396-46c53fb391a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                                alt=""
                            />
                        </div>
                    </nav>
                ) : (
                    <Button onClick={() => navigation("/login")}>
                        Mon Compte
                    </Button>
                )}
            </div>
        </>
    );
}

export default Topbar;

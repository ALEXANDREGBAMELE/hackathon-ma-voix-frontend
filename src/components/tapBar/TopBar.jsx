/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Menu, Button, Avatar } from "antd";
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import "./topbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { curentUser, isLoggedIn, logOut } from "../../features/auth/authSlice";
import "./topbar.css";

const menuItems = [
    {
        label: "Accueil",
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
        label: "Elections",
        key: "resultat",
    },
];

const dropdownItems = [
    {
        key: "profile",
        label: "Mon Profil",
    },
    {
        key: "logout",
        label: "Se Déconnecter",
    },
];

function Topbar() {
    const [current, setCurrent] = useState("/");
    const isLogged = JSON.parse(localStorage.getItem("isLog"));
    const logUser = JSON.parse(localStorage.getItem("logUser"));

    const navigation = useNavigate();

    const onClick = (e) => {
        setCurrent(e.key);
        navigation(e.key);
    };

    const handleLogout = () => {
        dispatch(logOut());
        navigation("/login");
    };

    const dropdownMenu = () => {
        return (
            <Menu>
                {dropdownItems.map((item) => (
                    <Menu.Item key={item.key}>{item.label}</Menu.Item>
                ))}
            </Menu>
        );
    };

    const handleMenuClick = (e) => {
        if (e.key === "logout") {
            handleLogout();
        } else if (e.key === "profile") {
            navigation("/profile");
        }
    };

    return (
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
                <div
                    style={{
                        padding: "0 .2rem",
                        border: "1px solid #ccc",
                        height: "2.5rem",
                        width: "8rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                    }}
                    className="primaryBotom"
                    onClick={() => navigation("profil/utilisateur")}
                >
                    <Avatar src={logUser.photo_url}></Avatar>
                    <span>{logUser.nom}</span>
                </div>
            ) : (
                <Button onClick={() => navigation("/login")}>
                    Se connecter
                </Button>
            )}
        </div>
    );
}

export default Topbar;

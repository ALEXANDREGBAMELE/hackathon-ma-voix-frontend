/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Menu, Button, Dropdown } from "antd";
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
        key: 'profile',
        label: 'Mon Profil',
    },
    {
        key: 'logout',
        label: 'Se Déconnecter',
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

    const dropdownMenu = (
        <Menu>
            {dropdownItems.map(item => (
                <Menu.Item key={item.key}>
                    {item.label}
                </Menu.Item>
            ))}
        </Menu>
    );

    const handleMenuClick = (e) => {
        if (e.key === 'logout') {
            handleLogout();
        } else if (e.key === 'profile') {
            navigation('/profile');
        }
    }




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
                    <Button className="account-dropdown">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <span>{logUser.nom}</span>
                    </Button>
                 
            ) : (
                <Button onClick={() => navigation("/login")}>Se connecter</Button>
            )}
        </div>
    );
}

export default Topbar;

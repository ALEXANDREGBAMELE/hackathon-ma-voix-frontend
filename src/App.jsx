import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Article from "./components/Article";
import { news, sondages } from "./data";
import CustomButon from "./components/CustomButon";
import Sondage from "./components/Sondage";
import Topbar from "./components/tapBar/TopBar";
import { ConfigProvider } from "antd";
import SideBar from "./components/sideBar/SideBar";
import Footer from "./components/Footer";
import MainLayout from "./components/MainLayout";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <>
            <Topbar />
            <div className="mainLayout">
                <SideBar />
                <div className="Layout">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default App;

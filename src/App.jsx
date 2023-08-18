import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Article from "./components/Article";
import { news, sondages } from "./data";
import CustomButon from "./components/CustomButon";
import Sondage from "./components/Sondage";
import Topbar from "./components/tapBar/TopBar";
import { ConfigProvider } from "antd";
import SideBar from "./components/sideBar/SideBar";
import Footers from "./components/Footer";
import MainLayout from "./components/MainLayout";
import { Outlet } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme, Input, Button, Space } from "antd";
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;
function App() {
    return (
        <>
            <Layout>
                <Header
                    style={{
                        position: "sticky",
                        top: 0,
                        zIndex: 1,
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        background: "#fff",
                    }}
                >
                    <Topbar />
                </Header>
                <Layout>
                    <Sider
                        style={{
                            overflow: "auto",
                            height: "100vh",
                            position: "fixed",
                            left: 0,
                            top: 0,
                            bottom: 0,
                            background: "#fff",
                            overflow: "hidden",
                        }}
                    >
                        <SideBar />
                    </Sider>
                    <Layout
                        className="site-layout"
                        style={{
                            marginLeft: 450,
                        }}
                    >
                        <Content
                            style={{
                                margin: "24px 16px 0",
                                overflow: "initial",
                            }}
                        >
                            <Outlet />
                        </Content>
                    </Layout>
                    <Footer
                        style={{
                            textAlign: "center",
                            position: "fixed",
                            bottom: 0,
                            width: "100vw",
                            background: "green",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <img
                            src="./05.png"
                            alt=""
                            style={{
                                width: "3rem",
                                height: "3rem",
                                marginRight: "1rem",
                            }}
                        />
                        <span style={{ color: "#fff" }}>Election 2023</span>
                        <div
                            className="newsLetter"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                width: "30rem",
                                flexDirection: "column",
                            }}
                        >
                            <Space.Compact
                                style={{
                                    width: "100%",
                                }}
                            >
                                <Input defaultValue="Combine input and button" />
                                <CustomButon
                                    title="S'abonner"
                                    type="butomFillPrimaryLeft"
                                />
                            </Space.Compact>
                        </div>
                    </Footer>
                </Layout>
            </Layout>
        </>
    );
}

export default App;

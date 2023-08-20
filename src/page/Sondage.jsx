import { CardSwiper } from "react-card-rotate-swiper";
import { candidats, sondages } from "../data";
import SwipeStack from "../components/swipeCard/SwipeStack";
import { Avatar, Card } from "antd";
const { Meta } = Card;
import { Breadcrumb, Layout, Menu, theme, Input, Button, Space } from "antd";
import SondageSideBar from "../components/sideBar/SondageSideBar";
import { useEffect, useState } from "react";
import { getSondages } from "../app/publicApi/public";
const { Header, Content, Footer, Sider } = Layout;
export default function Sondage() {
    const [sondage, setSondage] = useState([]);
    useEffect(() => {
        const fetchSondage = async () => {
            const sondage = await getSondages();
            setSondage(sondage.data.data.data);
        };
        fetchSondage();
    }, []);
    return (
        <Layout>
            <Sider
                style={{
                    height: "100vh",
                    position: "fixed",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    background: "#fff",
                    overflow: "hidden",
                }}
            >
                <SondageSideBar />
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
                    <h1
                        style={{
                            textAlign: "center",
                            color: "#027314",
                        }}
                    >
                        Les Sondages dans la commune de cocody
                    </h1>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "calc(100vh - 11rem)",
                        }}
                    >
                        <SwipeStack sondages={sondage} />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}

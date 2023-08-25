import { CardSwiper } from "react-card-rotate-swiper";
import { candidats, sondages } from "../data";
import SwipeStack from "../components/swipeCard/SwipeStack";
import { Avatar, Card } from "antd";
const { Meta } = Card;
import {
    Breadcrumb,
    Layout,
    Menu,
    theme,
    Input,
    Button,
    Space,
    Spin,
    message,
} from "antd";
import SondageSideBar from "../components/sideBar/SondageSideBar";
import { useEffect, useState } from "react";
import { getSondages, participeSondage } from "../app/publicApi/public";
import FramerCard from "../components/swipeCard/FramerCard";
import CarteInteractif from "../components/carteInteractif/CarteInteractif";
import { curentUser, isLoggedIn, token } from "../features/auth/authSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
export default function Sondage() {
    const [sondage, setSondage] = useState([]);
    const [loading, setLoading] = useState(false);
    let user = JSON.parse(localStorage.getItem("logUser"));

    const [select, setSelect] = useState(user?.commune ? user?.commune : "Yopougon");
    const handleClick = (name) => {
        setSelect(name);
    };
    const [messageApi, contextHolder] = message.useMessage();
    let tokenUser = useSelector(token);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchSondage = async () => {
            setLoading(true);
            try {
                const sondagesData = await getSondages(user, tokenUser);
                setSondage(sondagesData.data);
            } catch (error) {
                // Handle error here
                console.error("Error fetching sondages:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchSondage();
    }, []);

    const addSondageVote = async (id, choix) => {
        if (!user) {
            await messageApi.open({
                type: "error",
                content:
                    "vous devez vous connecter pour effectuer cette action",
            });

            return;
        }
        const sondage = await participeSondage(user.id, id, choix, tokenUser);
        console.log(id);
        console.log(sondage);
        if (sondage.errors) {
            return false;
        }

        return true;
    };
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
                <SondageSideBar handleCommuneClicked={handleClick} />
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
                    {contextHolder}
                    <Spin tip="chargement des sondages" spinning={loading}>
                        <h1
                            style={{
                                textAlign: "center",
                                color: "#027314",
                            }}
                        >
                            Les Sondages dans la commune de {select}
                        </h1>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "calc(100vh - 11rem)",
                            }}
                        >
                            <FramerCard
                                choixSondage={addSondageVote}
                                sondages={sondage}
                                name={select}
                            />
                        </div>
                    </Spin>
                </Content>
            </Layout>
        </Layout>
    );
}

import { Breadcrumb, Layout, Spin, message, Result } from "antd";
import { useEffect, useState } from "react";
import {
    getAllCandidats,
    getAllElections,
    getCandidatByCommune,
} from "../../app/services/public.js";
import { useNavigate } from "react-router-dom";
import FramerCard from "../swipeCard/FramerCard.jsx";
import SideBar from "../sideBar/SideBar.jsx";
import { useSelector } from "react-redux";
import ElectionCard from "../candidatCard/ElectionCard.jsx";
import CandidatSideBar from "../sideBar/CandidatSideBar.jsx";
const { Header, Content, Footer, Sider } = Layout;

export function ELections() {
    //api get all elections
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();
    const [elections, setElections] = useState([]);
    const [loading, setLoading] = useState(false);
    const [candidat, setCandidat] = useState([]);
    let user = JSON.parse(localStorage.getItem("logUser"));
    const [select, setSelect] = useState(
        user?.commune ? user?.commune : "Yopougon"
    );

    const getCandidatByCommunes = async (commune) => {
        setLoading(true);
        const candidats = await getCandidatByCommune(commune);
        console.log("candidats", candidats);
        setCandidat(candidats.data);
        setSelect(commune);
        setLoading(false);
    };
    const getCandidats = async () => {
        setLoading(true);
        const candidats = await getAllCandidats();
        setCandidat(candidats.data);
        console.log("candidats", candidats);
        setLoading(false);
    };
    useEffect(() => {
        const getElections = async () => {
            try {
                setLoading(true);
                const electionsData = await getAllElections();
                console.log("electionsData", electionsData);
                setElections(electionsData.data);
            } catch (error) {
                // Handle error here
                console.error("Error fetching elections:", error);
                console.log("error", error);
            } finally {
                setLoading(false);
            }
        };
        getCandidatByCommune(select);
        getElections();
    }, [select]);
    const noCandidat = () => {
        return (
            <Result
                status="404"
                title="Aucun candidat"
                subTitle="Désolé, il n'y a aucun candidat pour le moment."
            />
        );
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
                <CandidatSideBar
                    getCandidatByCommunes={getCandidatByCommunes}
                />
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
                                marginBottom: "1.3rem",
                            }}
                        >
                            Les Candidat de la commune de {select}
                        </h1>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                miHeight: "calc(100vh - 12rem)",
                                flexWrap: "wrap",
                                gap: "1rem",
                                paddingBottom: "6.5rem",
                            }}
                        >
                            {candidat?.length > 0
                                ? candidat.map((item, index) => {
                                      return (
                                          <ElectionCard
                                              candidat={item}
                                              key={index}
                                          />
                                      );
                                  })
                                : noCandidat()}
                        </div>
                    </Spin>
                </Content>
            </Layout>
        </Layout>
    );
}

export default ELections;

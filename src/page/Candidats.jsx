import CandidatCard from "../components/candidatCard/CandidatCard";
import { candidats } from "../data";
import { Pagination } from "antd";
import { Card, List } from "antd";
import {
    Breadcrumb,
    Layout,
    Menu,
    theme,
    Input,
    Button,
    Space,
    Spin,
} from "antd";
import SideBar from "../components/sideBar/SideBar";
import CandidatSideBar from "../components/sideBar/CandidatSideBar";
import { useEffect, useState } from "react";
import {
    getAllActvities,
    getAllCandidats,
    getCandidatByCommune,
} from "../app/publicApi/public";
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

export default function Candidats() {
    const [candidat, setCandidat] = useState([]);
    const [candidats, setCandidats] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getCandidats = async () => {
            setLoading(true);
            const candidats = await getAllCandidats();
            console.log(candidats.data);
            setCandidat(candidats.data);
            setLoading(false);
        };
        getCandidats();
    }, []);
    const getCandidatByCommunes = async (commune) => {
        setLoading(true);
        const candidats = await getCandidatByCommune(commune);
        setCandidat(candidats.data);
        setLoading(false);
    };
    const handleCommuneClick = (name) => {
        console.log("commune cliquer");
        setCandidats(candidat.filter((c) => c.commune == name));
    };
    return (
        <div>
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
                        minWidth: "450px",
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
                        <Spin spinning={loading}>
                            <List
                                pagination={{
                                    position: "bottom",
                                    pageSize: 6,
                                    align: "center",
                                }}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "calc(100vh - 11rem)",
                                    padding: "1rem",
                                }}
                                grid={{ gutter: 8, xs: 1, sm: 2, md: 3 }}
                                dataSource={candidat}
                                renderItem={(item) => (
                                    <List.Item>
                                        <CandidatCard candidat={item} />
                                    </List.Item>
                                )}
                            />
                        </Spin>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
}


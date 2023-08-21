import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { Tabs, Layout } from "antd";
import Sondage from "../../components/Sondage";
import Article from "../../components/Article";
import DetailCandidatSideBar from "../../components/sideBar/DetailCandidatSideBar";
import { NewsCard } from "../../components/candidatCard/NewsCard";
import ActualiteCandidat from "./ActualiteCandidat";
const { Header, Content, Footer, Sider } = Layout;
import { useParams } from "react-router-dom";
import { candidats } from "../../data";
const tabeItems = [
    {
        key: "1",
        label: `Actualités`,
        children: <ActualiteCandidat />,
    },
    {
        key: "2",
        label: `Idéologie`,
        children: (
            <p>
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas temporibus quas a provident cumque numquam sequi
                doloribus, nisi modi maiores expedita ullam dolores ex neque
                ipsa voluptatibus optio molestias? Porro?
            </p>
        ),
    },
    {
        key: "3",
        label: `Historique professionnel`,
        children: <p>Historique professionnel content</p>,
    },
];
const contentListNoTitle = {
    Apropo: <Article />,
    Projet: <p>app content</p>,
    Portofolio: <p>project content</p>,
};
export default function CandidatDetails() {
    const [activeTabKey2, setActiveTabKey2] = useState("1");
    const { id } = useParams();
    const [candidat, setCandidat] = useState({})
    const onTab1Change = (key) => {
        setActiveTabKey2(key);
    };
    useEffect(() => {
        const getCandidats = async () => {
            const candidat =  candidats.find((c) => c.id == id);
            setCandidat(candidat);
        }
        getCandidats();
    })
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
                <DetailCandidatSideBar />
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
                    <div style={{ paddingTop: "4rem" }}>
                        <Tabs
                            tabBarStyle={{
                                position: "fixed",
                                top: "3.8rem",
                                paddingTop: ".1rem",
                                zIndex: 1,
                                background: "#fff",
                                width: "42%",
                                height: "4rem",
                            }}
                            defaultActiveKey="1"
                            centered
                            onChange={onTab1Change}
                            items={tabeItems}
                        />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}

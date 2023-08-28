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
import { getAllCandidats } from "../../app/services/public";
const tabeItems = [
    {
        key: "1",
        label: `Actualités`,
        children: <ActualiteCandidat />,
    },
    {
        key: "2",
        label: `Programmes`,
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
        label: `Historique `,
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
    const [candidat, setCandidat] = useState({});
    const [candidats, setCandidats] = useState([]);
    console.log("hello")
    const url = candidat && candidat.photo_url && !candidat.photo_url.includes("cloudinary")
        ? `https://lesinnovateurs.me/${candidat.photo_url}`
        : candidat.photo_url;
    const onTab1Change = (key) => {
        setActiveTabKey2(key);
    };
    useEffect(() => {
        const getCandidats = async () => {
            const candidats = await getAllCandidats();
            console.log(id);

            console.log(candidats.data);
            setCandidats(candidats.data);
            setCandidat(candidats.data.find((c) => c.id == id)?.user);
            console.log(candidat);
        };
        getCandidats();
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
                <DetailCandidatSideBar candidats={candidats} />
            </Sider>
            <Layout
                className="site-layout"
                style={{
                    marginLeft: 0,
                }}
            >
                <Content
                    style={{
                        margin: "24px 16px 0",
                        overflow: "initial",
                    }}
                >
                    <div
                        style={{
                            position: "fixed",
                            top: "4rem",
                            paddingTop: ".1rem",
                            zIndex: 1,
                            background: "",
                            width: "49%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        className="candidatInfo"
                    >
                        <div className="right" 
                        style={{
                            background: "", 
                            left: "78%",
                            top:"10%",
                            position: "fixed",
                            padding:"10px",
                            border:"solid grey 1px",
                            visibility:"visible"
                            
                        }}>
                            <h1>Adaman Bictogo <br />Candidat RHDP</h1><br />
                            <img
                                src={url}
                                alt=""
                                style={{
                                    height: "20rem",
                                    width: "100%",
                                    objectFit: "cover",
                                }}
                            />
                            <br />
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ipsa, necessitatibus aperiam excepturi rerum repudiandae ipsum obcaecati iure maxime optio quidem eligendi, explicabo quos minima alias amet dolorem reiciendis assumenda!
                        </div>
                        <div
                            style={{
                                padding: "1rem",
                            }}
                            className="left"
                        >
                            {candidat.bio}
                        </div>
                    </div>
                    <div style={{ paddingTop: "0rem" }}>
                        <Tabs
                            tabBarStyle={{
                                position: "fixed",
                                top: "3.8rem",
                                left: "28%",
                                paddingTop: ".1rem",
                                zIndex: 1,
                                background: "#fff",
                                width: "44%",
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

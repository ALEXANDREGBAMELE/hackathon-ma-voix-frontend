import CandidatCard from "../components/candidatCard/CandidatCard";
import { candidats } from "../data";
import { Pagination } from "antd";
import { Card, List } from "antd";
import { Breadcrumb, Layout, Menu, theme, Input, Button, Space } from "antd";
import SideBar from "../components/sideBar/SideBar";
import CandidatSideBar from "../components/sideBar/CandidatSideBar";
import { useEffect } from "react";
import { getAllActvities } from "../app/publicApi/public";
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

export default function Candidats() {
    useEffect(() => {
        const getCandidats = async () => {
            const candidats = await getAllActvities();
            console.log(candidats);
        }
        getCandidats();
    })
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
                    <CandidatSideBar />
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
                            dataSource={candidats}
                            renderItem={(item) => (
                                <List.Item>
                                    <CandidatCard candidat={item} />
                                </List.Item>
                            )}
                        />
                    </Content>
                </Layout>
            </Layout>
            
        </div>
    );
}

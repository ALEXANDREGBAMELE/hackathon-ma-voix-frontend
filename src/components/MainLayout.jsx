/* eslint-disable no-unused-vars */
import SideBar from "./sideBar/SideBar";
import { EditOutlined, SendOutlined, LikeOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;
import { Breadcrumb, Layout, Menu, theme, Input, Button, Space } from "antd";
import { getAllPosts, getSondages } from "../app/services/public";
import { useEffect, useState } from "react";
import { NewsCard } from "./candidatCard/NewsCard";
const { Header, Content, Footer, Sider } = Layout;
export default function MainLayout() {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const getPostByCommune = async (commune) => {
        setLoading(true);
        const post = await getAllPosts();
        setPost(post.data);
        setLoading(false);
    };
    const handleCarteClick = async (data) => {
        let resp = await getPostByCommune(data);
        console.log(resp);
    };

    useEffect(() => {
        const getPost = async () => {
            const getuser = JSON.parse(localStorage.getItem("logUser"));

            setLoading(true);
            const post = await getAllPosts();
            setPost(post.data);
            setLoading(false);
        };
        getPost();

        const getSondage = async () => {
            const getuser = JSON.parse(localStorage.getItem("logUser"));
            const token = JSON.parse(localStorage.getItem("token"));
            let isLog = false;
            
            if (token) {
               isLog = true;
            }

            setLoading(true);
            const sondages = await getSondage(isLog, getuser?.id);
            console.log(sondages);
            setLoading(false);
        };
        getSondage();
        
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
                <SideBar handleCarteClick={handleCarteClick} />
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
                    <div
                        style={{
                            overflow: "auto",
                            minHeightheight: "calc(100vh - 11rem)",
                            paddingBottom: "4rem",
                        }}
                    >
                        {post?.map((item, index) => {
                            return <NewsCard post={item} key={index} />;
                        })}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}

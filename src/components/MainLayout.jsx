/* eslint-disable no-unused-vars */
import SideBar from "./sideBar/SideBar";
import { EditOutlined, SendOutlined, LikeOutlined, Loading3QuartersOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;
import { Breadcrumb, Layout, Menu, theme, Input, Button, Space } from "antd";
import { getPostByCommune, getSondages, getAllPosts } from "../app/services/public";
import { useEffect, useState } from "react";
import { NewsCard } from "./candidatCard/NewsCard";
const { Header, Content, Footer, Sider } = Layout;
export default function MainLayout() {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
   
    const handleCarteClick = async (data) => {
        try {
            const resp = await getPostByCommune(data);
            setPost(resp.data);
            
        }
        catch (error) {
            console.log(error);
        }
        
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

     const getSondageData = async () => {
       // Renommez cette fonction pour éviter la confusion
       const getuser = JSON.parse(localStorage.getItem("logUser"));
       const token = JSON.parse(localStorage.getItem("token"));
       let isLog = false;

       if (token) {
         isLog = true;
       }

       setLoading(true);
       const sondages = await getSondages(isLog, getuser?.id); // Utilisez la bonne fonction ici
       console.log(sondages);
       setLoading(false);
     };
     getSondageData(); // Appelez la fonction corrigée
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
                        {loading && (
                            <Loading3QuartersOutlined
                            start={0}
                            end={100}
                            style={{
                                fontSize: "5rem",
                                color: theme.primary,
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                            }}
                        >
                            Chargement en cours...

                            </Loading3QuartersOutlined>
                        )}
                        {post?.map((item, index) => {
                            return <NewsCard post={item} key={index} />;
                        })}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}

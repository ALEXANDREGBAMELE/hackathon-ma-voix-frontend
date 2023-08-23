import SideBar from "./sideBar/SideBar";
import { EditOutlined, SendOutlined, LikeOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;
import { Breadcrumb, Layout, Menu, theme, Input, Button, Space } from "antd";
import { getAllPosts } from "../app/publicApi/public";
import { useEffect, useState } from "react";
const { Header, Content, Footer, Sider } = Layout;
export default function MainLayout() {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getPost = async () => {
            setLoading(true);
            const post = await getAllPosts();
            console.log(post);

            setPost(post.data);
            setLoading(false);
        };
        getPost();
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
                    <div
                        style={{
                            overflow: "auto",
                            minHeightheight: "calc(100vh - 11rem)",
                            paddingBottom: "4rem",
                        }}
                    >
                        <div className="direct">
                            <img
                                src="./vid.jpg"
                                alt=""
                                style={{
                                    width: "40rem",
                                    height: "14rem",
                                    margin: "1rem",
                                }}
                            />
                        </div>

                        <Card
                            style={{
                                width: "40rem",
                                marginBottom: "1.5rem",
                                padding: "1rem",
                            }}
                            actions={[
                                <p>
                                    <LikeOutlined /> Like
                                </p>,
                                <p>
                                    <EditOutlined key="edit" /> commenter
                                </p>,
                                <p>
                                    <SendOutlined /> Partager
                                </p>,
                            ]}
                        >
                            <Meta
                                avatar={
                                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                                }
                                title="Ouverture prochaine du pont alassane Dramane ouatara"
                                description="#Politique  #Infrastrutures  #Election  #Paix"
                            />
                            <img
                                src="./pont.jpg"
                                style={{
                                    width: "100%",
                                    height: "10rem",
                                    margin: "1rem",
                                }}
                                alt=""
                            />
                        </Card>
                        <Card
                            style={{
                                width: "40rem",
                                marginBottom: "1.5rem",
                                padding: "1rem",
                            }}
                            actions={[
                                <p>
                                    <LikeOutlined /> Like
                                </p>,
                                <p>
                                    <EditOutlined key="edit" /> commenter
                                </p>,
                                <p>
                                    <SendOutlined /> Partager
                                </p>,
                            ]}
                        >
                            <Meta
                                avatar={
                                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                                }
                                title="Ouverture prochaine du pont alassane Dramane ouatara"
                                description="#Politique  #Infrastrutures  #Election  #Paix"
                            />
                            <img
                                src="./pont.jpg"
                                style={{
                                    width: "100%",
                                    height: "10rem",
                                    margin: "1rem",
                                }}
                                alt=""
                            />
                        </Card>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}

import { EditOutlined, SendOutlined, LikeOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;
export const NewsCard = ({post}) => {
    return (
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
                    <Avatar
                        src={
                            post.post_img
                                ? post.post_img
                                : "https://xsgames.co/randomusers/avatar.php?g=pixel"
                        }
                    />
                }
                title={
                    post.title
                        ? post.title
                        : "Ouverture prochaine du pont alassane Dramane ouatara"
                }
                description="#Politique  #Infrastrutures  #Election  #Paix"
            />
            <img
                src={
                    post.post_img
                        ? post.post_img
                        : "https://media-files.abidjan.net/photo/infrastructures-visite-des-travaux-du-5e-pont-reliant-les-communes-de-cocod_kyp0xb88me.jpg"
                }
                style={{
                    width: "100%",
                    height: "10rem",
                    margin: "1rem",
                    objectFit: "contain",
                }}
                alt=""
            />
        </Card>
    );
};

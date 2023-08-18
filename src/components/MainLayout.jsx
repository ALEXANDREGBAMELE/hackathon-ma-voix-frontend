import SideBar from "./sideBar/SideBar";
import { EditOutlined, SendOutlined, LikeOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;
export default function MainLayout() {
    return (
        <div style={{ overflow: "auto", minHeightheight: "calc(100vh - 11rem)",paddingBottom:"3rem" }}>
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
    );
}

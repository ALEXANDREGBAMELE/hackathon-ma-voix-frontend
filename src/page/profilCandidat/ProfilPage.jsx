import React, { useState } from "react";
import { Card, Avatar, Button, Modal, Form, Input } from "antd";
import {
    EditOutlined,
    UserOutlined,
    SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

function ProfilPage() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = (values) => {
        console.log("Received values of form: ", values);
        setIsModalVisible(false);
    };
    // Les immages
    const photoProfil = "../../profil-yace.jpeg";
    const photoBackground = "../../mairie-cocody.jpeg";
    const username = "Jean-Marc Yacé"
    const usermail = "jeanmarcyace@gmail.com"
    return (
        <div className="profil-page">
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${photoBackground})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "250px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div className="avatar-section" style={{ position: "relative", top: "23%" }}>
                    <Avatar size={150} src={photoProfil} alt="" />
                    <Button className="edit-avatar-button" icon={<EditOutlined />} />
                </div>
            </div>
            <Card className="profile-card">
                <Meta
                    avatar={<Avatar src={photoProfil} alt="" />}
                    title={username}
                    description={usermail}
                />
                <div className="user-details" style={{display:"flex", gap:"50px"}}>
                    <div className="right" style={{ width:"40%"}}>
                        <p><span style={{fontSize:"25px"}}>Idéologie : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur corrupti molestiae quasi eaque suscipit obcaecati tempora commodi, dolor quam sunt quaerat iste, explicabo quia eveniet, necessitatibus asperiores consectetur tempore ea.</p>
                        <p><span style={{fontSize:"25px"}}>Parti politique :</span><span style={{color:"green", fontSize:"20px", fontWeight:"bold"}}>PDCI-RDA </span></p>
                    </div>
                    <div className="right" style={{ width:"60%"}}>
                        
                        <div className="biographie">
                            <h1>Biographie :</h1>
                        </div>
                        <div className="descriprion" style={{float:"left"}}>
                            <img src="../../profil-yace.jpeg" alt="" style={{width:"100px"}} />
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus accusamus vitae accusantium amet a reprehenderit iure qui deleniti totam enim, architecto corporis in provident, et assumenda consequatur pariatur? Ab, commodi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati inventore suscipit repellat, quidem aspernatur architecto minus quam! Ullam ipsum voluptatem in vitae delectus voluptatum reiciendis, tenetur nobis eligendi quasi provident.
                        </div>
                        
                    </div>

                </div>
                <Button
                    type="primary"
                    icon={<EditOutlined />}
                    onClick={showModal}
                >
                    Modifier les informations
                </Button>
            </Card>

            <Modal
                title="Modifier les informations personnelles"
                menu={isModalVisible}
                onCancel={handleCancel}
                footer={null}
            >
                <Form name="profil-form" onFinish={onFinish}>
                    {/* ... Form items for modifications ... */}
                </Form>
            </Modal>
        </div>
    );
}

export default ProfilPage;

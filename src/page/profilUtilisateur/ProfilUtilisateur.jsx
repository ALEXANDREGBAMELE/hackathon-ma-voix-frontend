import React, { useState } from "react";
import { Card, Avatar, Button, Modal, Form, Input } from "antd";

import {
    EditOutlined,
    UserOutlined,
    SettingOutlined,
    LogoutOutlined
} from "@ant-design/icons";

import Logout from "../Logout.jsx"
const { Meta } = Card;

function ProfilUtilisateur() {
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
    const photoBackground = "../../bg.jpg";
    const username = "Jean-Marc Yacé"
    const usermail = "jeanmarcyace@gmail.com"
    const user = JSON.parse(localStorage.getItem("logUser"));
    return (
        <div
            className="profil-page"
            style={{
                with: "",
                backgroundColor: "",
                padding: "10px 25% 10px 25%",
            }}
        >
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
                <div
                    className="avatar-section"
                    style={{ position: "relative", top: "23%" }}
                >
                    <Avatar size={150} src={user.photo_url} alt="" />
                    <Button
                        className="edit-avatar-button"
                        icon={<EditOutlined />}
                    />
                </div>
            </div>
            <Card className="profile-card">
                <Meta
                    avatar={<Avatar src={user.photo_url} alt="" />}
                    title={user.nom}
                    description={user.email}
                />
                <div
                    className="user-details"
                    style={{ display: "flex", gap: "50px" }}
                >
                    <div className="right" style={{ width: "40%" }}>
                        <p>
                            <span style={{ fontSize: "" }}>
                                Nom :{user.nom}
                            </span>
                        </p>
                        <p>
                            <span style={{ fontSize: "" }}>
                                Prenom : {user.prenom}
                            </span>
                        </p>

                        <p>
                            <span style={{ fontSize: "" }}>
                                E-mail :{user.email}
                            </span>
                        </p>
                        <p>
                            <span style={{ fontSize: "" }}>
                                Commune :{user.commune}
                            </span>
                        </p>
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
                open={isModalVisible}
                onCancel={handleCancel}
                footer={null}
            >
                <Form name="profil-form" onFinish={onFinish}>
                    <Form name="update-profile-form" onFinish={onFinish}>
                        <Form.Item label="Nom" name="nom">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Prénom" name="prenom">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Ancien mot de passe" name="password">
                            <Input.Password />
                        </Form.Item>
                        <Form.Item label="Nouveau mot de passe" name="password">
                            <Input.Password />
                        </Form.Item>
                        <Form.Item label="E-mail" name="email">
                            <Input type="email" />
                        </Form.Item>
                        <Form.Item label="Commune" name="commune">
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Enregistrer
                            </Button>
                        </Form.Item>
                    </Form>
                </Form>
            </Modal>
            <Logout>
                <LogoutOutlined />
            </Logout>
        </div>
    );
}

export default ProfilUtilisateur;
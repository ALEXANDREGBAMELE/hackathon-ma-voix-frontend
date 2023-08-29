import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Input, Button, notification, Upload, Select, Col } from "antd";
import { Spin } from "antd";
import { setCredentials } from "../features/auth/authSlice";
import { RegisterUser } from "../app/services/public";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./Register.css"; // Import the updated CSS file
import { UploadWidget } from "../components/UploadWidget";

function Register() {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [api, contextHolder] = notification.useNotification();
    const navigate = useNavigate();
    const openErrorNotificationWithIcon = (text) => {
        api.error({
            message: text,
            description: "Merci de réessayer.",
            placement: "topRight",
        });
    };

    const onFinish = async (values) => {
        setIsLoading(true);
        const data = { ...values, role_id: 3,photo_url:imageUrl };
        console.log(imageUrl);
        
        console.log(data);

        const response = await RegisterUser(data);
        console.log(response);
        setIsLoading(false);
        if (response.user) {
            dispatch(setCredentials(response));
            await localStorage.setItem("logUser", JSON.stringify(response.user));
            localStorage.setItem(
              "token",
              JSON.stringify(response.Authorization.token)
            );
            localStorage.setItem("isLog", true);
            navigate("/login");
            return;
        }
        openErrorNotificationWithIcon(response.message);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
        console.log(imageUrl);
        openErrorNotificationWithIcon("Veuillez remplir tous les champs svp!");
    };

    const commun = [
        { name: "", id: 0 },
        { name: "Yopougon", id: 1 },
        { name: "Adjame", id: 2 },
        { name: "Cocody", id: 3 },
        { name: "Plateau", id: 4 },
        { name: "Abobo", id: 5 },
        { name: "Koumassi", id: 6 },
        { name: "Marcory", id: 7 },
        { name: "Bingerville", id: 8 },
        { name: "Songon", id: 9 },
        { name: "TreichVille", id: 10 },
        { name: "PortBouet", id: 11 },
        { name: "Attécoubé", id: 12 },
        { name: "Anyama", id: 13 },
    ];
    return (
        <Spin spinning={isLoading}>
            <div className="register-box">
                <div className="image-container">
                    <img src="05.png" alt="" />
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        width: "50%",
                    }}
                    className="register-container"
                >
                    <h2>Inscrivez-vous</h2>

                    <Form
                        name="recovery"
                        layout="vertical"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        {contextHolder}

                        <Form.Item
                            label="Photo de profil"
                            style={{
                                marginBottom: "2px",
                                cursor: "pointer",
                            }}
                            name="photo_url"
                           
                        >
                            <UploadWidget setImageUrl={setImageUrl} />
                        </Form.Item>
                        <div
                            style={{ display: "flex", gap: "10px" }}
                            className="name-container"
                        >
                            <Form.Item
                                label="Nom"
                                style={{
                                    marginBottom: "2px",
                                }}
                                name="nom"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Veuillez entrer votre nom svp!",
                                    },
                                ]}
                            >
                                <Input
                                    style={{
                                        width: "14rem",
                                    }}
                                    name="nom"
                                />
                            </Form.Item>
                            <Form.Item
                                label="Prenom"
                                style={{
                                    marginBottom: "2px",
                                }}
                                name="prenom"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Veuillez entrer votre prenom svp!",
                                    },
                                ]}
                            >
                                <Input
                                    style={{
                                        width: "14rem",
                                    }}
                                    name="prenom"
                                />
                            </Form.Item>
                        </div>
                        <div
                            style={{ display: "flex", gap: "10px" }}
                            className="name-container"
                        >
                            <Form.Item
                                label="Telephone"
                                style={{
                                    marginBottom: "2px",
                                }}
                                name="phone"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Veuillez entrer votre umero svp!",
                                    },
                                ]}
                            >
                                <Input
                                    style={{
                                        width: "14rem",
                                    }}
                                    name="phone"
                                />
                            </Form.Item>
                            <Form.Item
                                name="commune"
                                label="Commune"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <select
                                    style={{
                                        width: "14rem",
                                        border: "1px solid #d9d9d9",
                                        height: "2.5rem",
                                        borderRadius: "10px",
                                    }}
                                >
                                    {commun.map((item) => (
                                        <option key={item.id} value={item.name}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </Form.Item>
                        </div>

                        <Form.Item
                            label="Email"
                            style={{
                                marginBottom: "2px",
                            }}
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Veuillez entrer votre email svp!",
                                },
                                {
                                    type: "email",
                                    message: "Veuillez entrer un email valide!",
                                },
                            ]}
                        >
                            <Input
                                style={{
                                    width: "29rem",
                                }}
                                name="email"
                            />
                        </Form.Item>

                        <Form.Item
                            label="mot de passe"
                            style={{
                                marginBottom: "2px",
                            }}
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        "Veuillez entrer votre  mot de passe svp!",
                                },
                            ]}
                        >
                            <Input.Password
                                style={{
                                    width: "29rem",
                                }}
                                name="password"
                            />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 0,
                                span: 12,
                            }}
                            style={{
                                width: "29rem",
                                marginBottom: "1px",
                            }}
                        >
                            <Button
                                htmlType="submit"
                                type="primary"
                                style={{
                                    width: "29rem",
                                }}
                            >
                                S'enregistrer
                            </Button>
                        </Form.Item>
                    </Form>

                    <p
                        style={{
                            padding: "1rem 1rem",
                        }}
                    >
                        Vous avez déjà un compte?
                        <Link to="/login">
                            <span>Se connecter</span>
                        </Link>
                    </p>
                </div>
            </div>
        </Spin>
    );
}

export default Register;

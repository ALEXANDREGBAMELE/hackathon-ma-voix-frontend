import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useRegisterMutation } from "../app/api/apiSlice";
import { Button, Checkbox, Form, Input, notification } from "antd";
import CustomButon from "../components/CustomButon";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";

import { setCredentials } from "../features/auth/authSlice";
import { RegisterUser } from "../app/publicApi/public";

function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("salut");
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [api, contextHolder] = notification.useNotification();
    const openErrorNotificationWithIcon = (text) => {
        api.error({
            message: text,
            description: " merci de reesayer",
            placement: "topRight",
        });
    };
    const onFinish = async (values) => {
        setIsLoading(true);
        const data = { ...values, role_id: 3, commune: "marcory" };
        const response = await RegisterUser(data);
        setIsLoading(false);
        if (response.user) {
            dispatch(setCredentials(response));
            navigate("/");
            return;
        }
        openErrorNotificationWithIcon(response.message);        
    };
    const onFinishFailed = (errorInfo) => {
        openErrorNotificationWithIcon("veuillez remplir tous les champs svp!");
    };


    return (
        <Spin spinning={isLoading}>
            <div className="register-box">
                <div className="image-container">
                    <img src="05.png" alt="" />
                </div>
                <div className="register-container">
                    <h2>Connectez vous</h2>
                    <Form
                        name="basic"
                        layout="vertical"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 12,
                        }}
                        style={{
                            width: "90%",
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        {contextHolder}
                        <div
                            style={{
                                display: "flex",
                                width: "29rem",
                                justifyContent: "space-between",
                            }}
                            className="topRegister"
                        >
                            <Form.Item
                                label="Nom"
                                name="nom"
                                style={{
                                    marginBottom: "2px",
                                }}
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "veuillez entrez votre email svp!",
                                    },
                                ]}
                            >
                                <Input
                                    value={email}
                                    onChange={(text) => setEmail(text)}
                                    style={{
                                        width: "13rem",
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                label="Prenom"
                                name="prenom"
                                style={{
                                    marginBottom: "2px",
                                }}
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "veuillez entrez votre prenom svp!",
                                    },
                                ]}
                            >
                                <Input
                                    onChange={(text) => setEmail(text)}
                                    style={{
                                        width: "13rem",
                                    }}
                                />
                            </Form.Item>
                        </div>
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
                                        "Veuillez entrer votre numero de telephone svp!",
                                },
                            ]}
                        >
                            <Input
                                style={{
                                    width: "29rem",
                                }}
                            />
                        </Form.Item>
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
                            ]}
                        >
                            <Input
                                style={{
                                    width: "29rem",
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            label="n° carte d'electeur"
                            style={{
                                marginBottom: "2px",
                            }}
                            name="numCarte"
                            rules={[
                                {
                                    required: false,
                                },
                            ]}
                        >
                            <Input
                                style={{
                                    width: "29rem",
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Mots de pass"
                            style={{
                                marginBottom: "2px",
                            }}
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        "Veuillez entrer votre mots de pass svp!",
                                },
                            ]}
                        >
                            <Input.Password
                                style={{
                                    width: "29rem",
                                }}
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
                                S'inscrire
                            </Button>
                        </Form.Item>
                    </Form>
                    <p>
                        deja un compte ?
                        <Link to="/login">
                            <span> Se conecter</span>
                        </Link>
                    </p>
                </div>
            </div>
        </Spin>
    );
}

export default Register;

import React, { useState } from 'react';
import "./Register.css"
import { Link } from "react-router-dom";

import { Button, Checkbox, Form, Input } from "antd";
import CustomButon from "../components/CustomButon";

function Register() {
    const [email, setEmail] = useState("salut");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const onFinish = (values) => {
        console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        //  d'authentification ici

        if (email === "user@example.com" && password === "password") {
            setIsLoggedIn(true);
        }
    };

    return (
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
                    <div style={{ display: "flex" }} className="topRegister">
                        <Form.Item
                            label="Nom"
                            name="nom"
                            style={{
                                marginBottom: "2px",
                            }}
                            rules={[
                                {
                                    required: true,
                                    message: "veuillez entrez votre email svp!",
                                },
                            ]}
                        >
                            <Input
                                value={email}
                                onChange={(text) => setEmail(text)}
                                style={{
                                    width: "15rem",
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
                        name="telephone"
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
                            message:
                                "Veuillez entrer votre email svp!",
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
                        <CustomButon
                            rd="8px"
                            title="S'inscrit"
                            type="fill"
                            width="29rem"
                        />
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
    );
}



export default Register
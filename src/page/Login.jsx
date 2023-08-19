import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button, Checkbox, Form, Input } from "antd";
import CustomButon from "../components/CustomButon";

function Login() {
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
                        span: 6,
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
                    <Form.Item
                        label="Email"
                        name="email"
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
                                width: "25rem",
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
                                width: "25rem",
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 0,
                            span: 12,
                        }}
                    >
                        <Checkbox>se souvenir de moi </Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 0,
                            span: 12,
                        }}
                        style={{
                            width: "25rem",
                            marginBottom: "1px",
                        }}
                    >
                        <CustomButon
                            rd="8px"
                            title="Se connecter"
                            type="fill"
                            width="25rem"
                        />
                    </Form.Item>
                </Form>
          <p>aucun compte ?
                    <Link to="/register">
                        <span> S'inscrire</span>
                    </Link>
                </p>
                
            </div>
        </div>
    );
}

export default Login;

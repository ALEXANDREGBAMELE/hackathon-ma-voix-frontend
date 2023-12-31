import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../app/api/apiSlice";
import { setCredentials } from "../features/auth/authSlice";

import { Button, Checkbox, Form, Input, notification } from "antd";
import CustomButon from "../components/CustomButon";
import { Spin } from "antd";
import { LoginUser } from "../app/services/public";
import { openErrorNotificationWithIcon } from "../components/CustomNotification";
function Login() {
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [api, contextHolder] = notification.useNotification();
    const openErrorNotificationWithIcon = (text) => {
        api.error({
            message: text || "une erreur est survenue",
            description: " merci de reesayer",
            placement: "topRight",
        });
    };
    const onFinish = async (values) => {
      setIsLoading(true);
      console.log(values);
      localStorage.removeItem("logUser");
      localStorage.removeItem("token");
      localStorage.removeItem("isLog");
      const resutl = await LoginUser(values);
      
        setIsLoading(false);
        if (!resutl.user) {
            openErrorNotificationWithIcon(resutl.error);
            return;
        }
        
        await localStorage.setItem("logUser", JSON.stringify(resutl.user));
        localStorage.setItem(
            "token",
            JSON.stringify(resutl.Authorization.token)
        );
        localStorage.setItem("isLog", true);
        dispatch(setCredentials(resutl));
        if (resutl.user.role_id === 2){
            navigate("/profile/candidat");
            return;
        }
        navigate("/");
    };
    const onFinishFailed = async () => {
        openErrorNotificationWithIcon("veuillez remplir tous les champs svp!");
    };

    return (
        <Spin spinning={isLoading}>
            {contextHolder}
            <div className="register-box">
                <div className="image-container">
                    <img src="05.png" alt="" />
                </div>
                {contextHolder}
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
                                {
                                    type: "email",
                                    message: "veuillez entrez un email valide svp!",
                              },
                                
                              
                            ]}
                        >
                            <Input
                                onChange={(text) => setEmail(text)}
                                style={{
                                    width: "25rem",
                                }}
                            />
                        </Form.Item>

                        <Form.Item
                            label="Mot de passe"
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
                            <Button
                                htmlType="submit"
                                type="primary"
                                style={{
                                    width: "29rem",
                                }}
                            >
                                Se connecter
                            </Button>
                        </Form.Item>
                    </Form>
            <p style={{
                      margin:".6rem"
                    }}>
                        Vous n'avez pas de compte ?
                        <Link to="/register">
                            <span> S'inscrire</span>
                        </Link>
                    </p>

                    {/* Add the "Forgot Password" link */}
                    <p >
                        <Link to="/password-recovery">
                            <span>Mot de passe oublié ?</span>
                        </Link>
                    </p>
                    <hr />
                </div>
            </div>
        </Spin>
    );
}

export default Login;

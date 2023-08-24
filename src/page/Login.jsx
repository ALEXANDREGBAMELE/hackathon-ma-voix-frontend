import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../app/api/apiSlice";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../features/auth/authSlice";

import { Button, Checkbox, Form, Input, notification } from "antd";
import CustomButon from "../components/CustomButon";
import { Spin } from "antd";
import { LoginUser } from "../app/publicApi/public";
import { openErrorNotificationWithIcon } from "../components/CustomNotification";
function Login() {
    const [email, setEmail] = useState("salut");
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
        const resutl = await LoginUser(values);
        setIsLoading(false);
        if (!resutl.user) {
            openErrorNotificationWithIcon(resutl.error);
            return;
        }
        dispatch(setCredentials(resutl));
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
                label="Mot de passe"
                style={{
                  marginBottom: "2px",
                }}
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Veuillez entrer votre mots de pass svp!",
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
            <p>
              Vous n'avez pas de compte ?
              <Link to="/register">
                <span> S'inscrire</span>
              </Link>
            </p>

            {/* Add the "Forgot Password" link */}
            <p>
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

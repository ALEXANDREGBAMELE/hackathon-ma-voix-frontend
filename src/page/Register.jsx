import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Input, Button, notification } from "antd";
import { Spin } from "antd";
import { setCredentials } from "../features/auth/authSlice";
import { RegisterUser } from "../app/publicApi/public";

import "./Register.css"; // Import the updated CSS file

function Register() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const openErrorNotificationWithIcon = (text) => {
    api.error({
      message: text,
      description: "Merci de réessayer.",
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
      // Redirect or perform other actions upon successful registration
      return;
    }
    openErrorNotificationWithIcon(response.message);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    openErrorNotificationWithIcon("Veuillez remplir tous les champs svp!");
  };

  return (
    <Spin spinning={isLoading}>
      <div className="register-box">
        <div className="image-container">
          <img src="05.png" alt="" />
        </div>
        <div className="register-container">
          <h2>Inscrivez-vous</h2>
          <Form
            name="basic"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
           
          >
            {contextHolder}
            <div className="name-container">
              <Form.Item
                label="Nom"
                name="nom"
                rules={[
                  {
                    required: true,
                    message: "Veuillez entrer votre nom svp!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Prénom"
                name="prenom"
                rules={[
                  {
                    required: true,
                    message: "Veuillez entrer votre prénom svp!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
            <Form.Item
              label="Téléphone"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Veuillez entrer votre numéro de téléphone svp!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Veuillez entrer une adresse email valide svp!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="N° carte d'électeur" name="numCarte">
              <Input />
            </Form.Item>
            <Form.Item
              label="Mot de passe"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Veuillez entrer votre mot de passe svp!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                S'inscrire
              </Button>
            </Form.Item>
          </Form>
          <p>
            Vous avez déjà un compte?{" "}
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

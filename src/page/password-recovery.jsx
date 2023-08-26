import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input, notification } from "antd";
import { Spin } from "antd";
import { resetPassword } from "../app/services/public";

function RecoveryPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    phone: "",
    password: "",
    confirmNewPassword: "",
  });

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (isLoggedIn) {
    return navigate("/");
  }

  const openErrorNotificationWithIcon = (text) => {
    api.error({
      message: text,
      description: "Merci de réessayer.",
      placement: "topRight",
    });
  };

  const onFinish = async () => {
    setIsLoading(true);

    try {
      const response = await resetPassword(formData);

      setIsLoading(false);

      if (response.success) {
        navigate("/login"); // Redirect to login page after successful password reset
      } else if (response.errors) {
        // Handle validation errors
        const errorMessages = Object.values(response.errors).flat();
        openErrorNotificationWithIcon(errorMessages.join(", "));
      } else {
        openErrorNotificationWithIcon(response.message);
      }
    } catch (error) {
      // Handle Axios errors
      if (error.response) {
        const errorMessage =
          error.response.data.message || "Une erreur est survenue.";
        openErrorNotificationWithIcon(errorMessage);
      } else {
        openErrorNotificationWithIcon("Une erreur est survenue.");
      }
      setIsLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    openErrorNotificationWithIcon("Veuillez remplir tous les champs svp!");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <Spin spinning={isLoading}>
      <div className="register-box">
        <div className="image-container">
          <img src="05.png" alt="" />
        </div>
        <div className="register-container">
          <h2>Récupération de mot de passe</h2>
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
                    message: "Veuillez entrer votre nom svp!",
                  },
                ]}
              >
                <Input
                  style={{
                    width: "14rem",
                  }}
                  name="nom"
                  value={formData.nom}
                  onChange={handleInputChange}
                />
              </Form.Item>
              <Form.Item
                label="Téléphone"
                style={{
                  marginBottom: "2px",
                }}
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Veuillez entrer votre numéro de téléphone svp!",
                  },
                ]}
              >
                <Input
                  style={{
                    width: "14rem",
                  }}
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
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
                value={formData.email}
                onChange={handleInputChange}
              />
            </Form.Item>

            <Form.Item
              label="Nouveau mot de passe"
              style={{
                marginBottom: "2px",
              }}
              name="newPassword"
              rules={[
                {
                  required: true,
                  message: "Veuillez entrer votre nouveau mot de passe svp!",
                },
              ]}
            >
              <Input.Password
                style={{
                  width: "29rem",
                }}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </Form.Item>
            <Form.Item
              label="Confirmer le nouveau mot de passe"
              style={{
                marginBottom: "2px",
              }}
              name="confirmNewPassword"
              dependencies={["newPassword"]}
              rules={[
                {
                  required: true,
                  message: "Veuillez confirmer votre nouveau mot de passe!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Les mots de passe ne correspondent pas.")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                style={{
                  width: "29rem",
                }}
                name="confirmNewPassword"
                value={formData.confirmNewPassword}
                onChange={handleInputChange}
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
                Réinitialiser le mot de passe
              </Button>
            </Form.Item>
          </Form>
          <p>
            Vous vous souvenez de votre mot de passe?
            <Link to="/login">
              <span> Se connecter</span>
            </Link>
          </p>
        </div>
      </div>
    </Spin>
  );
}

export default RecoveryPassword;

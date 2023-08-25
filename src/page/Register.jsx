import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Input, Button, notification, Upload, Select, Col } from "antd";
import { Spin } from "antd";
import { setCredentials } from "../features/auth/authSlice";
import { RegisterUser } from "../app/publicApi/public";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./Register.css"; // Import the updated CSS file
const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
};
const { Option } = Select;
const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
        message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
};
function Register() {
    const [loading, setLoading] = useState(false);
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                choisir image
            </div>
        </div>
  );
  const options = [
      { value: "one", label: "One" },
      { value: "two", label: "Two", className: "myOptionClassName" },
    
  ];
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [api, contextHolder] = notification.useNotification();
    const [imageUrl, setImageUrl] = useState();
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

    const handleChange = (info) => {
        if (info.file.status === "uploading") {
            setLoading(true);
            return;
        }
        if (info.file.status === "done") {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };
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
                            label="Photo profil"
                            style={{
                                marginBottom: "2px",
                            }}
                            name="profil"
                            rules={[
                                {
                                    required: true,
                                    message: "Veuillez choisir une photo!",
                                },
                            ]}
                        >
                            <Upload
                                name="avatar"
                                listType="picture-circle"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                beforeUpload={beforeUpload}
                                onChange={handleChange}
                            >
                                {imageUrl ? (
                                    <img
                                        src={imageUrl}
                                        alt="avatar"
                                        style={{
                                            width: "100%",
                                        }}
                                    />
                                ) : (
                                    uploadButton
                                )}
                            </Upload>
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
                                <Dropdown
                                    disabled
                                    onChange={(e) => console.log(e)}
                                    value={options[0]}
                                    placeholder="Select an option"
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
                    <p>
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

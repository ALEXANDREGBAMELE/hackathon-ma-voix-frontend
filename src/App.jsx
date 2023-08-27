/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import CustomButon from "./components/CustomButon";
import Topbar from "./components/tapBar/TopBar";

import { Outlet, } from "react-router-dom";
import { Layout, Input, Space, message } from "antd";
import { addNewsletter } from "./app/services/public";
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

const botomProps = {
    borderTopLeftRadius: "0px",
    borderBottomLeftRadius: "0px",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
    background: "#ff7200",
    textAlign: "center",
    fontSize: "medium",
    cursor: "pointer",
    color: " #fff",
    padding: " .64rem",
};

function App() {
    const [email, setEmail] = useState("");

    //message config
    const [messageApi, contextHolder] = message.useMessage();


  const handleNewsletterSubscribe = async () => {
        if (!email) {
            messageApi.error("Veuillez entrer une adresse mail valide");
            return
        }
      
        try {
            const response = await addNewsletter({email: email});
            console.log(response);
            if (response.success) {
                setEmail("");
                 messageApi.success("Vous êtes bien abonné à notre newsletter");
                 return

            }
            if (!response.message === "La valeur du champ 'email' est invalide.") {
                messageApi.error("Veuillez entrer une adresse mail valide");
                return
            }
            
            messageApi.error("Oups! Vous êtes déjà abonné à notre newsletter");
            setEmail("");
        } catch (error) {
            console.error("Erreur lors de l'abonnement à la newsletter:", error);
            messageApi.error("Erreur lors de l'abonnement à la newsletter");
        }
      

    };

    const handleSubmit = () => {
        handleNewsletterSubscribe();
    };
    return (
        <>
            <Layout>
                <Header
                    style={{
                        position: "sticky",
                        top: 0,
                        zIndex: 1,
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        background: "#fff",
                    }}
                >
                    <Topbar />
                    {contextHolder}
                </Header>
                <Outlet />
                <Footer
                    style={{
                        textAlign: "center",
                        position: "fixed",
                        bottom: 0,
                        width: "100vw",
                        background: "green",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <img
                        src="./logoB.png"
                        alt=""
                        style={{
                            width: "auto",
                            height: "3.5rem",
                            marginRight: "1rem",
                            objectFit: "cover",
                        }}
                    />
                    <span style={{ color: "#fff" }}>
                        ©2023 All rights reserved
                    </span>
                    <div className="newsLetter">
                        <h4>Abonnez-vous à notre NewsLetter</h4>
                        <Space.Compact
                            style={{
                                width: "100%",
                            }}
                        >
                            <Input onChange={(e)=>setEmail(e.target.value)} placeholder="Votre addresse mail" />
                            <CustomButon
                                onClicked={handleSubmit}
                                stylePropes={botomProps}
                                title="S'abonner"
                                type={"fillPrimary"}
                            />
                        </Space.Compact>
                    </div>
                </Footer>
            </Layout>
        </>
    );
}

export default App;

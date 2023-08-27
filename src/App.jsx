/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import CustomButon from "./components/CustomButon";
import Topbar from "./components/tapBar/TopBar";

import { Outlet } from "react-router-dom";
import { Layout, Input, Space } from "antd";
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

  const handleNewsletterSubscribe = async () => {
      console.log(email);
      
      const response = await addNewsletter(email);
      console.log(response);
      

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
                            />
                        </Space.Compact>
                    </div>
                </Footer>
            </Layout>
        </>
    );
}

export default App;

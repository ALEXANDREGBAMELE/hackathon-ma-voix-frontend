import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Article from "./components/Article";
import { news, sondages } from "./data";
import CustomButon from "./components/CustomButon";
import Sondage from "./components/Sondage";
import Topbar from "./components/tapBar/TopBar";
import { ConfigProvider } from "antd";
import SideBar from "./components/sideBar/SideBar";
import Footers from "./components/Footer";
import MainLayout from "./components/MainLayout";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { curentUser } from "./features/auth/authSlice";

import { Outlet } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme, Input, Button, Space } from "antd";
import { addNewsletter } from "./app/publicApi/public";
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;
const botomProps = {
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
    background: "#ff7200",
    padding: " 0.5rem",
    textAlign: "center",
    fontSize: "medium",
    cursor: "pointer",
    color: " #fff",
};


function App() {

    const [email, setEmail] = useState(""); 

    const handleNewsletterSubscribe = async () => {
      // Appel au service addNewsletter
    try {
        const response = await addNewsletter({ email }); // Appel avec l'email saisi
        if (response.success) {
          alert("Vous vous êtes abonné à la newsletter !");
        } else {
          alert("Une erreur s'est produite lors de l'abonnement.");
        }
      } catch (error) {
        console.error("Erreur lors de l'abonnement à la newsletter :", error);
        alert("Une erreur s'est produite lors de l'abonnement.");
      }
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
            <span style={{ color: "#fff" }}>©2023 All rights reserved</span>
            <div className="newsLetter">
              <h4>Abonnez-vous à notre NewsLetter</h4>
              <Space.Compact>
                <Input
                  placeholder="Entrez votre email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}

                />
                <CustomButon
                  title="S'abonner"
                  type="butomFillPrimaryLeft"
                  stylePropes={botomProps}
                  onClick={handleNewsletterSubscribe} // Appel de la fonction
                />
              </Space.Compact>
            </div>
          </Footer>
        </Layout>
      </>
    );
}

export default App;

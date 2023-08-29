/* eslint-disable react/jsx-key */
import { React, useState } from "react";
import Dashboard from "./MiniDashBoard";
import ProgrammeCandidat from "./ProgrammeCandidat";
import { Menu, Avatar, Badge } from "antd";
import PostCandidat from "./PostCandidat";
import ProfilPage from "./ProfilPage";
import NotificationPage from "./NotificationCandidat"
import CandidatAllPosts from "./CandidatAllPosts";
import { useNavigate } from "react-router-dom";
import {
    HomeOutlined,
    UserOutlined,
    BarChartOutlined,
    BellOutlined,
    SettingOutlined,
    LogoutOutlined

} from "@ant-design/icons";
import Logout from "../Logout";
import AjouterPost from "./AjouterPost";
import "./style-candidat.css";



function ProfilCandidat() {
    
    const contents = [<Dashboard />,<AjouterPost />, <CandidatAllPosts />, <ProgrammeCandidat />, <NotificationPage />, <ProfilPage/>];

    const logUser = JSON.parse(localStorage.getItem("logUser"));
    let userAvatar = null;
    //eviter cannot read property of null
    const verif = logUser?.photo_url
    if (verif && !logUser.photo_url.includes('cloudinary')){
        userAvatar = logUser.photo_url
    }
    else if (verif && logUser.photo_url.includes('cloudinary')) {
        userAvatar = logUser.photo_url
    }
    else{
        userAvatar = 'https://lesinnovateurs.me/default_user.jpeg'
    }


    const [currentContentIndex, setCurrentContentIndex] = useState(0);

    const changeToContent = (index) => {
        console.log(index);
        setCurrentContentIndex(index);
    };
    const handleLogout = () => {
        localStorage.removeItem("logUser");
        localStorage.removeItem("token");
        localStorage.removeItem("isLog");
        localStorage.clear();
        navigate("/login");
      };

    const photoProfil = userAvatar
    const username = logUser?.nom + " " + logUser?.prenom
    return (
      <div
        style={{
          display: "flex",
          overflow: "hidden",
          position: "fixed",
          top: ".5rem",
          width: "100%",
        }}
      >
        <div className="left-section" style={{ width: "30%" }}>
          <div
            className="sidebar"
            style={{ width: "100%", justifyContent: "center" }}
          >
            <div className="top" style={{ height: "86.3px" }}>
              <img
                src="../../logoB.png"
                alt=""
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div className="bottom">
              <Menu
                mode="vertical"
                theme="light"
                defaultSelectedKeys={["1"]}
                style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10 }}
              >
                <Menu.Item
                  key="1"
                  icon={<HomeOutlined />}
                  onClick={() => changeToContent(0)}
                >
                  Dashboard
                </Menu.Item>
                <Menu.Item
                  key="2"
                  icon={<BarChartOutlined />}
                  onClick={() => changeToContent(1)}
                >
                  Faire un Post
                </Menu.Item>

                <Menu.Item
                  key="3" 
                  icon={<BarChartOutlined />}
                  onClick={() => changeToContent(2)}
                >
                  Mes Posts
                </Menu.Item>

                <Menu.Item
                  key="4"
                  icon={<BarChartOutlined />}
                  onClick={() => changeToContent(3)}
                >
                  Programme
                </Menu.Item>
                <Menu.Item
                  key="5"
                  icon={<UserOutlined />}
                  onClick={() => changeToContent(5)}
                >
                  Profil
                </Menu.Item>
                <Menu.Item
                  key="6"
                  icon={<SettingOutlined />}
                  onClick={() => changeToContent(5)}
                >
                  Paramètres
                </Menu.Item>
                <Menu.Item
                  key="7"
                  icon={<LogoutOutlined />}
                  onClick = {() => handleLogout}
                >
                  Déconnexion
                </Menu.Item>
              </Menu>
            </div>
          </div>
          {/* end sidebar */}
        </div>
        {/* end right-part */}
        <div
          className="right-section"
          style={{ display: "", flexWrap: "wrap", width: "100%" }}
        >
          <div className="navbar">
            <>
              <Menu
                mode="horizontal"
                theme="light"
                defaultSelectedKeys={["1"]}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingRight: "65px",
                  paddingBottom: "20px",
                  paddingTop: "20px",
                }}
              >
                <Menu.Item
                  key="1"
                  onClick={() => changeToContent(0)}
                  icon={<HomeOutlined />}
                >
                  Dashboard
                </Menu.Item>
                <Menu.Item
                  key="4"
                  onClick={() => changeToContent(4)}
                  icon={
                    <Badge count={5} offset={[10, 0]} overflowCount={99}>
                      <BellOutlined />
                    </Badge>
                  }
                >
                  Notifications
                </Menu.Item>
                <Menu.Item key="5">
                  <Avatar size={32} src={photoProfil} />
                  {/* icon={<UserOutlined />} */}
                  {username}
                </Menu.Item>
              </Menu>
            </>
          </div>
          <div
            className="content"
            style={{
              width: "100%",
              padding: "2rem",
              maxHeight: "600px",
              overflowY: "auto",
            }}
          >
            {contents[currentContentIndex]}
          </div>
        </div>
      </div>
    );
}

export default ProfilCandidat;
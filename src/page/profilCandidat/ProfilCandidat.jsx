import { React, useState } from "react";
import Dashboard from "./MiniDashBoard";
import CandidatPostForm from "./CandidatPostForm";
import { Menu, Input, Avatar, Badge, Modal } from "antd";
import ProgrammePage from "./Programme";
import ProfilPage from "./ProfilPage";
import NotificationPage from "./NotificationCandidat"
import {
    HomeOutlined,
    UserOutlined,
    CalendarOutlined,
    BarChartOutlined,
    BellOutlined,
    SettingOutlined,
    LogoutOutlined

} from "@ant-design/icons";


function ProfilCandidat() {

    const contents = [<Dashboard />, <CandidatPostForm />, <NotificationPage />, <ProgrammePage />, <ProfilPage/>];

    const [currentContentIndex, setCurrentContentIndex] = useState(0);

    const changeToContent = (index) => {
        setCurrentContentIndex(index);
    };
    const photoProfil = "../../profil-yace.jpeg";
    const username = "Jean-Marc Yace"
    return (
        <div style={{ display: "flex",overflow: "hidden",position: "fixed", top: ".5rem", width: "100%"  }}>
            <div className="left-section" style={{ width: "30%" }}>
                <div className="sidebar" style={{ width: "100%", justifyContent:"center" }}>
                    <div className="top" style={{ height: "86.3px" }}>
                        <img src="../../logoB.png" alt="" style={{ height: "100%", width: "100%" }} />
                    </div>
                    <div className="bottom">
                        <Menu
                            mode="vertical"
                            theme="light"
                            defaultSelectedKeys={["1"]}
                            style={{ paddingLeft: 20, paddingRight: 20 , paddingTop:10}}

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
                                Publier un Programme
                            </Menu.Item>
                            <Menu.Item key="4" icon={<UserOutlined />} onClick={() => changeToContent(4)}>
                                Profil
                            </Menu.Item>
                            <Menu.Item key="5" icon={<SettingOutlined />} onClick={() => changeToContent()}>
                                Paramètres
                            </Menu.Item>
                            <Menu.Item key="6" icon={<LogoutOutlined />} onClick={() => changeToContent()}>
                                Déconnexion
                            </Menu.Item>
                        </Menu>
                    </div>
                </div>
                {/* end sidebar */}
            </div>
            {/* end right-part */}
            <div className="right-section" style={{ display: "", flexWrap: "wrap",width:"100%"}}>
                <div className="navbar">
                    <>
                        <Menu mode="horizontal" theme="light" defaultSelectedKeys={["1"]} style={{ display: "flex", justifyContent: "space-between", paddingRight: "65px", paddingBottom: "20px", paddingTop: "20px" }}>
                            <Menu.Item key="1" onClick={() => changeToContent(0)} icon={<HomeOutlined />}>
                                Dashboard
                            </Menu.Item>
                            <Menu.Item key="3" onClick={() => changeToContent(3)} icon={<BarChartOutlined />}>
                                Programme
                            </Menu.Item>
                            <Menu.Item key="4" onClick={() => changeToContent(2)} icon={<Badge count={5} offset={[10, 0]} overflowCount={99}><BellOutlined /></Badge>}>
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
                <div className="content" style={{ width: "100%", padding: "2rem", maxHeight: "600px", overflowY: "auto"}}>
              
                    {contents[currentContentIndex]}
                </div>
            </div>
        </div>
    );
}

export default ProfilCandidat;
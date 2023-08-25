import React, { useState } from "react";
import { Menu, Input, Avatar, Badge, Modal } from "antd";
import NotificationCandidat from "./NotificationCandidat";
import {
    HomeOutlined,
    UserOutlined,
    CalendarOutlined,
    BarChartOutlined,
    BellOutlined,
} from "@ant-design/icons";

const NavbarProfilCandidat = () => {
    const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);

    const handleNotificationModalOpen = () => {
        setIsNotificationModalOpen(true);
    };

    const handleModalClose = () => {
        setIsNotificationModalOpen(false);
    };

    return (
        <>
            <Menu mode="horizontal" theme="light" defaultSelectedKeys={["1"]} style={{ display: "flex", justifyContent: "space-between", paddingRight: "65px" }}>
                <Menu.Item key="1" icon={<HomeOutlined />}>
                    Accueil
                </Menu.Item>
                <Menu.Item key="2" icon={<CalendarOutlined />}>
                    Calendrier
                </Menu.Item>
                <Menu.Item key="3" icon={<BarChartOutlined />}>
                    Statistiques
                </Menu.Item>
                <Menu.Item key="4" onClick={handleNotificationModalOpen} icon={<Badge count={5} offset={[10, 0]} overflowCount={99}><BellOutlined /></Badge>}>
                    Notifications
                </Menu.Item>
                <Menu.Item key="5">
                    <Avatar size={32} icon={<UserOutlined />} />
                    Profil
                </Menu.Item>
            </Menu>

            <Modal title="Notifications" visible={isNotificationModalOpen} onOk={handleModalClose} onCancel={handleModalClose} width={800}>
                <NotificationCandidat />
            </Modal>
        </>
    );
};

export default NavbarProfilCandidat;

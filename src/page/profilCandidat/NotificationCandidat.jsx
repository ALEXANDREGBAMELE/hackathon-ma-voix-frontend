
import React, { useState } from "react";
import { List, Avatar,Modal } from "antd";
import { MessageOutlined } from "@ant-design/icons";

const notifications = [
    {
      id: 1,
      message: "Nouveau message reçu.",
      content: "Le contenu du nouveau message...",
      date: "2023-08-20",
    },
    {
      id: 2,
      message: "Votre programme a été approuvé.",
      content: "Félicitations, votre programme a été approuvé...",
      date: "2023-08-19",
    },
    {
      id: 3,
      message: "Mise à jour importante de l'application.",
      content: "Une mise à jour importante est disponible...",
      date: "2023-08-18",
    },
  ];
  

  function NotificationsPage() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedNotification, setSelectedNotification] = useState(null);
  
    const showModal = (notification) => {
      setSelectedNotification(notification);
      setIsModalVisible(true);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  
    return (
      <div className="notifications-page">
        <List
          itemLayout="horizontal"
          dataSource={notifications}
          renderItem={(item) => (
            <List.Item onClick={() => showModal(item)}>
              <List.Item.Meta
                avatar={<Avatar icon={<MessageOutlined />} />}
                title={item.message}
                description={item.date}
              />
            </List.Item>
          )}
        />
  
        <Modal
          title="Contenu de la notification"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          {selectedNotification && (
            <div>
              <p>{selectedNotification.content}</p>
            </div>
          )}
        </Modal>
      </div>
    );
  }
  
  export default NotificationsPage;
  
  
  
  
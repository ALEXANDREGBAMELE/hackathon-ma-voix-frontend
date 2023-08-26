import React, { useState } from "react";
import { Card, Button, Modal, Form } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import AjouterPost from "./AjouterPost";

const { Meta } = Card;

function PostCandidat() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    setIsModalVisible(false);
  };

  const programs = [
    {
      id: 1,
      title: "Programme 1",
      description: "Description du programme 1.",
      date: "2023-09-01",
      image: "../../programme1.jpeg",
    },
    {
      id: 2,
      title: "Programme 2",
      description: "Description du programme 2.",
      date: "2023-09-15",
      image: "../../programme2.jpeg",
    },
    {
      id: 3,
      title: "Programme 3",
      description: "Description du programme 3.",
      date: "2023-10-01",
      image: "../../programme3.jpeg",
    },
  ];

  return (
    <div className="post-page" style={{ display: "flex" }}>
      <div className="post" style={{ height: "100%", width: "100%" }}>
        {programs.map((program) => (
          <Card
            key={program.id}
            hoverable
            cover={<img alt={program.title} src={program.image} style={{ width: "100%", height: "auto" }} />}
            style={{ width: 800, marginBottom: 20, }}
          >
            <Meta title={program.title} description={program.description} />
            <p>Date de début : {program.date}</p>
            <div className="action-buttons">
              <div className="button-group">
                <Button type="primary" icon={<EditOutlined />}>
                  Modifier
                </Button>
                <Button danger icon={<DeleteOutlined />}>
                  Supprimer
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="ajouter-post" style={{ marginLeft: "10%", position: "fixed", left: "75%" }}>
        <button onClick={showModal}>Nouveau post</button>
      </div>
      <Modal
        title="Ajouter un post"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <AjouterPost />
      </Modal>
    </div>

  );
}

export default PostCandidat;

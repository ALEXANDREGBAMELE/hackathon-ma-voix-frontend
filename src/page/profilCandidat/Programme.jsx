import React from "react";
import { Card, Button } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

function ProgrammePage() {
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
    <div className="programme-page">
      {programs.map((program) => (
        <Card
          key={program.id}
          hoverable
          cover={<img alt={program.title} src={program.image} style={{ width: "100%", height: "auto" }} />}
          style={{width:800, marginBottom:20}}
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
  );
}

export default ProgrammePage;

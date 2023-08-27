import React, { useEffect } from "react";
import { Card, Row, Col, Statistic } from "antd";
import { UserOutlined, BarChartOutlined, CalendarOutlined, FileTextOutlined } from "@ant-design/icons";
import { getMyfollowers } from "../../app/services/candidat";


const data = [
  { title: "Followers", value: 120, icon: <UserOutlined />, color: "#3f8600" },
  { title: "Statistiques", value: 350, icon: <BarChartOutlined />, color: "#cf1322" },
  { title: "Calendrier", value: 15, icon: <CalendarOutlined />, color: "#1890ff" },
  // ... Ajoutez d'autres données ici ...
];

const Dashboard = () => {

  const logUser = JSON.parse(localStorage.getItem("logUser"));
  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    if (!logUser || !token) {
      window.location.href = "/login";
    }
    try {
      const getFollowers = async () => {
        const response = await getMyfollowers();
        console.log(response);
      };
      getFollowers();
    } catch (error) {
      console.error("Erreur lors de la récupération des followers :", error);
    }
  }, []);



  return (
    <div style={{ padding: "20px", justifyContent: "center", textAlign: "center", cursor: "pointer" }}>
      <Row gutter={16}>
        {data.map((item, index) => (
          <Col key={index} span={6}>
            <Card >
              <Statistic
                title={item.title}
                value={item.value}
                prefix={item.icon}
                valueStyle={{ color: item.color }}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Dashboard;

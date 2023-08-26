import React from "react";
import { Card, Row, Col, Statistic } from "antd";
import { UserOutlined, BarChartOutlined, CalendarOutlined, FileTextOutlined } from "@ant-design/icons";


const data = [
  { title: "Followers", value: 120, icon: <UserOutlined />, color: "#3f8600" },
  { title: "Statistiques", value: 350, icon: <BarChartOutlined />, color: "#cf1322" },
  { title: "Calendrier", value: 15, icon: <CalendarOutlined />, color: "#1890ff" },
  // ... Ajoutez d'autres données ici ...
];

const Dashboard = () => {
  return (
    <div style={{ padding: "20px", justifyContent: "center", textAlign: "center" }}>
      <Row gutter={16}>
        {data.map((item, index) => (
          <Col key={index} span={6}>
            <Card>
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

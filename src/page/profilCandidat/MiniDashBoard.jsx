import React from "react";
import { Card, Row, Col, Statistic } from "antd";
import { UserOutlined, BarChartOutlined, CalendarOutlined, FileTextOutlined } from "@ant-design/icons";

const Dashboard = () => {
  return (
    <div style={{ padding: "20px", justifyContent:"center" , textAlign:"center"}}>
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <Statistic
              title="Followers"
              value={120}
              prefix={<UserOutlined />}
              valueStyle={{ color: "#3f8600" }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Statistiques"
              value={350}
              prefix={<BarChartOutlined />}
              valueStyle={{ color: "#cf1322" }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Calendrier"
              value={15}
              prefix={<CalendarOutlined />}
              valueStyle={{ color: "#1890ff" }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;

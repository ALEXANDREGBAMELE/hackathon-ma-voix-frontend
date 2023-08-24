import React from "react";
import { Row, Col, Card } from "antd";
import GraphTendance from "./GraphTendance";

// const chartData = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May"],
//     datasets: [
//       {
//         label: "Votes",
//         data: [50, 60, 70, 80, 90],
//         fill: false,
//         borderColor: "rgba(75, 192, 192, 1)",
//       },
//     ],
//   };

const Dashboard = () => {
    

  return (
    <>
    <div className="dashboard" style={{ textAlign: "center" }}>
      <h2>Tableau de Bord des Statistiques</h2>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={8}>
          <Card title="Total des Votes" bordered={false} size="small">
            {/* Affichez ici les statistiques du total des votes */}
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card title="Votes par Candidat" bordered={false} size="small">
            {/* Affichez ici les statistiques des votes par candidat */}
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card title="Participation par Commune" bordered={false} size="small">
            {/* Affichez ici les statistiques de la participation par commune */}
          </Card>
        </Col>
      </Row>
    </div>
    <div>
      {/* ... Autres éléments du tableau de bord ... */}
      {/* <GraphTendance chartData={chartData} /> */}
      {/* ... Autres éléments du tableau de bord ... */}
    </div>
    </>
  );
};

export default Dashboard;

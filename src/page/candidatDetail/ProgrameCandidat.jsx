import { Card, Row, Col, Modal } from "antd";
import { UserOutlined, BarChartOutlined, CalendarOutlined, DislikeOutlined, EditOutlined, LikeOutlined } from "@ant-design/icons";
export default function ProgrameCandidat() {
  const { Meta } = Card;
  const data = Array(5).fill(0);
  return (
    <div style={{
      marginLeft:"30%"
    }}>
      <Row gutter={16} style={{ marginTop: "10px" }}>
        {data.map((item, index) => (
          <Col key={index} span={8}>
            <Card
              hoverable
              style={{ width: 260 , marginTop:"3rem"}}
              cover={<img alt="example" src="https://journee-nationale-des-dys-rhone.com/wp-content/uploads/2017/08/programme-image.png" style={{ height: "100px" }} />}
              actions={[
                <LikeOutlined key="setting" />,
                <DislikeOutlined key="edit" />,
              ]}
            >
              <Meta title="SALUBRITE" description=" Abidjan, le 24 mai 2022- Le directeur général de l’Assainissement et de la Salubrité, Lazeni Ouattara, a réaffirmé l’ambition du gouvernement ivoirien d’apporter une réponse efficace et durable à la question de la salubrité. www.instagram.com" />

            </Card>
          </Col>
        ))}

      </Row>
    </div>
  );
}

import React,{useState} from "react";
import { Card, Row, Col, Statistic,Modal,Form } from "antd";
import { UserOutlined, BarChartOutlined, CalendarOutlined, FileTextOutlined } from "@ant-design/icons";
import AjouterProgramme from "./AjouterProgramme";

const data = [
    { title: "La Santé", value: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae aliquam tenetur quis quaerat vitae consectetur. Consequuntur", icon: <UserOutlined />, color: "#3f8600" },
    { title: "Programme 2", value: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae aliquam tenetur quis quaerat vitae consectetur. Consequuntur", icon: <BarChartOutlined />, color: "#cf1322" },
    { title: "Programme 3", value: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae aliquam tenetur quis quaerat vitae consectetur. Consequuntur", icon: <CalendarOutlined />, color: "#1890ff" },
    // ... Ajoutez d'autres données ici ...
];

const ProgrammeCandidat = () => {
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
    return (
        <div style={{ padding: "20px", justifyContent: "center", textAlign: "center" }}>
            <button style={{ position: "fixed", left: "26.7%", top: "12%" }} onClick={showModal}>Nouveau Programme</button>
            <Row gutter={16} style={{ marginTop: "10px" }}>
                {data.map((item, index) => (
                    <Col key={index} span={8}>
                        <Card>
                            <Statistic
                                title={item.title}
                                value={item.value}
                                // prefix={item.icon}
                                valueStyle={{ color: item.color }}
                                titleStyle={{ color: item.color }}
                            />
                        </Card>
                    </Col>
                ))}

            </Row>
            {/* modal du formulair ajouter un programme */}
            <Modal
                title="Ajouter un programme"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
            >
                <AjouterProgramme />
            </Modal>
        </div>
    );
};

export default ProgrammeCandidat;

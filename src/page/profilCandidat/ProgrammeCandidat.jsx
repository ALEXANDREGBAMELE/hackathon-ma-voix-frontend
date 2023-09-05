import React, { useState, useEffect } from "react";
import { Card, Row, Col, Modal} from "antd";
import { UserOutlined, BarChartOutlined, CalendarOutlined, DislikeOutlined ,EditOutlined, LikeOutlined } from "@ant-design/icons";
import AjouterProgramme from "./AjouterProgramme";

const data = [
    { title: "La Santé", value: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae aliquam tenetur quis quaerat vitae consectetur. Consequuntur", icon: <UserOutlined />, color: "#3f8600" },
    { title: "Programme 2", value: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae aliquam tenetur quis quaerat vitae consectetur. Consequuntur", icon: <BarChartOutlined />, color: "#cf1322" },
    { title: "Programme 3", value: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae aliquam tenetur quis quaerat vitae consectetur. Consequuntur", icon: <CalendarOutlined />, color: "#1890ff" },
    // ... Ajoutez d'autres données ici ...
];

const ProgrammeCandidat = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        try {
            const getMyProgrammes = async () => {
                const response = await
                    console.log(response);
            };
            getMyProgrammes();

        } catch (error) {
            console.error("Erreur lors de la récupération des programmes :", error);
        }
    }, []);



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
    const { Meta } = Card;
    return (
        <div style={{ padding: "20px", justifyContent: "center", textAlign: "center" }}>
            <button style={{ position: "fixed", left: "26.7%", top: "12%" }} onClick={showModal}>Nouveau Programme</button>
            <Row gutter={16} style={{ marginTop: "10px" }}>
                {data.map((item, index) => (
                    <Col key={index} span={8}>
                        <Card
                            hoverable
                            style={{ width: 260 }}
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

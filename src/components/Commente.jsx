import { Button, Space, Input } from "antd";
import CustomButon from "./CustomButon";
import { useState } from "react";
const botomProps = {
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
    background: "#ff7200",
    padding: " 0.4rem",
    textAlign: "center",
    fontSize: "medium",
    cursor: "pointer",
    color: " #fff",
};
export default function Commente() {
    const [commentaire, setcommentaire] = useState("");

    const onFinish = (values) => {
        console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <Space.Compact
            style={{
                width: "100%",
            }}
        >
            <Input
                placeholder="Entrez votre commentaire"
                name="commentaire"
                onChange={(text) => setcommentaire(text)}
            />
            <CustomButon
                title="Envoyer"
                type="butomFillPrimaryLeft"
                stylePropes={botomProps}
                onClicked={onFinish} // Appel de la fonction
            />
        </Space.Compact>
    );
}

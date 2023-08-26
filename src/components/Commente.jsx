import { Button, Space, Input } from "antd";
import CustomButon from "./CustomButon";
import { useState } from "react";

const botomProps = {
  borderTopRightRadius: "20px",
  borderBottomRightRadius: "20px",
  background: "#ff7200",
  padding: "0.4rem",
  textAlign: "center",
  fontSize: "medium",
  cursor: "pointer",
  color: "#fff",
};

export default function Commente() {
  const [commentaire, setCommentaire] = useState("");

  const handleCommentChange = (event) => {
    setCommentaire(event.target.value); // Mettre à jour le state avec la valeur du champ
  };

  const onFinish = () => {
    console.log("Commentaire:", commentaire);
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
        onChange={handleCommentChange} // Utiliser la fonction de gestion de changement
      />
      <CustomButon
        title="Envoyer"
        type="butomFillPrimaryLeft"
        stylePropes={botomProps}
        onClicked={onFinish}
      />
    </Space.Compact>
  );
}

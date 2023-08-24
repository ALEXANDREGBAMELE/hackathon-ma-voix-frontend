import React from "react";
import { Avatar } from "antd";
import "./InfoUserCard.css"; // Assurez-vous d'importer le fichier de styles approprié

const user = {
  photoUrl: "https://www.koaci.com/assets/news/thumbnails/1500/2023/05/photo_1683720735.jpg",
  firstName: "Jean Marc",
  lastName: "Yace",
  email: "yacejeanmarc@gmail.com",
  description: "Maire de la commune de cocody",
};

const UserInfoCard = () => {
  return (
    <div className="user-info-card">
      <div className="user-photo">
        <Avatar size={150} src={user.photoUrl} />
      </div>
      <div className="user-details">
        <h2 className="user-name">
          {user.firstName} {user.lastName}
        </h2>
        <p className="user-email">{user.email}</p>
        <p className="user-description">{user.description}</p>
      </div>
    </div>
  );
};

export default UserInfoCard;

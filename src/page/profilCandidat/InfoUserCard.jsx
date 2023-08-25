import React from "react";
import { Avatar } from "antd";


const user = {
  photoUrl: "https://www.koaci.com/assets/news/thumbnails/1500/2023/05/photo_1683720735.jpg",
  firstName: "Jean Marc",
  lastName: "Yace",
  email: "yacejeanmarc@gmail.com",
  description: "Maire de la commune de cocody",
};

const UserInfoCard = () => {
  return (
    <div className="user-info-card" style={{ backgroundColor: "", display: "flex", padding: ".5rem" }}>
      <div className="user-photo" style={{ width: "50%", justifyContent: "center", textAlign: "end",backgroundColor:"#e0e0e0" }}>
        <img size={150} src={user.photoUrl} style={{ marginRight: "" }} />
      </div>
      <div className="user-details" style={{ width: "50%", textAlign: "center", backgroundColor: "#027314", color:"white" }}>
        <h2 className="user-name" style={{ fontSize: "28px", marginTop: "2rem" }}>
          {user.firstName} {user.lastName}
        </h2>
        <p className="user-email">{user.email}</p>
        <p className="user-description" style={{ fontSize: "25px", marginTop: "1rem" }}>{user.description}</p>
        <div className="vision" style={{ border: "1px green solid", height: "300px", width: "550px", marginLeft: "15rem", marginTop: "2rem" }}>
          <h3 style={{ borderBottom: "solid 5px green", padding: "1rem",backgroundColor:"#ff7200", fontSize:"28px" }}>Vision</h3>
          <hr />
          <p style={{ padding: "1rem", fontSize: "18px", backgroundColor:"#" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora libero odio necessitatibus culpa cupiditate! Aliquam similique ratione natus. Quia veritatis, fuga recusandae ex laborum molestias doloremque quae? Impedit, vel accusamus. <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora libero odio necessitatibus culpa cupiditate! Aliquam similique ratione natus. Quia veritatis, fuga recusandae ex laborum molestias doloremque quae? Impedit, vel accusamus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserInfoCard;

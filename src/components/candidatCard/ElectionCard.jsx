import {
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import CustomButon from "../CustomButon";
import { useState } from "react";
const { Meta } = Card;
export default function ElectionCard({ candidat }) {
    console.log("candidat", candidat);
    const url =
        candidat.user &&
        candidat.user.photo_url &&
        !candidat.user.photo_url.includes("cloudinary")
            ? `https://lesinnovateurs.me/${candidat.user.photo_url}`
            : candidat.user.photo_url;
    return (
        <Card
            style={{
                width: 300,
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                transition: "0.3s",
                borderRadius: "10px",
                position: "relative",
            }}
            className="election-card"
            cover={
                <img
                    alt="example"
                    src={url}
                    style={{
                        width: "100%",
                        height: "20rem",
                    }}
                />
            }
        >
            <Meta title={candidat.user.nom + " " + candidat.user.prenom} />
            <CustomButon
                stylePropes={{
                    backgroundColor: "#E8950F",
                    color: "#fff",
                    width: "100%",
                    marginTop: "1rem",
                }}
                title="Voter"
            />
            <img
                src={
                    candidat.parti_politique
                        ? `https://lesinnovateurs.me/${candidat.parti_politique.logo}`
                        : ""
                }
                style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                }}
                alt="photo candidat"
            />
        </Card>
    );
}

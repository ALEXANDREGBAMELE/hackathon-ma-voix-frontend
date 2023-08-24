import { useState } from "react";
import CustomButon from "../CustomButon";
import { notification } from "antd";

const commun = [
    { name: "Yopougon", id: 1 },
    { name: "Adjame", id: 2 },
    { name: "Cocody", id: 3 },
    { name: "Plateau", id: 4 },
    { name: "Abobo", id: 5 },
    { name: "Koumassi", id: 6 },
    { name: "Marcory", id: 7 },
    { name: "Bingerville", id: 8 },
    { name: "Songon", id: 9 },
    { name: "TreichVille", id: 10 },
    { name: "PortBouet", id: 11 },
    { name: "Attécoubé", id: 12 },
    { name: "Anyama", id: 13 },
];
import { Input } from "antd";
const { TextArea } = Input;
export default function SondageSideBar({ handleClick }) {
    const [select, setSelect] = useState("Yopougon");
    const [avis, setAvis] = useState("");
    
    const clicked = (name) => {
        setSelect(name);
        handleClick(name);
    };
    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (text) => {
        api.success({
            message: "message envoyer",
            description:
                " merci  d'avoir partagé votre avis .",
            placement: "bottomLeft",
        });
    };
    const sendAvis = () => {
        if (avis == "") {
            return;
        }
        setAvis("");
        openNotificationWithIcon("succes");
    };
    return (
        <div className="sidebarCotainer">
            <div className="sideBarTop">
                <div className="title">
                    <h3>Liste des Commune</h3>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        flexWrap: "wrap",
                        width: "100%",
                        gap: ".5rem",
                        padding: "5px",

                    }}
                >
                    {commun.map((item) => {
                        return (
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    flexWrap: "nowrap",
                                }}
                                key={item.id}
                                className="commun"
                            >
                                <div
                                    onClick={() => clicked(item.name)}
                                    className={
                                        select == item.name
                                            ? "butomFillSecondary"
                                            : "butomAoutlin"
                                    }
                                    style={{width:"6.5rem"}}
                                >
                                    <p>{item.name} </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="sideBarBottom sondageSide">
                {contextHolder}
                <div className="title">
                    <h3>Donnez votre avis</h3>
                    <div></div>
                </div>
                <TextArea
                    style={{
                        marginTop: "1rem",
                        height: "60%",
                        marginBottom: "1rem",
                    }}
                    rows={4}
                    placeholder="Donnez votre avis"
                    value={avis}
                    onChange={(e) => setAvis(e.target.value)}
                />
                <div onClick={sendAvis} className="butomAoutlin">
                    <p>Envoyer</p>
                </div>
            </div>
        </div>
    );
}

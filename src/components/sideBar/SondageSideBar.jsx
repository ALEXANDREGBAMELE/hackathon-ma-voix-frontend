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
import CarteInteractif from "../carteInteractif/CarteInteractif";
const { TextArea } = Input;
export default function SondageSideBar({ handleClick, handleCommuneClicked }) {
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
            description: " merci  d'avoir partagé votre avis .",
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
     let styleProps = {
         height: "21rem",
     };
    return (
        <div className="sidebarCotainer">
            <div className="sideBarTopsvg">
                <CarteInteractif styleProps={styleProps} handleCommuneClicked={handleCommuneClicked} />
            </div>

            <div className="sideBarBottom sondageSide">
                {contextHolder}
                <div className="title">
                    <h3>Donnez votre avis</h3>
                    <div></div>
                </div>
                <TextArea
                    style={{
                        marginTop: ".5rem",
                        height: "40%",
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

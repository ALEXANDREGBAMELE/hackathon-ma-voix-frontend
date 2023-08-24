import { React, useState } from "react";
import ListeCommune from "../../components/sideBar/ListeCommune";
import { ShareAltOutlined } from '@ant-design/icons';
import { Button, Radio, Space, Divider, Select, Result } from 'antd';
import CandidatPostForm from './CandidatPostForm';
import Resultat from "../Resultat";



function ProfilCandidat() {
    const contents = [
        <CandidatPostForm />,
        <Resultat/>,

    ];

    const [currentContentIndex, setCurrentContentIndex] = useState(0);

    const handleNextContent = () => {
        setCurrentContentIndex((prevIndex) => (prevIndex + 1) % contents.length);
    };
    return (
        <>
            <div>

                <div className="left-part" style={{ width: "20rem", marginTop: "11px" }}>
                    <div className="top" style={{ borderRadius: "15px", backgroundColor: "white" }}>
                        <img src="https://snedai.com/wp-content/uploads/2022/01/PORTRAIT-PDG-1017x1024.jpg" alt="" />
                    </div>
                    <div className="bottom" style={{ borderRadius: "15px", backgroundColor: "white", marginTop: "15px" }}>
                        <div className="liste-commune">
                            <Button type="primary" shape="round" icon={<ShareAltOutlined />}>
                                Publier Programme
                            </Button>
                            <button onClick={handleNextContent}>Changer le contenu</button>

                    </div>
                </div>
            </div>
            <div className="right-part">
            {contents[currentContentIndex]}
            </div>
        </div >
        </>
    );
}

export default ProfilCandidat;
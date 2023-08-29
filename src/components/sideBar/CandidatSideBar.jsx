/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { news } from "../../data";
import CustomButon from "../CustomButon";
import { Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;
import "./sidebar.css";
import CarteInteractif from "../carteInteractif/CarteInteractif";
export default function CandidatSideBar({ getCandidatByCommunes }) {
    let handleClick = () => {
        
    }
    let styleProps = {
        height:"22rem"
    }
    return (
        <div className="sidebarCotainer">
            <div
                
                className="sideBarTopsvg"
            >
                <CarteInteractif styleProps={styleProps} handleCommuneClicked={getCandidatByCommunes} />
            </div>
        </div>
    );
}

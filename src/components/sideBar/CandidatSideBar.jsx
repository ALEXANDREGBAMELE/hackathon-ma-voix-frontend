import { news, sondages } from "../../data";
import Article from "../Article";
import Sondage from "../Sondage";
import CustomButon from "../CustomButon";
import { Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;
import "./sidebar.css";
import CarteInteractif from "../carteInteractif/CarteInteractif";
export default function CandidatSideBar({ getCandidatByCommunes }) {
    let handleClick = () => {
        
    }
    
    return (
        <div className="sidebarCotainer">
            <div className="sideBarTopsvg">
                <CarteInteractif handleCommuneClicked={getCandidatByCommunes} />
            </div>
            <div className="sideBarBottom">
                <div className="title">
                    <h3>Quelques sondages</h3>
                    <div></div>
                </div>
                {news.map((s) => (
                    <Sondage key={s.id} article={s} />
                ))}
                <div className="botom">
                    <Link to="/sondage">
                        <CustomButon title="Voir plus" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

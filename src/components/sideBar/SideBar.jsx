import { news, sondages } from "../../data";
import Article from "../Article";
import Sondage from "../Sondage";
import CustomButon from "../CustomButon";
import "./sidebar.css";
import CarteInteractif from "../carteInteractif/CarteInteractif";
export default function SideBar() {
    return (
        <div className="sidebarCotainer">
            <div className="sideBarTopsvg">
               <CarteInteractif />
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
                    <CustomButon title="Voir plus" />
                </div>
            </div>
        </div>
    );
}

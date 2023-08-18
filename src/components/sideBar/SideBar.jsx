import { news, sondages } from "../../data";
import Article from "../Article";
import Sondage from "../Sondage";
import CustomButon from "../CustomButon";
import "./sidebar.css";
export default function SideBar() {
    return (
        <div className="sidebarCotainer">
            <div className="sideBarTop">
                <div className="title">
                    <h3>Informations du jour</h3>
                </div>
                {news.map((n) => (
                    <Article key={n.id} article={n} />
                ))}
                <div className="botom">
                    <CustomButon />
                </div>
            </div>
            <div className="sideBarBottom">
                <div className="title">
                    <h3>Quelques sondages</h3>
                    <div></div>
                </div>
                {sondages.map((s) => (
                    <Sondage key={s.id} article={s} />
                ))}
                <div className="botom">
                    <CustomButon />
                </div>
            </div>
        </div>
    );
}

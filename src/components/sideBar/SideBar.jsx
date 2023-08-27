/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import CustomButon from "../CustomButon";
import "./sidebar.css";
import CarteInteractif from "../carteInteractif/CarteInteractif";
export default function SideBar({ handleCarteClick }) {
    let handleClick =async (name) => {
await handleCarteClick(name)
    }
    return (
        <div className="sidebarCotainer">
            <div className="sideBarTopsvg">
                <CarteInteractif handleCommuneClicked={handleClick} />
            </div>
            <div className="sideBarBottom">
                <div className="title">
                    <h3>Quelques sondages</h3>
                    <div></div>
                </div>
                
                <div className="botom">
                    <CustomButon title="Voir plus" />
                </div>
            </div>
        </div>
    );
}

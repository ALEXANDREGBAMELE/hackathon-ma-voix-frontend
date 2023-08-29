/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import CustomButon from "../CustomButon";
import "./sidebar.css";
import CarteInteractif from "../carteInteractif/CarteInteractif";
export default function SideBar({ handleCarteClick }) {
    let handleClick = async (name) => {
        await handleCarteClick(name);
    };
    let styleProps = {
        height: "22rem",
    };
    return (
        <div className="sidebarCotainer">
            <div className="sideBarTopsvg">
                <CarteInteractif
                    styleProps={styleProps}
                    handleCommuneClicked={handleClick}
                />
            </div>
        </div>
    );
}

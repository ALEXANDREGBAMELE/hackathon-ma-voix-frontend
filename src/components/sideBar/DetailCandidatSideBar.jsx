import { news, sondages } from "../../data";
import Article from "../Article";
import Sondage from "../Sondage";
import CustomButon from "../CustomButon";
import { Card } from "antd";
const { Meta } = Card;
export default function DetailCandidatSideBar() {
    return (
        <div style={{ width: "85%" }} className="sidebarCotainer">
            <div className="sideBarTop">
                <Card
                    hoverable
                    style={{
                        width: "100%",
                    }}
                    cover={
                        <img
                            alt="example"
                            src="https://snedai.com/wp-content/uploads/2022/01/PORTRAIT-PDG-1017x1024.jpg"
                            style={{
                                width: "80%",
                                height: "8rem",
                                objectFit: "fill",
                                alignSelf: "center",
                            }}
                        />
                    }
                >
                    <Meta
                        title="BICTOGO"
                        description="Adama Bictogo (né le 14 décembre 1962), est un homme d'affaires et homme politique ivoirien. Il est le fondateur de l'entreprise Snedai Il est le secrétaire exécutif ."
                        style={{
                            textAlign: "center",
                            borderTop: "5px solid #027314",
                        }}
                    />
                    <div className="candidatStatusContainer">
                        <span>Status</span>
                        <p>Président de l’assemblé Nationnale</p>
                    </div>
                </Card>
            </div>
            <div className="sideBarBottom">
                <div className="title">
                    <h4>Voici les autres candidats de Cocody</h4>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                        }}
                    >
                        <img
                            src="./yace.jpg"
                            alt=""
                            style={{
                                height: "2rem",
                                width: "2rem",
                                borderRadius: "50%",
                            }}
                        />
                        <img
                            src="./yace.jpg"
                            alt=""
                            style={{
                                height: "2rem",
                                width: "2rem",
                                borderRadius: "50%",
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

import { candidats, news, sondages } from "../../data";
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
                        title=" ADAMA BICTOGO"
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
                    <h4>Quelques candidats de Cocody</h4>
                    <div></div>
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        width: "100%",
                        marginTop: ".5rem",
                        flexWrap: "wrap",
                        gap: ".3rem",
                    }}
                >
                    {candidats.slice(0, 4).map((c) => (
                        <div key={c.id} className="imgCan">
                            <img
                                src={c.img_url}
                                alt=""
                                style={{
                                    height: "3rem",
                                    width: "3rem",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                }}
                            />
                            <span>{ c.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

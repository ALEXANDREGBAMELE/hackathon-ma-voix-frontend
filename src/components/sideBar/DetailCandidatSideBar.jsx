import { useParams } from "react-router-dom";
import { Card } from "antd";
const { Meta } = Card;

export default function DetailCandidatSideBar({candidats}) {
    const { id } = useParams();
    const candidat = candidats.find((c) => c.user_id == id);

    return (
        <div style={{ width: "85%" }} className="sidebarCotainer">
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
                    {candidats.filter((c)=> c.user?.commune ==candidat?.commune).map((c) => (
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
                            <span>{c.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

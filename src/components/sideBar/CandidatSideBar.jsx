import { news, sondages } from "../../data";
import Article from "../Article";
import Sondage from "../Sondage";
import CustomButon from "../CustomButon";
import { Card } from "antd";
const { Meta } = Card;
import "./sidebar.css";
export default function CandidatSideBar() {
    return (
        <div className="sidebarCotainer">
            <div className="sideBarTop">
                <Card
                    hoverable
                    style={{
                        width: "100%",
                    }}
                    cover={
                        <img
                            alt="example"
                            src="./abj.png"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                alignSelf: "center",
                            }}
                        />
                    }
                >
                    
                </Card>
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

import CustomButon from "../CustomButon";
import { SmallDashOutlined, EyeOutlined } from "@ant-design/icons";
export default function CandidatCard({ candidat }) {
    return (
        <div
            style={{
                width: "300px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
                height: "210px",
                padding: "1rem",
                justifyContent: "space-between",
            }}
        >
            <div
                className="topCard"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <div
                    className="userName"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <img
                        src="./pont.jpg"
                        alt=""
                        style={{
                            width: "2.5rem",
                            height: "2.5rem",
                            borderRadius: "50%",
                            marginRight: "1rem",
                        }}
                    />
                    {candidat.name}
                </div>
                <img
                    src="./rhd.jpg"
                    alt=""
                    style={{
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "5%",
                    }}
                />
            </div>
            <div
                className="centerCard"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <span
                    style={{
                        fontSize: "1rem",
                    }}
                >
                    Commune :
                </span>
                <p> {candidat.commune} </p>
            </div>
            <div
                className="botomCard"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <CustomButon type="fill" title="26/12/2023" />
                <CustomButon type="fillPrimary" title="voir plus">
                    <EyeOutlined />
                </CustomButon>
            </div>
        </div>
    );
}

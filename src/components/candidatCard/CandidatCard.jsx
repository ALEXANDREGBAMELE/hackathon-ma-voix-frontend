import CustomButon from "../CustomButon";
import { SmallDashOutlined, EyeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import MuyButon from "../MuyButon";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {followCandidat, getFollowedCandidats, unfollowCandidat} from "../../app/services/public.js";

export default function CandidatCard({ candidat }) {
    const navigation = useNavigate();
    const [isFollowing, setIsFollowing] = useState(false);
    const userToken = useSelector((state) => state.auth.token);
    const url = candidat.user && candidat.user.photo_url && !candidat.user.photo_url.includes("cloudinary")
        ? `https://lesinnovateurs.me/${candidat.user.photo_url}`
        : candidat.user.photo_url;


    useEffect(() => {
        const checkFollowingStatus = async () => {
            try {
                if (!userToken) return;
                const response = await getFollowedCandidats(userToken);
                const followedCandidats = response.data;

                const isFollowed = followedCandidats.some(
                    (candidatData) => candidatData.id_candidat === candidat.id
                );

                setIsFollowing(isFollowed);
            } catch (error) {
                console.error("Erreur lors de la vérification du suivi du candidat:", error);
            }
        };

        checkFollowingStatus().then(r => r);
    }, [candidat.id, userToken]);


    const handleFollowClick = async () => {
        try {
            if (isFollowing) {
                await unfollowCandidat(candidat.id, userToken);
                setIsFollowing(false);
            } else {
               const response = await followCandidat(candidat.id, userToken);
                setIsFollowing(true);
            }
        } catch (error) {
            console.error("Erreur lors de la gestion du suivi du candidat:", error);
        }
    };
    const handleClick = () => {
        navigation(`/candidat/${candidat.id}`);
    };

    return (
        <div
            style={{
                width: "300px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
                height: "16rem",

                justifyContent: "space-between",
                backgroundImage: `url("${url}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
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
                        width: "100%",
                    }}
                >
                    <img
                        src={
                            candidat.parti_politique
                                ? `https://lesinnovateurs.me/${candidat.parti_politique.logo}`
                                : ""
                        }
                        style={{ width: "2.5rem", height: "2.5rem" }}
                        alt=""
                    />
                </div>
            </div>

            <div
                className="botomCard"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "column",
                    background: "rgba(2, 2, 2, 0.2)",
                    backdropFilter: "blur(2px)",
                    color: "#fff",
                    fontWeight: "bold",
                }}
            >
                <div
                    className="centerCard"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <span
                        style={{
                            fontSize: "1.5rem",
                        }}
                    >
                        {candidat.user.nom} {candidat.user.prenom}
                    </span>
                    <p> {candidat.user.commune} </p>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        padding: "0.5rem",
                    }}
                >
                    <CustomButon
                        onClicked={handleFollowClick}
                        type="fill"
                        title={isFollowing ? "se désabonner" : "suivre"}
                        width="50%"
                    />
                    <CustomButon
                        onClicked={handleClick}
                        type="fillPrimary"
                        title="Voir Détails"
                        width="50%"
                    />
                </div>
        </div>
    </div>
    );

}

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, message } from "antd";
import {
  EyeOutlined,
  UserDeleteOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  followCandidat,
  getFollowedCandidats,
  unfollowCandidat,
} from "../../app/services/public.js";
import { getFollowersById } from "../../app/services/candidat.js";

export default function CandidatCard({ candidat }) {
  const navigation = useNavigate();
  const [isFollowing, setIsFollowing] = useState(false);
  const userToken = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("logUser"));
  const [totalfollower, setTotalfollower] = useState(
    candidat.followers && candidat.followers.length > 0
      ? candidat.followers.length
      : 0
  );
  const isFollowingThis =
    candidat.followers && candidat.followers.length > 0
      ? candidat.followers.some((follower) => follower.id_user === user.id)
      : false;
  const [messageApi, contextHolder] = message.useMessage();

  const url =
    candidat.user &&
    candidat.user.photo_url &&
    !candidat.user.photo_url.includes("cloudinary")
      ? `https://lesinnovateurs.me/${candidat.user.photo_url}`
      : candidat.user.photo_url;

  useEffect(() => {
    const checkFollowingStatus = async () => {
      try {
        if (!userToken) return;
        const response = await getFollowedCandidats(userToken);
        const followedCandidats = response.followings;

        if (followedCandidats.length === 0) {
          setIsFollowing(false);
          return;
        }
        const isFollowed = followedCandidats.some(
          (candidatData) => candidatData.id_candidat === candidat.id
        );

        setIsFollowing(isFollowed);
      } catch (error) {
        console.error(
          "Erreur lors de la vérification du suivi du candidat:",
          error
        );
      }
    };

    checkFollowingStatus().then((r) => r);

    const getFollwersByIdCandidat = async () => {
      try {
        const response = await getFollowersById(candidat.id);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des followers du candidat:",
          error
        );
      }
    };
    getFollwersByIdCandidat().then((r) => r);
  }, [candidat.id, userToken, totalfollower]);

  const handleFollowClick = async () => {
    try {
      if (!userToken) {
        messageApi.error("Vous devez être connecté pour suivre un candidat");
        return;
      }
      if (isFollowing) {
        await unfollowCandidat(user.id, candidat.id, userToken);
        setIsFollowing(false);
        setTotalfollower((prevTotal) => Math.max(prevTotal - 1, 0)); // Mettre à jour le total en le réduisant de 1 (au minimum 0)
      } else {
        const response = await followCandidat(user.id, candidat.id, userToken);
        if (response.success) {
          setIsFollowing(true);
          setTotalfollower((prevTotal) => prevTotal + 1); // Mettre à jour le total en l'augmentant de 1
        }
      }
    } catch (error) {
      console.error("Erreur lors de la gestion du suivi du candidat:", error);
    }
  };

  const handleClick = () => {
    navigation(`/candidat/${candidat.id}`);
  };

  return (
    <div className="candi-card" 
      style={{
                backgroundImage: `url("${url}")`,

      }}
        
    >
      <div className="candi-topCard">
        <div className="candi-userName">
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

      <div className="candi-botomCard">
        <div>
          <span
            style={{
              fontSize: "1.5rem",
            }}
          >
            {candidat.user.nom} {candidat.user.prenom}
          </span>
          <p> {candidat.user.commune} </p>
        </div>
        <div className="candi-buttonGroup">
          {contextHolder}
          <Button
            onClick={handleFollowClick}
            type="default"
            shape="circle"
            size="large"
            className={
              isFollowing ? "candi-unfollowButton" : "candi-followButton"
            }
            icon={isFollowing ? <UserDeleteOutlined /> : <UserAddOutlined />}
          />
          <div style={{ fontSize: "0.8rem" }}>{totalfollower} Followers</div>
        </div>
      </div>
    </div>
  );
}

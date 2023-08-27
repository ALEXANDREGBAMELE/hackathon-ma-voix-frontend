/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
    LikeOutlined,
    LikeFilled,
    EditOutlined,
    SendOutlined,
    MessageFilled,
} from "@ant-design/icons";
import { Avatar, Card, Button, message, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
    getAllPostLikes,
    addLike,
    removeLike,
    getPostComments,
} from "../../app/services/public";
import {
    incrementLikes,
    decrementLikes,
    addPost,
} from "../../features/postSlice";
import { curentUser, token } from "../../features/auth/authSlice";
import { Navigate, useNavigate } from "react-router-dom";
import Commente from "../Commente";
import ImageModal from "./ImageModal";
import CommentModal from "./CommentModal";
// import "./NewsCard.css";

const { Meta } = Card;

export const NewsCard = ({ post }) => {
    const url = `https://lesinnovateurs.me/${post.url_media}`;
    const [totalLikes, setTotalLikes] = useState(0);
    const [totalComments, setTotalComments] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [showFullText, setShowFullText] = useState(false);
    const [showImageModal, setShowImageModal] = useState(false);
    const [showCommentModal, setShowCommentModal] = useState(false);

    const dispatch = useDispatch();
    const User = JSON.parse(localStorage.getItem("logUser"));
    let tokenUser = JSON.parse(localStorage.getItem("token"));

    const photo_candidat = post.candidat.user.photo_url && !post.candidat.user.photo_url.includes("cloudinary") ? `https://lesinnovateurs.me/${post.candidat.user.photo_url}` : post.candidat.user.photo_url;

    useEffect(() => {
        const fetchData = async () => {
            // Fetch likes
            const allPostLikes = (await getAllPostLikes(post.id)).data.data;
            setTotalLikes(allPostLikes.length);
            const userLiked = allPostLikes.some(
                (like) => like.id_user == User?.id
            );
            setIsLiked(userLiked);

            try {
                const response = await getPostComments(post.id);
                if (response.data.message === "Pas de commentaires") {
                    setTotalComments(0); // Aucun commentaire trouvé
                } else {
                    setTotalComments(response.data.data.length);
                }
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des commentaires :",
                    error
                );
            }
        };

        fetchData();
    }, [totalComments, totalLikes]);

    const [messageApi, contextHolder] = message.useMessage();

  const handleLike = async () => {
    if (!User) {
      await messageApi.open({
        type: "error",
        content: "vous devez vous connecter pour effectuer cette action",
      });
      return;
    }

    try {
      if (isLiked) {
        const unlike = await removeLike(User.id, post.id, tokenUser);
        if (unlike.success) {
          setIsLiked(false);
          setTotalLikes(totalLikes - 1);
          dispatch(decrementLikes(post.id));
        } else {
          await messageApi.open({
            type: "warning",
            content: "Une erreur s'est produite lors de la gestion du like.",
          });
        }
      } else {
        const like = await addLike(User.id, post.id, tokenUser);
        console.log(like);
        if (like.success) {
          setIsLiked(true);
          setTotalLikes(totalLikes + 1);
          dispatch(incrementLikes(post.id));
        } else {
          await messageApi.open({
            type: "warning",
            content: "Une erreur s'est produite lors de la gestion du like.",
          });
        }
      }
    } catch (error) {
      console.error("Erreur lors de la gestion du like :", error);
      await messageApi.open({
        type: "warning",
        content: "Une erreur s'est produite lors de la gestion du like.",
      });
    }
  };

  return (
    <Card
      className={`facebook-post-card animated fadeIn ${showFullText ? "expanded-card" : ""}`}
    >
      <div className="post-content">
        <div className="post-header">
          {contextHolder}
          <div className="post-avatar">
            <Avatar src={photo_candidat} />
          </div>
          <div className="post-title">{post.titre}</div>
        </div>
        <div className={`post-text ${showFullText ? "expanded-text" : ""}`}>
          {showFullText || post.description.length <= 150
            ? post.description
            : post.description.slice(0, 150) + "..."}
          {post.description.length > 150 && (
            <span
              className="see-more badge"
              onClick={() => setShowFullText(!showFullText)}
            >
              {showFullText ? "Voir moins" : "Voir plus"}
            </span>
          )}
        </div>
      </div>
      <div
        className="post-image-container animated fadeInLeft"
        onClick={() => setShowImageModal(true)}
      >
        <img
          src={`https://lesinnovateurs.me/${post.url_media}`}
          alt="Image du post"
          className="post-image"
        />
      </div>
      <div className="action-buttons">
        <Button
          onClick={handleLike}
          className={`like-button ${isLiked ? "liked" : ""}`}
          icon={isLiked ? <LikeFilled /> : <LikeOutlined />}
          key="like"
        >
          {totalLikes}
        </Button>
        <Button
          icon={<MessageFilled />}
          onClick={() => setShowCommentModal(true)}
          key="comment"
          className="comment-button"
        >
          {totalComments}
        </Button>

                <Button
                    icon={<SendOutlined />}
                    key="share"
                    className="share-button"
                />
            </div>

            <CommentModal
                postId={post.id}
                visible={showCommentModal}
                onClose={() => setShowCommentModal(false)}
            />
            <ImageModal
                open={showImageModal}
                imageUrl={`https://lesinnovateurs.me/${post.url_media}`}
                onClose={() => setShowImageModal(false)}
            />
        </Card>
    );
};

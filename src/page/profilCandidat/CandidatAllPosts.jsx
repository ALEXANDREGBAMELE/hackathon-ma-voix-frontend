import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Avatar, Button, Card, message } from "antd";
import {
  LikeFilled,
  LikeOutlined,
  MessageFilled,
  SendOutlined,
} from "@ant-design/icons";
import CommentModal from "../../components/candidatCard/CommentModal.jsx";
import ImageModal from "../../components/candidatCard/ImageModal.jsx";
import { getMyPosts,  } from "../../app/services/candidat.js";
import { getAllPostLikes, getPostComments , removeLike, addLike, addComment} from "../../app/services/public.js";

const CandidatAllPosts = ({post}) => {
  const url = `https://lesinnovateurs.me/${post.url_media}`;
  const [totalLikes, setTotalLikes] = useState(0);
  const [totalComments, setTotalComments] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);

  //s'il n'y aucun post, display le empty icon
  const [emptyPost, setEmptyPost] = useState(false);

  const containsHtmlTags = /<[^>]*>/.test(post.description);

  const dispatch = useDispatch();
  const User = JSON.parse(localStorage.getItem("logUser"));
  let tokenUser = JSON.parse(localStorage.getItem("token"));

  const photo_candidat =
    post.candidat.user.photo_url &&
    !post.candidat.user.photo_url.includes("cloudinary")
      ? `https://lesinnovateurs.me/${post.candidat.user.photo_url}`
      : post.candidat.user.photo_url;

  const url_media =
    post.url_media && !post.url_media.includes("cloudinary")
      ? `https://lesinnovateurs.me/${post.url_media}`
      : post.url_media;

  useEffect(() => {
    const fetchData = async () => {
      // Fetch likes
      const allPostLikes = (await getAllPostLikes(post.id)).data.data;
      setTotalLikes(allPostLikes.length);
      const userLiked = allPostLikes.some((like) => like.id_user == User?.id);
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

  const handleAvatarClick = async () => {
    window.location.href = `/candidat/${post.candidat.id}`;
  };

  return (
    <Card
      className={`facebook-post-card animated fadeIn ${
        showFullText ? "expanded-card" : ""
      }`}
    >
      <div className="post-content">
        <div className="post-header">
          {contextHolder}
          <div className="post-avatar">
            <a onClick={handleAvatarClick}>
              <Avatar src={photo_candidat} />
              <span className="candidat-name badge success">
                {post.candidat.user.nom + " " + post.candidat.user.prenom}
              </span>
            </a>
          </div>
          <div className="post-title">{post.titre}</div>
        </div>
        <div className={`post-text ${showFullText ? "expanded-text" : ""}`}>
          {containsHtmlTags ? (
            <div
              dangerouslySetInnerHTML={{ __html: post.description }}
              className="html-content"
            />
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
      <div
        className="post-image-container animated fadeInLeft"
        onClick={() => setShowImageModal(true)}
      >
        <img
          src={url_media}
          style={{
            maxHeight: "25rem",
            objectFit: "cover",
          }}
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

        <Button icon={<SendOutlined />} key="share" className="share-button" />
      </div>

      <CommentModal
        postId={post.id}
        visible={showCommentModal}
        onClose={() => setShowCommentModal(false)}
      />
      <ImageModal
        open={showImageModal}
        imageUrl={url}
        onClose={() => setShowImageModal(false)}
      />
    </Card>
  );
};
export default CandidatAllPosts;

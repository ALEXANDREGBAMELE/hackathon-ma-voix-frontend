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
import { getMyPosts } from "../../app/services/candidat.js";
import { getAllPostLikes, getPostComments } from "../../app/services/public.js";

const CandidatAllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [showFullText, setShowFullText] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [emptyPost, setEmptyPost] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const dispatch = useDispatch();
  const User = JSON.parse(localStorage.getItem("logUser"));
  const tokenUser = JSON.parse(localStorage.getItem("token"));

  const photo_candidat =
    User.photo_url && !User.photo_url.includes("cloudinary")
      ? `https://lesinnovateurs.me/${User.photo_url}`
      : User.photo_url;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getMyPosts();
        if (response.message || !response.posts) {
          setPosts([]);
          return;
        }
        console.log("response posts", response.posts);
        setPosts(response.posts);
      } catch (error) {
        console.error("Erreur lors de la récupération des posts :", error);
      }
    };

    fetchPosts();
  }, []);

  const handleLike = async (post) => {
    const response = await getAllPostLikes(post.id);
    const response2 = await getPostComments(post.id);

    if (response.message || !response.likes) {
      return;
    }

    if (response2.message || !response2.comments) {
      return;
    }

    const updatedPosts = posts.map((p) => {
      if (p.id === post.id) {
        return {
          ...p,
          isLiked: !p.isLiked,
          totalLikes: response.likes.length,
          totalComments: response2.comments.length,
        };
      }
      return p;
    });

    setPosts(updatedPosts);
  };

  const handleComment = (post) => {
    setShowCommentModal(true);
    setSelectedPost(post.id);
  };

  const handleImageClick = (url) => {
    setShowImageModal(url);
  };

  return (
    <>
      {posts.length === 0 ? (
        <Card className="facebook-post-card no-posts">No posts available.</Card>
      ) : (
        posts.map((post) => (
          <Card
            key={post.id}
            className={`facebook-post-card animated fadeIn ${
              showFullText ? "expanded-card" : ""
            }`}
          >
            <div className="post-content">
              <div className="post-header">
                {contextHolder}
                <div className="post-avatar">
                  <a>
                    <Avatar src={photo_candidat} />
                    <span className="candidat-name badge success">
                      {post.candidat.user.nom + " " + post.candidat.user.prenom}
                    </span>
                  </a>
                </div>
                <div className="post-title">{post.titre}</div>
              </div>
              <div
                className={`post-text ${showFullText ? "expanded-text" : ""}`}
              >
                {post.description.includes("< >") ? (
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
                src={
                  post.url_media && !post.url_media.includes("cloudinary")
                    ? `https://lesinnovateurs.me/${post.url_media}`
                    : post.url_media
                }
                alt="Image du post"
                className="post-image"
              />
            </div>
            <div className="action-buttons">
              <Button
                onClick={() => handleLike(post)}
                className={`like-button ${post.isLiked ? "liked" : ""}`}
                icon={post.isLiked ? <LikeFilled /> : <LikeOutlined />}
                key="like"
              >
                {post.totalLikes}
              </Button>
              <Button
                icon={<MessageFilled />}
                onClick={() => handleComment(post)}
                key="comment"
                className="comment-button"
              >
                {post.totalComments}
              </Button>
              <Button
                icon={<SendOutlined />}
                key="share"
                className="share-button"
              />
            </div>
            <CommentModal
              postId={post.id}
              visible={showCommentModal && selectedPost === post.id}
              onClose={() => setShowCommentModal(false)}
            />
            <ImageModal
              open={showImageModal}
              imageUrl={
                post.url_media && !post.url_media.includes("cloudinary")
                  ? `https://lesinnovateurs.me/${post.url_media}`
                  : post.url_media
              }
              onClose={() => handleImageClick(false)}
            />
          </Card>
        ))
      )}
    </>
  );
};

export default CandidatAllPosts;

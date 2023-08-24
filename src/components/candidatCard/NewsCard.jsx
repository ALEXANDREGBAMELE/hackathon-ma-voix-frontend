import React, { useState, useEffect } from "react";
import { EditOutlined, SendOutlined, LikeOutlined } from "@ant-design/icons";
import { Avatar, Card, Button } from "antd";
import { useSelector } from "react-redux";
import { getAllPostLikes, addLike, removeLike } from "../../app/publicApi/public";
import { Navigate } from "react-router-dom";

const { Meta } = Card;

export const NewsCard = ({ post }) => {
  const user = useSelector((state) => state.auth.isLoggedIn);
  const User = useSelector((state) => state.auth.user);
  const tokenUser = useSelector((state) => state.auth.token);
  const [likesCount, setLikesCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    const fetchLikesAndCheckLike = async () => {
      try {
        const response = await getAllPostLikes(post.id);
        setLikesCount(response.data.data.length);

        if (user && User && User.id) {
          const userLiked = response.data.data.some(
            (like) => like.id_user === User.id
          );
          setHasLiked(userLiked);
        }
      } catch (error) {
        console.error("Error fetching likes:", error);
      }
    };

    fetchLikesAndCheckLike();
  }, [post.id, user, User]);

  const handleLike = async () => {
    if (user) {
      try {
        if (hasLiked) {
            const response = await removeLike(User.id, post.id, tokenUser);
            console.log(response);
        } else {
          const response = await addLike(User.id, post.id, tokenUser);
          console.log(response);
        }
        setHasLiked(!hasLiked); // Toggle hasLiked state
      } catch (error) {
        console.error("Error liking post:", error);
      }
    } else {
      // Redirect to login page
      Navigate("/login");
    }
  };

  return (
    <Card
      style={{
        width: "40rem",
        marginBottom: "1.5rem",
        padding: "1rem",
      }}
      actions={[
        <Button
          icon={<LikeOutlined style={{ color: hasLiked ? "blue" : "unset" }} />}
          onClick={handleLike}
          key="like"
        >
          {user && hasLiked ? "Unlike" : "Like"} {likesCount}
        </Button>,
        <Button icon={<EditOutlined />} key="comment">
          Commenter
        </Button>,
        <Button icon={<SendOutlined />} key="share">
          Partager
        </Button>,
      ]}
    >
      <Meta
        avatar={
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
        }
        title={post.titre}
        description={post.description}
      />
      <img
        src={`https://lesinnovateurs.me/${post.url_media}`}
        style={{
          width: "100%",
          height: "10rem",
          margin: "1rem",
          objectFit: "contain",
        }}
        alt="Image du post"
      />
    </Card>
  );
};

import React, { useState, useEffect } from "react";
import {
  LikeOutlined,
  LikeFilled,
  EditOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPostLikes,
  addLike,
  removeLike,
} from "../../app/publicApi/public";
import {
  incrementLikes,
  decrementLikes,
  addPost,
} from "../../features/postSlice";
import { curentUser, token } from "../../features/auth/authSlice";
import { Navigate } from "react-router-dom";

const { Meta } = Card;

export const NewsCard = ({ post }) => {
  const [totalLikes, setTotalLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const User = useSelector(curentUser);
  let tokenUser = useSelector(token);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchLikesAndCheckLike = async () => {
      const allPostLikes = (await getAllPostLikes(post.id)).data.data;
      setTotalLikes(allPostLikes.length);

      const userLiked = allPostLikes.some((like) => like.id_user === User?.id);
      setIsLiked(userLiked);
    };

    fetchLikesAndCheckLike();
  }, [post.id, User]);

  const handleLike = async () => {
    if (!User) {
      Navigate("/login");
      return;
    }

    try {
      if (isLiked) {
        const unlike = await removeLike(User.id, post.id, tokenUser);
        console.log(unlike);
        if (unlike.success) {
            setIsLiked(false);
            setTotalLikes(totalLikes - 1);
            dispatch(decrementLikes(post.id));
        } else {
            alert("Une erreur s'est produite lors de la gestion du like.");
            }

        
      } else {
        const like = await addLike(User.id, post.id, tokenUser);
        console.log(like);
        if (like.success) {
            setIsLiked(true);
            setTotalLikes(totalLikes + 1);
            dispatch(incrementLikes(post.id));
        } else {
            alert("Une erreur s'est produite lors de la gestion du like.");
            }
      }
    } catch (error) {
      console.error("Erreur lors de la gestion du like :", error);
      alert("Une erreur s'est produite lors de la gestion du like.");
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
          onClick={handleLike}
          icon={isLiked ? <LikeFilled /> : <LikeOutlined />}
          key="like"
        >
          {isLiked ? "Unlike" : "Like"} {totalLikes}
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

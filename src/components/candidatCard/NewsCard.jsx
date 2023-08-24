import React, { useState, useEffect } from "react";
import { EditOutlined, SendOutlined, LikeOutlined } from "@ant-design/icons";
import { Avatar, Card, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
    getAllPostLikes,
    addLike,
    removeLike,
} from "../../app/publicApi/public";
import { Navigate } from "react-router-dom";
import {
    incrementLikes,
    decrementLikes,
    addPost,
} from "../../features/postSlice";
import { curentUser, token } from "../../features/auth/authSlice";

const { Meta } = Card;

export const NewsCard = ({ post }) => {
    const [totalLikes, setTotalLikes] = useState(0);
    const posts = useSelector((state) => state.post.posts);
    const User = useSelector(curentUser);
    let tokenUser = useSelector(token);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchLikesAndCheckLike = async () => {
            let isLiked = false;
            const allPostLikes = (await getAllPostLikes(post.id)).data.data;
            //    check if allpostlikes contains the user id
            setTotalLikes(allPostLikes.length);
            allPostLikes.forEach((like) => {
                if (like.id_user == User?.id) {
                    isLiked = true;
                }
            });
            console.log(allPostLikes);
            const postLikes = {
                id: post.id,
                likes: allPostLikes.length,
                isLiked: isLiked,
            };
            console.log(postLikes);

            await dispatch(addPost(postLikes));
            console.log(posts);
        };

        fetchLikesAndCheckLike();
    }, []);
    const handleLike = async () => {
        if (!User) {
            alert("vous devez vous connecter pour aimer");
            return;
        }
        if (posts.find((p) => p.id == post.id).isLiked) {
            await removeLike(User.id, post.id, tokenUser);
            dispatch(decrementLikes(post.id));
        } else {
            await addLike(User.id, post.id, tokenUser);
            dispatch(incrementLikes(post.id));
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
                <Button onClick={handleLike} icon={<LikeOutlined />} key="like">
                    like {totalLikes}
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

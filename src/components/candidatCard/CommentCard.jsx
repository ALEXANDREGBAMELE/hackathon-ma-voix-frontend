import React, { useState, useEffect } from "react";
import { Avatar, Comment, Tooltip } from "antd";
import { useSelector } from "react-redux";
import { getPostComments } from "../../app/publicApi/public";

export const CommentSection = ({ postId }) => {
  const User = useSelector(curentUser);
  let tokenUser = useSelector(token);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await getPostComments(postId);
        setComments(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des commentaires :",
          error
        );
      }
    };

    fetchComments();
  }, [postId]);

  return (
    <div>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          author={comment.user.nom}
          avatar={
            <Avatar src={comment.user.photo_url} alt={comment.user.nom} />
          }
          content={<p>{comment.content}</p>}
          datetime={
            <Tooltip title={comment.created_at}>
              <span>{comment.created_at}</span>
            </Tooltip>
          }
        />
      ))}
    </div>
  );
};

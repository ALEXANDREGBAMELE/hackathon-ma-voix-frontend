import React, { useState, useEffect } from "react";
import { Modal, List, Avatar, Empty, Form, Input, Button} from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import { getPostComments, addComment, deleteComment } from "../../app/services/public";
import "./commentModal.css"
const CommentModal = ({ postId, visible, onClose }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

 //needed data to form , id_post, commentaire

  const user = JSON.parse(localStorage.getItem("logUser"));


  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await getPostComments(postId);
        console.log(response);
        if (response.data.success) {
          setComments(response.data.data);
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des commentaires :",
          error
        );
      }
    };

    if (visible) {
      fetchComments();
    }
  }, [visible, postId]);

  const handleCommentSubmit = async () => {
    // Send the comment to the API
    if (!commentText) {
      return;
    }
    
    if (!user) {
      setCommentText("");
      return;

    }
    const tokenUser = JSON.parse(localStorage.getItem("token"));
    
    const response = await addComment(tokenUser, { "id_post": postId, "commentaire": commentText });
    if (!response.success) {
      setCommentText("");
      console.error("Erreur lors de l'ajout du commentaire :", response);
      return;
    }

    // Fetch the comments again
    const fetchComments = async () => {
      try {
        const response = await getPostComments(postId);
        if (response.success) {
          setComments(response.data);
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des commentaires :",
          error
        );
      }
    };

    fetchComments();

    setCommentText("");
  };

  const handleDeleteComment = async (id) => {
    const tokenUser = JSON.parse(localStorage.getItem("token"));
    console.log(localStorage)
    if (!user) {
     return;
    }
    
    const response = await deleteComment(tokenUser, id);
    console.log(response);
    if (!response.success) {
      console.error("Erreur lors de la suppression du commentaire :", response);
      return;
    }

    const fetchComments = async () => {
      try {
        const response = await getPostComments(postId);
        if (response.success) {
          setComments(response.data);
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des commentaires :",
          error
        );
      }
    };

    fetchComments();
     
  }

  return (
    <Modal title="Commentaires" open={visible} onCancel={onClose} footer={null}>
      {comments.length > 0 ? (
        <List
          dataSource={comments}
          renderItem={(comment) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={
                      comment.user.photo_url ??
                      "https://lesinnovateurs.me/default_user.jpeg"
                    }
                  />
                }
                title={comment.user.nom + " " + comment.user.prenom}
                description={comment.commentaire}
              />
              <div className="badge bg-warning">{comment.created_at}</div>
              {comment.user.id === user?.id && (
                <button
                  className="delete-comment-button"
                  onClick={() => handleDeleteComment(comment.id)}
                 title="supprimer">
                  <DeleteOutlined/> 
                </button>
              )}
            </List.Item>
          )}
        />
      ) : (
        <Empty description="Aucun commentaire pour le moment." />
      )}
      <Form layout="vertical" onFinish={handleCommentSubmit}>
        <Form.Item label="Votre commentaire">
          <input type="hidden" name="id_post" value={postId} />
          <Input.TextArea
            name="commentaire"
            rows={4}
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Ajouter un commentaire
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CommentModal;

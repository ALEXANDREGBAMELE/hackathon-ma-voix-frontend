import React, { useState, useEffect } from "react";
import { Modal, List, Avatar } from "antd";
import { getPostComments } from "../../app/publicApi/public";

const CommentModal = ({ postId, visible, onClose }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
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

    if (visible) {
      fetchComments();
    }
  }, [visible, postId]);

  return (
    <Modal
      title="Commentaires"
      open={visible}
      onCancel={onClose}
      footer={null}
    >
      <List
        dataSource={comments}
        renderItem={(comment) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={comment.user.photo_url} />}
              title={comment.user.nom + " " + comment.user.prenom}
              description={comment.commentaire}
            />
            <div>{comment.created_at}</div>
          </List.Item>
        )}
      />
    </Modal>
  );
};

export default CommentModal;

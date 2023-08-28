// PostCandidat.jsx
import { React, useEffect, useState } from "react";
import { Form, Input, Button, message } from "antd";
import { UploadWidget } from "../../components/UploadWidget";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { addPost } from "../../app/services/candidat.js";
const AjouterPost = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const [content, setContent] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const [titre, setTitre] = useState("");

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleTitleChange = (event) => {
    setTitre(event.target.value);
  };

  const onFinish = (values) => {
    values.url_media = imageUrl;
    console.log(values);
    if (!imageUrl) {
      messageApi.error("Veuillez ajouter une image");
      return;
    }
    if (!content) {
      messageApi.error("Veuillez ajouter du contenu");
      return;
    }
    if (!titre) {
      messageApi.error("Veuillez ajouter un titre");
      return;
    }
    const data = {
      titre: values.titre,
      description: values.description,
      url_media: values.url_media,
    };

    const addPostData = async () => {
      try {
        setLoading(true);
        const response = await addPost(data);
        console.log(response);
        if (response.message) {
          messageApi.error(response.message);
          return;
        }
        messageApi.success("Post ajouté avec succès");
        setContent("");
        setImageUrl("");
        setTitre("");
      } catch (error) {
        console.error("error", error);
        messageApi.error("Erreur lors de l'ajout du post");

      } finally {
        setLoading(false);
      }
    };
    addPostData();
  };

  useEffect(() => {
    console.log("imageUrl", imageUrl);
    setContent("");
    
  
  }, [imageUrl]);


  return (
    <div className="candidat-form">
      <h2>Ajouter un post</h2>
      <Form className="ajouter-post-form" onFinish={onFinish}>
        <Form.Item className="ajouter-post-item" name="titre" label="Titre">
          <Input className="ajouter-post-input" onChange={handleTitleChange} />
        </Form.Item>
        <Form.Item
          className="ajouter-post-item"
          name="description"
          label="Contenu"
        >
          <ReactQuill
            className="ajouter-post-input"
            style={{ height: "200px" }}
            theme="snow"
            value={content}
            onChange={handleContentChange}
          />
        </Form.Item>
        {contextHolder}
        <Form.Item
          name="url_media"
          label="Media"
          className="ajouter-post-item"
          style={{ marginTop: "1rem" }}
        >
          <UploadWidget setImageUrl={setImageUrl} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Poster
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AjouterPost;

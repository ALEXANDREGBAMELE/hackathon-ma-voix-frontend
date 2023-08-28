// PostCandidat.jsx
import {React, useState } from "react";
import { Form, Input, Button } from "antd";
import { UploadWidget } from "../../components/UploadWidget";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const AjouterPost = () => {
  const [imageUrl, setImageUrl] = useState("");

   const [content, setContent] = useState("");

   const handleContentChange = (value) => {
     setContent(value);
   };

   const handleSubmit = () => {
     // Envoyez le contenu à votre backend ou effectuez d'autres actions
     console.log(content);
   };
  const onFinish = (values) => {
    console.log("Form values:", values);
  };
 return (
    <div className="candidat-form">
      <h2>Ajouter un post</h2>
      <Form onFinish={onFinish} className="ajouter-post-form">
        <Form.Item
          className="ajouter-post-item"
          name="title"
          label="Titre"
          rules={[{ required: true, message: "Veuillez entrer un titre!" }]}
        >
          <Input className="ajouter-post-input" />
        </Form.Item>
        <Form.Item
          className="ajouter-post-item"
          name="content"
          label="Contenu"
          rules={[{ required: true, message: "Veuillez entrer du contenu!" }]}
        >
          <ReactQuill value={content} onChange={handleContentChange} />
        </Form.Item>
        <Form.Item name="url_media" label="Media">
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

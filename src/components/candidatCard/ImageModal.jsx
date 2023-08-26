import { Modal } from "antd";

const ImageModal = ({ open, imageUrl, onClose }) => {
  return (
    <Modal open={open} onCancel={onClose} footer={null}>
      <img src={imageUrl} alt="Image en grand" style={{ width: "100%" }} />
    </Modal>
  );
};

export default ImageModal;
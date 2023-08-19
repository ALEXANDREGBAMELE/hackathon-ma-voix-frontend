
import React, { useState } from "react";
import { Button, Modal } from "antd";
export const CustomLoading = ({ children,OpenModal,setOpenModal }) => {
    const [modal2Open, setModal2Open] = useState(false);
    return (
        <Modal
            title="Vertically centered modal dialog"
            centered
            maskClosable={false}
            open={modal2Open}
            onOk={() => setModal2Open(false)}
            onCancel={() => setModal2Open(false)}
            width={1000}
        >
            {children}
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
        </Modal>
    );
};

import React from "react";
import { ShareAltOutlined } from '@ant-design/icons';
import { Button, Radio, Space, Divider, Select } from 'antd';

function ActionsCandidatButtons() {
    (
        <>
            <Button type="primary" shape="round" icon={<ShareAltOutlined />}>
                Publier Programme
            </Button>
            <button onClick={handleNextContent}>Changer le contenu</button>
        </>


    );
}
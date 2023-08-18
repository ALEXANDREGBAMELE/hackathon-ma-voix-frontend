import React, { useState } from "react";
import { Card } from "antd";
import { Tabs } from "antd";
import Sondage from "../../components/Sondage";
import Article from "../../components/Article";

const tabeItems = [
    {
        key: "1",
        label: `Apropo`,
        children: <Article />,
    },
    {
        key: "2",
        label: `Projet`,
        children: <Article />,
    },
    {
        key: "3",
        label: `Portofolio`,
        children: <Article />,
    },
];
const contentListNoTitle = {
    Apropo: <Article />,
    Projet: <p>app content</p>,
    Portofolio: <p>project content</p>,
};
export default function CandidatDetails() {
    const [activeTabKey2, setActiveTabKey2] = useState("1");
   
    const onTab1Change = (key) => {
        setActiveTabKey2(key);
    };
    return (
        <div>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Adama_Bictogo_01.jpg/330px-Adama_Bictogo_01.jpg"
                alt=""
            />
            <Tabs
                defaultActiveKey="1"
                centered
                onChange={onTab1Change}
                items={tabeItems}
            />
        </div>
    );
}

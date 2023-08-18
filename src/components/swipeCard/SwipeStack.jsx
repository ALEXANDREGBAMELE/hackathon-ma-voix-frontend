import React, { useState } from "react";
import "./swipeStack.css";
import TinderCard from "react-tinder-card";
import { candidats } from "../../data";
import CustomButon from "../CustomButon";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";

const cardData = [
    { id: 1, content: "Card 1" },
    { id: 2, content: "Card 2" },
    { id: 3, content: "Card 3" },
    // Ajoutez plus de cartes si nécessaire
];

const SwipeStack = () => {
    const [direction, setDirection] = useState(null);
    const swiped = (dir, cardIndex) => {
        console.log(`Swiped ${dir} on card ${cardIndex}`);
    };
    const outOfFrame = (cardIndex) => {
        console.log(`Card ${cardIndex} left the screen`);
    };
    const handleSwipe = (dir) => {
        setDirection(dir);
    };
    return (
        <div className="swipe-container">
            {cardData.map((card, index) => (
                <TinderCard
                    key={card.id}
                    onSwipe={(dir) => swiped(dir, index)}
                    onCardLeftScreen={() => outOfFrame(index)}
                >
                    <div className="card">
                        {card.content}
                        <div className="button-container">
                            <CustomButon
                                type="fillPrimary"
                                onClicked={() => handleSwipe("left")}
                                title="J'aime pas"
                            >
                                <DislikeOutlined />
                            </CustomButon>
                            <CustomButon
                                type="fill"
                                onClicked={() => handleSwipe("right")}
                                title="J'aime"
                            >
                                <LikeOutlined />
                            </CustomButon>
                        </div>
                    </div>
                </TinderCard>
            ))}
        </div>
    );
};

export default SwipeStack;

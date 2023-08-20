import React, { useMemo, useRef, useState } from "react";
import "./swipeStack.css";
import TinderCard from "react-tinder-card";
import CustomButon from "../CustomButon";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import CustomResult from "../CustomResult";

const sondagess = [
    { id: 1, content: "Card 1" },
    { id: 2, content: "Card 2" },
    { id: 3, content: "Card 3" },
    // Ajoutez plus de cartes si nécessaire
];

const SwipeStack = ({ sondages }) => {
    const [open, setOpen] = useState(true);
    const [direction, setDirection] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(sondages.length - 1);
    const currentIndexRef = useRef(currentIndex);
    const [lastDirection, setLastDirection] = useState();
    const [showResult, setShowResult] = useState(false);

    const childRefs = useMemo(
        () =>
            Array(sondages.length +1)
                .fill(0)
                .map((i) => React.createRef()),
        []
    );
    const updateCurrentIndex = (val) => {
        setCurrentIndex(val);
        currentIndexRef.current = val;
    };

    const canGoBack = currentIndex < sondages.length - 1;

    const canSwipe = currentIndex >= 0;

    // set last direction and decrease current index
    const swiped = (direction, nameToDelete, index) => {
        setLastDirection(direction);
        updateCurrentIndex(index - 1);
    };

    const outOfFrame = (name, idx) => {
        console.log(
            `${name} (${idx}) left the screen!`,
            currentIndexRef.current
        );
        if (idx == 0) {
            setShowResult(true);
        }
        // handle the case in which go back is pressed before card goes outOfFrame
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    };

    const swipe = async (dir) => {
        console.log("swipe", dir);
        console.log(childRefs[1]);
        if (canSwipe && currentIndex < sondages.length) {
            await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
        }
    };

    // increase current index and show card
    const goBack = async () => {
        if (!canGoBack) return;
        const newIndex = currentIndex + 1;
        updateCurrentIndex(newIndex);
        await childRefs[newIndex].current.restoreCard();
    };
    return (
        <div className="swipe-container">
            {!showResult ? (
                sondages.map((character, index) => (
                    <TinderCard
                        ref={childRefs[index]}
                        className="swipe"
                        key={character.id}
                        onSwipe={(dir) => swiped(dir, character.name, index)}
                        onCardLeftScreen={() =>
                            outOfFrame(character.name, index)
                        }
                    >
                        <div className="card">
                            {character.description}
                            <div className="button-container">
                                <CustomButon
                                    type="fillPrimary"
                                    onClicked={() => swipe("left")}
                                    title="J'aime pas"
                                >
                                    <DislikeOutlined />
                                </CustomButon>
                                <CustomButon
                                    type="fill"
                                    onClicked={() => swipe("right")}
                                    title="J'aime"
                                >
                                    <LikeOutlined />
                                </CustomButon>
                            </div>
                        </div>
                    </TinderCard>
                ))
            ) : (
                <CustomResult />
            )}
        </div>
    );
};

export default SwipeStack;

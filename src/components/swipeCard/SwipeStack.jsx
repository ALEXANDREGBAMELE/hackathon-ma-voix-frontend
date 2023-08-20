import React, { useEffect, useMemo, useRef, useState } from "react";
import "./swipeStack.css";
import TinderCard from "react-tinder-card";
import CustomButon from "../CustomButon";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import CustomResult from "../CustomResult";
import { Button, Result } from "antd";
let sondagess;

const SwipeStack = ({ sondages, name }) => {
    const [sondage, setSondage] = useState(sondages);
    const [currentIndex, setCurrentIndex] = useState(sondage.length - 1);
    const currentIndexRef = useRef(currentIndex);
    const [lastDirection, setLastDirection] = useState();
    const [showResult, setShowResult] = useState(false);
    const noSondage = (name) => {
        return (
            <Result
                status="404"
                title={`Aucun sondage pour la commune de ${name} actuellement`}
                subTitle={`vous serez notifié par mail dès qu'un sondage sera disponible pour la commune de ${name}`}
            />
        );
    }
    useEffect(() => {
        const filterSondage = () => {
            let filtreSodage = sondages.filter((s) => s.commune == name);
            setSondage(filtreSodage);
            setShowResult(false);
        };
        filterSondage();
    }, [name]);
    const childRefs = useMemo(
        () =>
            Array(sondage.length)
                .fill(0)
                .map((i) => React.createRef()),
        []
    );
    const updateCurrentIndex = (val) => {
        setCurrentIndex(val);
        currentIndexRef.current = val;
    };

    const canGoBack = currentIndex < sondage.length - 1;

    const canSwipe = currentIndex >= 0;

    // set last direction and decrease current index
    const swiped = (direction, nameToDelete, index) => {
        setLastDirection(direction);
        updateCurrentIndex(index - 1);
    };

    const outOfFrame = (name, idx) => {
        console.log(`${name} (${idx}) left the screen!`);
        if (idx == 0) {
            setShowResult(true);
        }
        // handle the case in which go back is pressed before card goes outOfFrame
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    };

    const swipe = async (dir) => {
        console.log(childRefs[currentIndex]);
        if (canSwipe && currentIndex < sondage.length) {
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
            {sondage.length > 0 ? (
                !showResult ? (
                    sondage.map((character, index) => (
                        <TinderCard
                            ref={childRefs[index]}
                            className="swipe"
                            key={character.id}
                            onSwipe={(dir) =>
                                swiped(dir, character.name, index)
                            }
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
                )
            ) : (
                noSondage(name)
            )}
        </div>
    );
};

export default SwipeStack;

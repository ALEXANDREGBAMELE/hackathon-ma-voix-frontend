import { motion, AnimatePresence } from "framer-motion";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import CustomButon from "../CustomButon";
import CustomResult from "../CustomResult";
import { Button, Result } from "antd";
export default function FramerCard({ sondages, name, choixSondage }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [sondage, setSondage] = useState(sondages);
    const [cardVisible, setCardVisible] = useState(true);
    const [direction, setDirection] = useState(null);
    const noSondage = (name) => {
        return (
            <Result
                status="404"
                title={`Aucun sondage pour la commune de ${name} actuellement`}
                subTitle={`vous serez notifié par mail dès qu'un sondage sera disponible pour la commune de ${name}`}
            />
        );
    };

    useEffect(() => {
        const filterSondage = () => {
            let filtreSodage = sondages.filter((s) => s.commune === name);
            setSondage(filtreSodage);
            setCurrentIndex(0);
            setShowResult(false);
            setCardVisible(true);
        };
        filterSondage();
    }, [name, sondages]);

    const handleSwipe = async (dir) => {
        if (dir === "right") {
            let id = sondage[currentIndex].id;

            let res = await choixSondage(id, true);
            if (!res) {
                return;
            }
        } else {
            let id = sondage[currentIndex].id;
            console.log(id);
            let res = await choixSondage(id, true);
            if (!res) {
                return;
            }
        }
        setDirection(dir);
        setCurrentIndex((prev) => prev + 1);
        setCardVisible(false);
    };

    const handleButtonClick = (dir) => {
        handleSwipe(dir);
        if (currentIndex >= sondage.length - 1) {
            setShowResult(true);
        }
    };

    return (
        <div className="swipe-container">
            {sondage.length > 0 ? (
                <AnimatePresence>
                    {!showResult && sondage[currentIndex] && (
                        <motion.div
                            key={sondage[currentIndex].id}
                            initial={{ opacity: 0.5, y: -200 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{
                                opacity: 0.8,
                                x: !showResult
                                    ? direction === "right"
                                        ? 450
                                        : -450
                                    : 0,
                            }}
                            transition={{ duration: 0.9 }}
                        >
                            <div className="card">
                                {sondage[currentIndex].description}
                                <div className="button-container">
                                    <CustomButon
                                        type="fillPrimary"
                                        onClicked={() =>
                                            handleButtonClick("left")
                                        }
                                        title="J'aime pas"
                                    >
                                        <DislikeOutlined />
                                    </CustomButon>
                                    <CustomButon
                                        type="fill"
                                        onClicked={() =>
                                            handleButtonClick("right")
                                        }
                                        title="J'aime"
                                    >
                                        <LikeOutlined />
                                    </CustomButon>
                                </div>
                            </div>
                        </motion.div>
                    )}
                    {showResult && <CustomResult />}
                </AnimatePresence>
            ) : (
                noSondage(name)
            )}
        </div>
    );
}

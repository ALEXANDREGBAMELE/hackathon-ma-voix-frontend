import { motion, AnimatePresence } from "framer-motion";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import CustomButon from "../CustomButon";
import CustomResult from "../CustomResult";
import { Button, Result } from "antd";
export default function FramerCard({ sondages, name }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [sondage, setSondage] = useState(sondages);
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
        };
        filterSondage();
    }, [name, sondages]);

    const handleSwipe = (dir) => {
        if (dir === "right" || dir === "left") {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handleButtonClick = (dir) => {
        handleSwipe(dir);
        if (currentIndex + 1 >= sondage.length) {
            setShowResult(true);
        }
    };

    return (
        <div className="swipe-container">
            {sondage.length >= 1 ? (
                <AnimatePresence>
                    {!showResult && sondage[currentIndex] && (
                        <motion.div
                            key={sondage[currentIndex].id}
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
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

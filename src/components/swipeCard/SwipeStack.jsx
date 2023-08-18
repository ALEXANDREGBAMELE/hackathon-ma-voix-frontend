import React, { useState } from "react";
import "./swipeStack.css";
import { useSprings, animated } from "react-spring";
import { useGesture } from "react-use-gesture";
import { candidats } from "../../data";

const SwipeStack = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
const calcOffset = (index, currentIndex) => (index - currentIndex) * 8;

    const [springs, set] = useSprings(candidats.length, (index) => ({
        x: calcOffset(index, currentIndex),
        scale: 1,
    }));

    const bind = useGesture(
        ({ down, movement: [mx], direction: [xDir], distance, cancel }) => {
            if (down && distance > window.innerWidth / 3) {
                const newIndex = xDir > 0 ? currentIndex + 1 : currentIndex - 1;
                setCurrentIndex(newIndex);
                cancel();
            }

            set((index) => {
                if (index < currentIndex - 1)
                    return { x: calcOffset(index, currentIndex - 2) };
                if (index > currentIndex + 1)
                    return { x: calcOffset(index, currentIndex + 2) };
                return { x: calcOffset(index, currentIndex) };
            });
        }
    );
    const handleLike = () => {
        // Gérer l'action de Like
        console.log("Liked");
    };

    const handleUnlike = () => {
        // Gérer l'action de Unlike
        console.log("Unliked");
    };
    return (
        <div className="swipe-container">
            {springs.map(({ x }, index) => (
                <animated.div
                    key={candidats[index].id}
                    className="card"
                    {...bind()}
                    style={{
                        transform: x.interpolate(
                            (x) => `translate3d(${x}px, 0, 0)`
                        ),
                        zIndex: candidats.length - index,
                    }}
                >
                    <div className="card-content">
                        {candidats[index].content}
                    </div>
                    <div className="action-buttons">
                        <button className="like-button" onClick={handleLike}>
                            Like
                        </button>
                        <button
                            className="unlike-button"
                            onClick={handleUnlike}
                        >
                            Unlike
                        </button>
                    </div>
                </animated.div>
            ))}
        </div>
    );
};

export default SwipeStack;

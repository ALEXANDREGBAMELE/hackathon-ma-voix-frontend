import { CardSwiper } from "react-card-rotate-swiper";
import { candidats } from "../data";
import SwipeStack from "../components/swipeCard/SwipeStack";
export default function Sondage() {
     const handleSwipe = (d) => {
         //fill this your callback
         console.log(d);
         
     };
    return (
        <div>
           <SwipeStack />
        </div>
    );
}

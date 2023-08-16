import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Article from "./components/Article";
import { news, sondages } from "./data";
import CustomButon from "./components/CustomButon";
import Sondage from "./components/Sondage";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <section class="Main_page" id="Main_page">
                <div className="sideBar">
                    <div className="sideBareNews">
                        <p>dernier annoce</p>
                        {news.map((item) => (
                            <Article key={item.id} item={item} />
                        ))}
                        <CustomButon />
                    </div>
                    <div className="sondages">
                        <h3>Quelques sondages</h3>
                        {sondages.map((item) => (
                            <Sondage key={item.id} item={item} />
                        ))}
                        <CustomButon />
                    </div>
                </div>
                <div className="rightSideBar">
                    <p>
                        Edit <code>App.jsx</code> and save to test HMR updates.
                    </p>
                    <div className="endirect">
                        <h3>En direct</h3>
                        <iframe
                            width="80%"
                            height="330"
                            src="https://www.youtube.com/embed/5qap5aO4i9A"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>

                        {/* video show */}
                    </div>
                    <div className="post">
                        <div className="postheader">
                            <img
                                src="https://images.unsplash.com/photo-1466285746891-30d1cd3a5409?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                alt=""
                            />
                            <div className="postheader__details">
                                <h2>
                                    Ouverture prochaine du pont alassane Dramane
                                    ouatara
                                </h2>
                                <div className="headresBotoms">
                                    <img
                                        src="https://images.unsplash.com/photo-1466285746891-30d1cd3a5409?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                        alt=""
                    />
                    |<span>publier le 02 juin 2021</span>
                                </div>
                            </div>
                        </div>
                        <div className="postbody">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                            <img
                                src="https://media-files.abidjan.net/photo/infrastructures-visite-des-travaux-du-5eme-pont-cocody-plateau_fapdtvvgm2.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default App;

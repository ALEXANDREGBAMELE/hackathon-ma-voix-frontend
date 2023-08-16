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
                    <div className="endirect">
                        <iframe
                            width="100%"
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
                                        src="https://images.unsplash.com/photo-1533056344954-8acef6d63650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                                        alt=""
                                    />
                                    <p>
                                        jonathan morison
                                        <span> | il y a 2h</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="postbody">
                            <p>
                                INFRASTRUCTURES : VISITE DES TRAVAUX DU 5ÈME
                                PONT COCODY-PLATEAU.
                            </p>
                            <span>
                                #Politique #Infrastrutures #Election #Paix
                            </span>
                            <img
                                src="https://media-files.abidjan.net/photo/infrastructures-visite-des-travaux-du-5eme-pont-cocody-plateau_fapdtvvgm2.jpg"
                                alt=""
                            />
                            <div className="postBotom">
                                <p>
                                    <i class="fas fa-thumbs-up"></i> Like
                                </p>
                                <p>Commentaire</p>
                                <p>
                                    <i class="fa-solid fa-bookmark"></i>{" "}
                                    Enregistrer
                                </p>
                                <p>
                                    <i class="fa-solid fa-share"></i>partager
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default App;

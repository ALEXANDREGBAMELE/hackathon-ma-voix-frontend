import SideBar from "./sideBar/SideBar";

export default function MainLayout() {
    return (
        <div className="Layout">
            <div className="direct">
                <img
                    src="./vid.jpg"
                    alt=""
                    style={{
                        width: "45rem",
                        height: "15rem",
                        margin: "1rem",
                    }}
                />
            </div>
            <div className="post">
                <div className="postheader">
                    <img
                        src="https://images.unsplash.com/photo-1466285746891-30d1cd3a5409?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        alt=""
                    />
                    <div className="postheader__details">
                        <h2>
                            Ouverture prochaine du pont alassane Dramane ouatara
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
                        INFRASTRUCTURES : VISITE DES TRAVAUX DU 5ÈME PONT
                        COCODY-PLATEAU.
                    </p>
                    <span>#Politique #Infrastrutures #Election #Paix</span>
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
                            <i class="fa-solid fa-bookmark"></i> Enregistrer
                        </p>
                        <p>
                            <i class="fa-solid fa-share"></i>
                            partager
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

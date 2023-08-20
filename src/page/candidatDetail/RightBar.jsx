import React from "react";

function RightBar(){
    return(
        <div className="container">
            <div className="top-bar"></div>
            <div className="content-card">
                <div className="infor-candidat" style={{backgroundColor:"red"}}>
                    <div className="img-card">
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="right-content">
                    <div className="titre">Ouverture prochaine du pont Alassane Outara</div>
                    <div className="sub-title">
                        <div className="nom-promoteur">Adama Bictogo</div>
                        <div className="date">il y a 2h</div>
                    </div>
                </div>
                <div className="media-card">
                    <div className="little-description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias deserunt ex consectetur suscipit
                    </div>
                    <div className="img-card">
                        <img src="./public/pont.jpg" alt="pont" style={{width:"100%"}} />
                        <div className="action-card" style={{display:"flex", gridTemplateColumns:"1fr 1fr 1fr 1fr", gap:"20px"}}>
                            <div className="item">Like</div>
                            <div className="item">Commentaire</div>
                            <div className="item">Enregistrer</div>
                            <div className="item">Partager</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default RightBar;

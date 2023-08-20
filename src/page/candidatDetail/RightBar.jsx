import React from "react";

function RightBar(){
    return(
        <div className="container">
            <div className="top-bar"></div>
            <div className="content-card">
                <div className="infor-candidat"></div>
                <div className="media-card">
                    <div className="little-description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias deserunt ex consectetur suscipit
                    </div>
                    <div className="img-card">
                        <img src="" alt="" />
                        <div className="action-card">
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

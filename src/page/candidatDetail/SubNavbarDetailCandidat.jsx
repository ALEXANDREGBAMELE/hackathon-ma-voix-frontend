import React from "react";

function SubNavbarDetailCandidat(){
    return(
        <div className="navbar-detail">
            <div className="items" style={{display:"flex", gridTemplateColumns:"1fr 1fr 1fr" ,gap:"30px"}}>
                <div className="item">Actualité</div>
                <div className="item">Ideologie</div>
                <div className="item">Historique Personnel</div>
            </div>
            <div className="sous-ligne">

            </div>
            
        </div>
    );
}

export default SubNavbarDetailCandidat;
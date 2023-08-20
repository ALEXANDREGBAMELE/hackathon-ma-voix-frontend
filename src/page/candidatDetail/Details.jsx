import React from "react";
import Sidebardetail from "./sidebardetail";
import RightBar from "./RightBar";

function Detail(){
    return(
        <div className="container">
            <div className="left">
                <Sidebardetail></Sidebardetail>
            </div>
            <div className="right">
                <RightBar></RightBar>
            </div>
        </div>
        
    )
}

export default Detail;
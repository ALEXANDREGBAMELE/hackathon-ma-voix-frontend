import React from "react";
import Sidebardetail from "./sidebardetail";
import RightBar from "./RightBar";


function Detail(){
    
    return(
    
        <div className="container" style={{display:"flex", gridTemplateColumns:"1fr 1fr", gap:"25px", position:"relative"}}>
            <div className="left" style={{backgroundColor:"",padding:"10px"}}>
                <Sidebardetail/>
            </div>
            <div className="right" style={{backgroundColor:"blue", padding:"5px"}}>
                <RightBar/>
            </div>
        </div>
        
    )
}

export default Detail;
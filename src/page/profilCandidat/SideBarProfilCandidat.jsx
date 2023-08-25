import React from "react";
import ButtonActionProfilCandidat from "./ButtonActionProfilCandidat";

function SideBarProfilCandidat(){
    return(
        <>
        <div className="container" style={{width:"", height:"100vh"}}>
            <div className="top" style={{borderBottom:"solid 1px white", height:"20%", backgroundColor:"green"}}>
                <img style={{height:"100%", width:"100%", padding:""}} src="../../../logoB.png" alt="../../../logoB.png" />
            </div>
            <div className="bottom">
                <ButtonActionProfilCandidat/>
            </div>
        </div>
        </>
    );
}
export default SideBarProfilCandidat;
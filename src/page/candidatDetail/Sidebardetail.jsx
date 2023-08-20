import React from "react";

function Sidebardetail(){
    return(
        <div className="sidebar" style={{width :"300px"}}>
            <div className="top-card" style={{ borderRadius:"15px" , backgroundColor:"white"} }>
                <div className="img-card" style={{borderBottom:"solid green 5px"}}>
                    <img src="https://snedai.com/wp-content/uploads/2022/01/PORTRAIT-PDG-1017x1024.jpg" alt="image de Bitogo" style={{width:"300px"}} />
                </div>
                <div className="description-card" style={{padding:"5px"}}>
                    <div className="title" style={{marginTop:"10px", marginBottom:"10px"}}><h2>Adaman Bictogo</h2></div>
                    <div className="description" style={{textAlign:"center", marginBottom:"10px"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia error laboriosam iste velit officiis facilis, quasi aliquam provident doloremque, dolores eum delectus odit minus adipisci nulla dignissimos odio labore voluptatibus?
                    </div>
                    <div className="status-card" style={{display:"flex", gridTemplateColumns:"1fr 1fr" ,gap:"80px",backgroundColor:"#e0e0e0", borderRadius:"10px",padding:"3px"}}>
                        <div className="status-button"style={{ textAlign:"center", marginTop:"10px", marginLeft:"3px", fontSize:"20px"}}>
                            Status
                        </div>
                        <div className="sub-title-fonction" style={{backgroundColor:"#027317", textAlign:"center", borderRadius:"8px", padding:"5px", marginLeft:"5px", color:"white"}}>
                            Président de l'assemblé Nationale
                        </div>
                    </div>
                </div>
            </div>
            <div className="botton-card" style={{borderRadius:"15px" , marginTop:"20px" , backgroundColor:"white"}}>
                {/* commentaire */}
                <div className="status-card" style={{display:"flex", gridTemplateColumns:"1fr 1fr" ,gap:"80px", borderRadius:"10px",padding:"3px"}}>
                        <div className="status-button"style={{ textAlign:"center", marginTop:"10px", marginLeft:"3px", fontSize:"20px"}}>
                            <i class="fa-solid fa-users" style={{fontSize:"40px", color:"#027317"}}></i>
                        </div>
                        <div className="sub-title-fonction" style={{textAlign:"center", borderRadius:"8px", padding:"5px", marginLeft:"5px"}}>
                            Voir les autres candidats de cocody
                        </div>
                </div>

            
                <div className="images-card" style={{marginTop: "40px",paddingBottom: "50px", display: "flex", flexWrap: "wrap", gap: "20px" , justifyContent: "center", alignItems: "center"}}>
                    <div className="item-img">
                    <img src="src/assets/yace.jpeg" alt="image de Bitogo" style={{width:"100px", height:"100px" ,borderRadius:"100%", }} />
                    <h3>Yace Jean Marc</h3>
                    </div>
                    <div className="item-img">
                    <img src="src/assets/yace.jpeg" alt="image de Bitogo" style={{width:"100px", height:"100px" ,borderRadius:"100%", }} />
                    <h3>Yace Jean Marc</h3>
                    </div>
                    <div className="item-img">
                    <img src="src/assets/yace.jpeg" alt="image de Bitogo" style={{width:"100px", height:"100px" ,borderRadius:"100%", }} />
                    <h3>Yace Jean Marc</h3>
                    </div>
                    <div className="item-img">
                    <img src="src/assets/yace.jpeg" alt="image de Bitogo" style={{width:"100px", height:"100px" ,borderRadius:"100%", }} />
                    <h3>Yace Jean Marc</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebardetail;
import Collapse from "rc-collapse";
import React from "react";
import SondageSideBar from "../components/sideBar/SondageSideBar";

export function Resultat() {
  const bitogoImgUrl = "https://snedai.com/wp-content/uploads/2022/01/PORTRAIT-PDG-1017x1024.jpg"
  return (
    <div className="container" style={{ display: "flex", gridTemplateColumns: "1fr 1fr", gap: "5px" }}>
      <div className="side-bar" style={{width:"25rem"}}>
        <SondageSideBar></SondageSideBar>
      </div>

      <div className="resultat-container" style={{ }}>
        <div className="top-card" style={{ display: "flex", gridTemplateColumns:"1fr 1fr" , gap:"10px"}}>
          <div className="left" style={{ width: "400px" }}>
            <img src={bitogoImgUrl} alt="" />
          </div>
          <div className="right">
            <div className="title" style={{ fontSize: "24px", padding:"5px", textAlign:"center" }}>Au Somet : </div>
            <div className="nome-candidat-winer" style={{ fontSize: "24px", padding:"5px", textAlign:"center" }}><h3>Adaman Bictogo</h3></div>
            <div className="total-vote" style={{ fontSize: "24px", padding:"5px", textAlign:"center" }}>Total vote : </div>
            <div className="score" style={{ fontSize: "24px", padding:"5px", textAlign:"center" }}>Score : 77%</div>
          </div>
        </div>


        <div className="bottom-card" style={{ display: "flex", flexDirection: "row", borderRadius: "15px", marginTop:"15px" }}>
          <div className="item-1" style={{ display: "flex", gridTemplateColumns: "1fr 1fr", gap: "70rem", marginLeft: "5%", padding: "10px", marginBottom: "-15px" , borderRadius:"15px" , border:"solid 1px e0e0e0", backgroundColor:"white"}}>
            <table className="users-table" style={{ borderCollapse: "collapse", marginTop: "40px", borderRadius:"15px" , backgroundColor:"#e0e0e0"}}>
              <thead>
                <tr style={{backgroundColor:"#fff"}}>
                  <th style={{ padding: "10px" }} >Photo</th>
                  <th style={{ padding: "10px" }} >Nom</th>
                  <th style={{ padding: "10px" }} >Prénom</th>
                  <th style={{ padding: "10px" }}>commune</th>
                  <th style={{ padding: "10px" }}>Resultat</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: "#e0e0e0" }}>
                  <td style={{ padding: "10px" }}>
                    <img src={bitogoImgUrl} alt="Photo utilisateur" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                  </td>
                  <td style={{ padding: "10px" }}>Adaman</td>
                  <td style={{ padding: "10px" }}>Bitogo presiden de l'asseble Nationnale</td>
                  <td style={{ padding: "10px" }}>Commune de Yopougon</td>
                  <td style={{ padding: "10px" }}>77%</td>
                </tr>
                <tr style={{ backgroundColor:"#fff" }}>
                  <td style={{ padding: "10px" }}>
                    <img src={bitogoImgUrl} alt="Photo utilisateur" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                  </td>
                  <td style={{ padding: "10px" }}>Adaman</td>
                  <td style={{ padding: "10px" }}>Bitogo</td>
                  <td style={{ padding: "10px" }}>Yopougon</td>
                  <td style={{ padding: "10px" }}>77%</td>
                </tr>
                <tr style={{ backgroundColor: "#e0e0e0" }}>
                  <td style={{ padding: "10px" }}>
                    <img src={bitogoImgUrl} alt="Photo utilisateur" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                  </td>
                  <td style={{ padding: "10px" }}>Adaman</td>
                  <td style={{ padding: "10px" }}>Bitogo</td>
                  <td style={{ padding: "10px" }}>Yopougon</td>
                  <td style={{ padding: "10px" }}>77%</td>
                </tr>
                <tr  style={{backgroundColor:"#fff"}}>
                  <td style={{ padding: "10px" }}>
                    <img src={bitogoImgUrl} alt="Photo utilisateur" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                  </td>
                  <td style={{ padding: "10px" }}>Adaman</td>
                  <td style={{ padding: "10px" }}>Bitogo</td>
                  <td style={{ padding: "10px" }}>Yopougon</td>
                  <td style={{ padding: "10px" }}>77%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

}
export default Resultat;

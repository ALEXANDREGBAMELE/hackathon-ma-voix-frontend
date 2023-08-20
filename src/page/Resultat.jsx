import Collapse from "rc-collapse";
import React from "react";

export function Resultat() {
  return (
    <div className="container" style={{ display: "flex", gridTemplateColumns: "1fr 1fr", gap: "5px" }}>
      <div className="side-bar">
        <div className="img-card" style={{ width: "400px" }}>
          <img src="https://snedai.com/wp-content/uploads/2022/01/PORTRAIT-PDG-1017x1024.jpg" alt="" />
        </div>
      </div>

      <div className="resultat-container" style={{ }}>
        <div className="top-card" style={{ display: "flex", gridTemplateColumns:"1fr 1fr" , gap:"10px"}}>
          <div className="left" style={{ width: "400px" }}>
            <img src="https://snedai.com/wp-content/uploads/2022/01/PORTRAIT-PDG-1017x1024.jpg" alt="" />
          </div>
          <div className="right">
            <div className="title" style={{ fontSize: "24px", padding:"5px", textAlign:"center" }}>Au Somet : </div>
            <div className="nome-candidat-winer" style={{ fontSize: "24px", padding:"5px", textAlign:"center" }}><h3>Adaman Bictogo</h3></div>
            <div className="total-vote" style={{ fontSize: "24px", padding:"5px", textAlign:"center" }}>Total vote : </div>
            <div className="score" style={{ fontSize: "24px", padding:"5px", textAlign:"center" }}>Score : 77%</div>
          </div>
        </div>


        <div className="bottom-card" style={{ display: "flex", flexDirection: "row", borderRadius: "15px", marginTop:"15px" }}>
          <div className="item-1" style={{ display: "flex", gridTemplateColumns: "1fr 1fr", gap: "70rem", marginLeft: "5%", paddingTop: "10px", marginBottom: "-15px" , borderRadius:"15px" }}>
            <table className="users-table" style={{ borderCollapse: "collapse", marginTop: "40px", borderRadius:"15px"}}>
              <thead>
                <tr>
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
                    <img src="lien_de_la_photo" alt="Photo utilisateur" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                  </td>
                  <td style={{ padding: "10px" }}>Adaman</td>
                  <td style={{ padding: "10px" }}>Bitogo</td>
                  <td style={{ padding: "10px" }}>Yopougon</td>
                  <td style={{ padding: "10px" }}>77%</td>
                </tr>
                <tr style={{ backgroundColor: "#e0e0e0",visibility:"hidden" }}>
                  <td style={{ padding: "10px" }}>
                    <img src="lien_de_la_photo" alt="Photo utilisateur" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                  </td>
                  <td style={{ padding: "10px" }}>Adaman</td>
                  <td style={{ padding: "10px" }}>Bitogo</td>
                  <td style={{ padding: "10px" }}>Yopougon</td>
                  <td style={{ padding: "10px" }}>77%</td>
                </tr>
                <tr style={{ backgroundColor: "#e0e0e0" }}>
                  <td style={{ padding: "10px" }}>
                    <img src="lien_de_la_photo" alt="Photo utilisateur" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                  </td>
                  <td style={{ padding: "10px" }}>Adaman</td>
                  <td style={{ padding: "10px" }}>Bitogo</td>
                  <td style={{ padding: "10px" }}>Yopougon</td>
                  <td style={{ padding: "10px" }}>77%</td>
                </tr>
                <tr style={{ backgroundColor: "#e0e0e0", visibility:"hidden" }}>
                  <td style={{ padding: "10px" }}>
                    <img src="lien_de_la_photo" alt="Photo utilisateur" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
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

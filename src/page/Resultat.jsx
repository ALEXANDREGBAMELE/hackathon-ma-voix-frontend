
import Collapse from "rc-collapse";
import { React, useEffect, useState } from "react";
import SondageSideBar from "../components/sideBar/SondageSideBar";
import ListeCommune from "../components/sideBar/ListeCommune";
import { Space, Table, Tag } from 'antd';

export function Resultat() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('https://lesinnovateurs.me/api/public/candidats')
  //     .then(response => response.json())
  //     .then(apiData => setData(apiData))
  //     .catch(error => console.error('Erreur lors de la récupération des données:', error));
  // }, [])

  const columns = [
    {
      title: 'Photo',
      dataIndex: 'url',
      key: 'url',
      render: (text) => <img src={text} alt="Image" style={{ maxWidth: '60px', borderRadius: "100%" }} />,
    },
    {
      title: 'Nom',
      dataIndex: 'nom',
      key: 'nom',
      render: (text) => <>{text}</>,
    },
    {
      title: 'Prenom',
      dataIndex: 'prenom',
      key: 'prenom',
    },
    {
      title: 'Partie Politique',
      dataIndex: 'partie',
      key: 'partie',
      render: (text) => <img src={text} alt="Image" style={{ maxWidth: '50px' }} />,
    },
    {
      title: 'Commune',
      key: 'commune',
      dataIndex: 'commune',
    },
    {
      title: 'Resultat Sondage(%)',
      key: 'resultat',
      dataIndex: 'resultat',
      render: (text) => <>{text}</>,
    },
  ];

  const data = [
    {
      key: '1',
      url: 'https://snedai.com/wp-content/uploads/2022/01/PORTRAIT-PDG-1017x1024.jpg',
      nom: "Adaman",
      prenom: "Bictogo",
      partie: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGX_PRk7b0bItk4rCyi0MzK1kOINZvo2YpgK_IFBIX&s.png',
      commune: "Yopougon",
      resultat: "76%"
    },
    {
      key: '1',
      url: 'url photo',
      nom: "Adaman",
      prenom: "Bictogo",
      partie: 'RHDP',
      commune: "Yopougon",
      resultat: "76%"
    },
    {
      key: '1',
      url: 'url photo',
      nom: "Adaman",
      prenom: "Bictogo",
      partie: 'RHDP',
      commune: "Yopougon",
      resultat: "76%"
    },
    {
      key: '1',
      url: 'url photo',
      nom: "Adaman",
      prenom: "Bictogo",
      partie: 'RHDP',
      commune: "Yopougon",
      resultat: "76%"
    },
    {
      key: '1',
      url: 'url photo',
      nom: "Adaman",
      prenom: "Bictogo",
      partie: 'RHDP',
      commune: "Yopougon",
      resultat: "76%"
    },
    {
      key: '1',
      url: 'url photo',
      nom: "Adaman",
      prenom: "Bictogo",
      partie: 'RHDP',
      commune: "Yopougon",
      resultat: "76%"
    },
    {
      key: '1',
      url: 'url photo',
      nom: "Adaman",
      prenom: "Bictogo",
      partie: 'RHDP',
      commune: "Yopougon",
      resultat: "76%"
    },
    {
      key: '1',
      url: 'url photo',
      nom: "Adaman",
      prenom: "Bictogo",
      partie: 'RHDP',
      commune: "Yopougon",
      resultat: "76%"
    },
    {
      key: '1',
      url: 'url photo',
      nom: "Adaman",
      prenom: "Bictogo",
      partie: 'RHDP',
      commune: "Yopougon",
      resultat: "76%"
    },
  ];

  const bitogoImgUrl = "https://snedai.com/wp-content/uploads/2022/01/PORTRAIT-PDG-1017x1024.jpg"
  return (
    <div className="container" style={{ display: "flex", gridTemplateColumns: "1fr 1fr", gap: "5px", overflow: "hidden", height: "calc(100vh - 11 rem)" }}>
      <div className="side-bar" style={{ width: "26rem" }}>
        <div className="liste-commune" style={{ border: "solid 1px e0e0e0", backgroundColor: "white", borderRadius: "15px", marginTop: "1rem", padding: "2rem" }}>
          <h3 style={{ textAlign: "center" }}>Liste des communes</h3><br />
          <ListeCommune></ListeCommune>
        </div>
      </div>

      <div className="resultat-container" style={{ width: "100%", }}>
        <div className="top-card" style={{ display: "flex", gridTemplateColumns: "1fr 1fr", gap: "10px", marginLeft: "", marginTop: "1rem", backgroundColor: "white", borderRadius: "15px" }}>
          <div className="left" style={{ width: "400px", }}>
            <img style={{ borderBottomRightRadius: "15px", borderRadius: "15px" }} src={bitogoImgUrl} alt="" />
          </div>
          <div className="right">
            <div className="title" style={{ fontSize: "24px", padding: "5px", textAlign: "center" }}>Au Somet : </div>
            <div className="nome-candidat-winer" style={{ fontSize: "24px", padding: "5px", textAlign: "center" }}><h3>Adaman Bictogo</h3></div>
            <div className="total-vote" style={{ fontSize: "24px", padding: "5px", textAlign: "center" }}>Total vote : </div>
            <div className="score" style={{ fontSize: "24px", padding: "5px", textAlign: "center" }}>Score : 77%</div>
          </div>
        </div>


        <div className="bottom-card" style={{ display: "flex", flexDirection: "row", borderRadius: "15px", marginTop: "1rem", marginBottom: "6rem", width: "100%" }}>
          <div className="table">
            <Table columns={columns} dataSource={data}
              scroll={{
                y: 240,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );

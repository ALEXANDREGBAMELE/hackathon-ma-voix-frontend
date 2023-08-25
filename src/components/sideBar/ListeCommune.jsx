import React from "react";
import { useState } from "react";

const commun = [
    { name: "Yopougon", id: 1 },
    { name: "Adjame", id: 2 },
    { name: "Cocody", id: 3 },
    { name: "Plateau", id: 4 },
    { name: "Abobo", id: 5 },
    { name: "Koumassi", id: 6 },
    { name: "Marcory", id: 7 },
    { name: "Bingerville", id: 8 },
    { name: "Songon", id: 9 },
    { name: "TreichVille", id: 10 },
    { name: "PortBouet", id: 11 },
    { name: "Attécoubé", id: 12 },
    { name: "Anyama", id: 13 },
];
const style = {
    width: "2rem"
}
function ListeCommune() {
    const [select, setSelect] = useState("Yopougon");
    const [avis, setAvis] = useState("");
    const clicked = (name) => {
        setSelect(name);
        handleClick(name);
    };
    return (
        <div className="sidebarCotainer">
            <div className="sideBarTop">
                <div className="title">
                    <h3>Liste des Commune</h3>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        flexWrap: "wrap",
                        width: "100%",
                        gap: ".5rem",
                        padding: "5px",

                    }}
                >
                    {commun.map((item) => {
                        return (
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    flexWrap: "nowrap",
                                }}
                                key={item.id}
                                className="commun"
                            >
                                <div
                                    onClick={() => clicked(item.name)}
                                    className={
                                        select == item.name
                                            ? "butomFillSecondary"
                                            : "butomAoutlin"
                                    }
                                    style={{ width: "6.5rem" }}
                                >
                                    <p>{item.name} </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default ListeCommune;
import React, { useState } from "react";

const AjouterProgramme = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const imageFile = e.target.files[0];
        setFormData((prevData) => ({
            ...prevData,
            image: imageFile,
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // les données au backend ou effectuer d'autres actions
        console.log(formData);
    };


    return (
        <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop:"2rem",paddingBottom:"2rem" }}>
            <div style={{ backgroundColor: "#e0e0e0", padding:"20px", borderRadius:"15px" }}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Titre du programme:</label><br /><br />
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            style={{ backgroundColor: "white", width: "100%" }}
                        />
                    </div>
                    <div>
                        <label>Contenu du programme:</label><br /><br />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={10}
                            cols={80}
                            style={{
                                padding: "2rem",
                                width: "100%",
                            }}
                        />
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <button type="submit">Envoyer</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AjouterProgramme;

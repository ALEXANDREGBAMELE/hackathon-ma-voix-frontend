import React, { useState } from "react";

const CandidatPostForm = () => {
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
        <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#e0e0e0" }}>
            <div style={{ width: "500px" }}>
                <h2 style={{ color: "#027314", textAlign: "center" }}>Publier un programme</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Titre:</label><br /><br />
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            style={{ backgroundColor: "white", width: "100%" }}
                        />
                    </div>
                    <div>
                        <label>Message:</label><br /><br />
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
                    <div>
                        <label>Image:</label><br />
                        <input
                            type="file"
                            accept="image/*"
                            name="image"
                            onChange={handleImageChange}
                        />
                        {formData.image && (
                            <img
                                src={URL.createObjectURL(formData.image)}
                                alt="Prévisualisation"
                                style={{ maxWidth: "100%", marginTop: "10px", height:"170px" }}
                            />
                        )}
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <button type="submit">Envoyer</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CandidatPostForm;

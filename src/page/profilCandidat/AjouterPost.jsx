import React, { useState } from "react";

const AjouterPost = () => {
    const [formData, setFormData] = useState({
        titre: '',
        description: '',
        url_media: '',
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
            <div style={{ width: "", backgroundColor: "#e0e0e0", padding:"20px", borderRadius:"15px" }}>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div>
                        <label>Titre:</label><br /><br />
                        <input
                            type="text"
                            name="titre"
                            value={formData.firstName}
                            onChange={handleChange}
                            style={{ backgroundColor: "white", width: "100%" }}
                        />
                    </div>
                    <div>
                        <label>Description:</label><br /><br />
                        <textarea
                            name="description"
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
                        <label>Photo:</label><br />
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
                                style={{ maxWidth: "100%", marginTop: "10px", height:"200px" }}
                            />
                        )}
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <button type="submit">Poster</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AjouterPost;

import { React, useState } from "react";
import ListeCommune from "../../components/sideBar/ListeCommune";
import { ShareAltOutlined } from '@ant-design/icons';
import { Button, Radio, Space, Divider, Select } from 'antd';

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Vous pouvez ajouter ici la logique pour envoyer les données au backend ou effectuer d'autres actions
        console.log(formData);
    };


    return (
        <div className="container" style={{  }}>
            <div className="left-part" style={{ width: "20rem", marginTop: "11px" }}>
                
                
            </div>
            <div className="right-part" style={{ marginTop: "11px" }}>
                <div style={{ width: "500px" }}>
                    <h2 style={{ color: "#027314" }}>Publier un programme</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Titre:</label><br /><br />
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                style={{backgroundColor:"white"}}
                            />
                        </div>
                        <div>
                            <label>Thématique:</label><br /><br />
                            <Select
                                defaultValue="lucy"
                                style={{
                                    width: 200,
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        label: 'Manager',
                                        options: [
                                            {
                                                label: 'Jack',
                                                value: 'jack',
                                            },
                                            {
                                                label: 'Lucy',
                                                value: 'lucy',
                                            },
                                        ],
                                    },
                                    {
                                        label: 'Engineer',
                                        options: [
                                            {
                                                label: 'yiminghe',
                                                value: 'Yiminghe',
                                            },
                                        ],
                                    },
                                ]}
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

                            />
                        </div>
                        <button type="submit">Envoyer</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CandidatPostForm;
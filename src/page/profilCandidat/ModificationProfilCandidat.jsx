import {React,useState} from "react";

function ModificationProfilCandidat(){
    const [userProfile, setUserProfile] = useState({
        nom: "John",
        prenom: "Doe",
        phone: "123456789",
        email: "john.doe@example.com",
        numCarte: "123456",
        password: "MotDePasse",
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };
    
    const handleProfileUpdate = () => {
        // Ici, vous pouvez appeler une fonction pour mettre à jour le profil sur le serveur
        // par exemple : updateUserProfile(userProfile);
        // Assurez-vous de gérer les erreurs et les succès de la mise à jour.
    };

    return(
        <div className="right-part" style={{}}>
    <h2>Modifier le Profil</h2>
    <form>
        <label>Nom</label>
        <input
            type="text"
            name="nom"
            value={userProfile.nom}
            onChange={handleInputChange}
        />
        {/* ... Autres champs de formulaire pour les données du profil ... */}
        <button type="button" onClick={handleProfileUpdate}>
            Mettre à jour le Profil
        </button>
    </form>
</div>

    )
}

export default ModificationProfilCandidat;
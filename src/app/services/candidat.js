import axios from "axios";

const API_BASE_URL = "https://lesinnovateurs.me/api";

const candidatServices = axios.create({
    baseURL: API_BASE_URL,
});


/**
 * Intercepter les requetes pour ajouter le token
 * @param {object} config
 * @returns  {object} config
 * */
candidatServices.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);



export const addPost= async  (data) =>{

    const  requestOptions = {
        method: "POST",
        body: JSON.stringify(
            data
        )
    }

    const response = await candidatServices.post("/private/candidat/add-post", requestOptions)
    return response;
}

export const addProgramme= async  (data) =>{ 
    const  requestOptions = {
        method: "POST",
        body: JSON.stringify(
            data
        )
    }

    const response = await candidatServices.post("/private/candidat/add-programme", requestOptions)
    return response;
}


export const getFollowersById = async (id) => {
    const resp = await candidatServices.get(`/public/candidat-followers/${id}`);
    return resp.data;
}

export const getMyfollowers = async () => {
    const resp = await candidatServices.get(`/private/candidat/get-my-followers}`);
    return resp.data;

}

/*
POST
/api/private/candidat/add-post
Ajouter un post


GET
/api/private/candidat/{id}/get-posts
Récupérer tous les posts d'un candidat


DELETE
/api/private/candidat/{id}/delete-post
Supprimer un post


POST
/api/private/candidat/add-meet
Ajouter une rencontre


GET
/api/private/candidat/{id}/get-meets
Récupérer toutes les rencontres d'un candidat


GET
/api/private/candidat/search-meets/{val}
Rechercher des rencontres par valeur


DELETE
/api/private/candidat/{id}/delete-meet
Supprimer une rencontre


GET
/api/private/candidat/{id}/get-activities
Récupérer toutes les activités d'un candidat


POST
/api/private/candidat/add-activity
Ajouter une activité


PUT
/api/private/candidat/update-activity/{id}
Mettre à jour une activité


DELETE
/api/private/candidat/{id}/delete-activity
Supprimer une activité


GET
/api/private/candidat/get-my-followers
Récupérer mes followers


GET
/api/private/candidat/count-my-followers
Récupérer le nombre de mes followers


POST
/api/private/candidat/add-programme
Ajouter un programme


GET
/api/public/programme/{val}
Rechercher un programme


PUT
/api/private/candidat/update-programme/{id}
Modifier un programme


DELETE
/api/private/candidat/delete-programme/{id}
Supprimer un programme


GET
/api/private/candidat/my-programmes */ 


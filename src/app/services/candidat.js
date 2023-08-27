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
        const token = JSON.parse(localStorage.getItem("token"));
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
    const login = JSON.parse(localStorage.getItem("logUser"));
    const resp = await candidatServices.get(`/private/candidat/${login.id}/get-my-followers`);
    return resp.data;

}

export const getMyProgrammes = async () => {
    const login = JSON.parse(localStorage.getItem("logUser"));


    const resp = await candidatServices.get(
      `/private/candidat/${login.id}/my-programmes`
    );
    return resp.data;

}

export const getMyPosts = async () => {
    
    const login = JSON.parse(localStorage.getItem("logUser"));
    const resp = await candidatServices.get(`/private/candidat/${login.id}/get-posts`);
    return resp.data;

}

export const getMyMeets = async () => {
    const resp = await candidatServices.get('/private/candidat/get-meets');
    return resp.data;



}

export const getMyActivities = async () => {
    const resp = await candidatServices.get('/private/candidat/get-activities');
    return resp.data;

}

export const getMyProgramme = async (id) => {
    const resp = await candidatServices.get(`/private/candidat/get-programme/${id}`);
    return resp.data;

}


export const deletePost = async (id) => {
    const resp = await candidatServices.delete(`/private/candidat/${id}/delete-post`);
    return resp.data;

}

export const deleteMeet = async (id) => {
    const resp = await candidatServices.delete(`/private/candidat/${id}/delete-meet`);
    return resp.data;

}

export const deleteActivity = async (id) => {
    const resp = await candidatServices.delete(`/private/candidat/${id}/delete-activity`);
    return resp.data;

}


export const deleteProgramme = async (id) => {
    const resp = await candidatServices.delete(`/private/candidat/delete-programme/${id}`);
    return resp.data;

}


export const updateProgramme = async (id, data) => {
    const resp = await candidatServices.put(`/private/candidat/update-programme/${id}`, data);
    return resp.data;

}

export const updateActivity = async (id, data) => {
    const resp = await candidatServices.put(`/private/candidat/update-activity/${id}`, data);
    return resp.data;

}

export const updateMeet = async (id, data) => {
    const resp = await candidatServices.put(`/private/candidat/update-meet/${id}`, data);
    return resp.data;

}   

export const addMeet = async (data) => {
    const resp = await candidatServices.post(`/private/candidat/add-meet`, data);                                                                                           

    return resp.data;

}

export const addActivity = async (data) => {
    const resp = await candidatServices.post(`/private/candidat/add-activity`, data);
    return resp.data;
    
}

export const addFollower = async (data) => {

    const resp = await candidatServices.post(`/private/candidat/add-follower`, data);
    return resp.data;

}


export const addLike = async (data) => {

    const resp = await candidatServices.post(`/private/candidat/add-like`, data);
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


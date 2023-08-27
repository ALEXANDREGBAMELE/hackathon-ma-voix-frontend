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



export const addPost= async  (token, data) =>{

    const  requestOptions = {
        method: "POST",
        body: JSON.stringify(
            data
        )
    }

    const response = await candidatServices.post("/private/candidat/add-post", requestOptions)
    return response;
}

export const addProgramme= async  (token, data) =>{ 
    const  requestOptions = {
        method: "POST",
        body: JSON.stringify(
            data
        )
    }

    const response = await candidatServices.post("/private/candidat/add-programme", requestOptions)
    return response;
}

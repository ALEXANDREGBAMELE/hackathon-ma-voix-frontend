import axios from "axios";

const API_BASE_URL = "https://lesinnovateurs.me/api";

const candidatServices = axios.create({
    baseURL: API_BASE_URL,
});


export const addPost= async  (token, data) =>{

    const  requestOptions = {
        method: "POST",

        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(
            data
        )
    }

    return await fetch(
        "https://lesinnovateurs.me/api/private/user/get-following",
        requestOptions
    ).then((res) => res.json());

}
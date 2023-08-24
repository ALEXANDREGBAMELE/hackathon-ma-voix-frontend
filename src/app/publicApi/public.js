import axios from "axios";
const API_BASE_URL = 'https://lesinnovateurs.me/api';


const publicServices = axios.create({
    baseURL: API_BASE_URL,
});

export const getAllActvities = () => {
    try {
        return publicServices.get("/public/activities");
    } catch (error) {
        throw error;
    }
}

export const getActivityDatas = (id) => {
    try {
        return publicServices.get(`/public/activity/${id}`);
    } catch (error) {
        throw error;
    }
}

export const getCandidatsActivities = (id) => {
    try {
        return publicServices.get(`/public/candidat/${id}/get-activities`);
    } catch (error) {
        throw error;
    }
}

export const getPostComments = (id) => {
    try {
        return publicServices.get(`/public/post/${id}/comments`);
    } catch (error) {
        throw error;
    }
}

export const getAllPostLikes = (id) => {
    try {
        return publicServices.get(`/public/post/${id}/likes`);
    } catch (error) {
        throw error;
    }
}

export const getCommentsReplique = (id) => {
    try {
        return publicServices.get(`/public/comment/${id}/replies`);
    } catch (error) {
        throw error;
    }
}

export const getCommentAllRepliques = (id) => {
    try {
        return publicServices.get(`/public/comment/${id}/all-replies`);
    } catch (error) {
        throw error;
    }
}

export const getAllElections = () => {
    try {
        return publicServices.get('/public/elections');
    } catch (error) {
        throw error;
    }
}

export const getElectionData = (id) => {
    try {
        return publicServices.get(`/public/election/${id}`);
    } catch (error) {
        throw error;
    }
}

export const getElectionParticipants = (id) => {
    try {
        return publicServices.get(`/public/election/${id}/participants`);
    } catch (error) {
        throw error;
    }
}

const data = {
        'phone': 'required|string',
        'nom': 'required|string',
        'email': 'required|string',
        'password': 'required|string'
    }
    //reset password
export const resetPassword = (data) => {
    try {
        return publicServices.post('/public/user/reset-password', data);
    } catch (error) {
        throw error;
    }
}
export const getSondages = async() => {
    const resp = await fetch("https://lesinnovateurs.me/api/public/sondages").then((res) => res.json());
    return resp

}
export const getAllCandidats = async() => {
    const resp =
        await publicServices.get(`/public/candidats`);
    return resp.data


}

export const LoginUser = async(data) => {
    const response = await fetch("https://lesinnovateurs.me/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((res) => res.json());
    return response
}

export const RegisterUser = async(data) => {
    const response = await fetch("https://lesinnovateurs.me/api/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((res) => res.json());
    return response
}
export const getAllPosts = async() => {
    const resp = await fetch("https://lesinnovateurs.me/api/public/posts").then((res) => res.json());
    return resp

}

export const getCandidatPosts = async(id) => {
    const resp = await fetch(`https://lesinnovateurs.me/api/public/candidat/${id}/posts`).then((res) => res.json());
    return resp

}
export const likedPosts = async(userId, postId, token) => {
    const resp = await fetch(`https://lesinnovateurs.me/api/private/user/add-like`, {
        method: "POST",
        Autorization: {
            token,
            type: "Bearer"
        },
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, postId }),
    }).then((res) => res.json());
    return resp
}
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
    try {
        return await publicServices.get(`/public/sondages`);
    } catch (error) {
        console.log(error);

    }

}
const API_BASE_URL = "https://lesinnovateurs.me/api";

const fetchWithAuthorization = async (url, method, data) => {
  const token = JSON.parse(localStorage.getItem("token"));

  const requestOptions = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  if (data) {
    requestOptions.body = JSON.stringify(data);
  }

  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const addPost = async (data) => {
  const api_url = `${API_BASE_URL}/private/candidat/add-post`;
  return fetchWithAuthorization(api_url, "POST", data);
};

export const addProgramme = async (data) => {
  const api_url = `${API_BASE_URL}/private/candidat/add-programme`;
  return fetchWithAuthorization(api_url, "POST", data);
};

export const updateProgramme = async (id, data) => {
  const api_url = `${API_BASE_URL}/private/candidat/update-programme/${id}`;
  return fetchWithAuthorization(api_url, "PUT", data);
};

export const getFollowersById = async (id) => {
  const api_url = `${API_BASE_URL}/public/candidat-followers/${id}`;
  return fetchWithAuthorization(api_url, "GET");
};

export const getMyfollowers = async () => {
  const login = JSON.parse(localStorage.getItem("logUser"));
  const api_url = `${API_BASE_URL}/private/candidat/${login.id}/get-my-followers`;
  return fetchWithAuthorization(api_url, "GET");
};

export const getMyProgrammes = async () => {
  const api_url = `${API_BASE_URL}/private/candidat/my-programmes`;
  return fetchWithAuthorization(api_url, "GET");
};

export const getMyPosts = async () => {
  const login = JSON.parse(localStorage.getItem("logUser"));
  const api_url = `${API_BASE_URL}/private/candidat/${login.id}/get-posts`;
  return fetchWithAuthorization(api_url, "GET");
};

export const getMyMeets = async () => {
  const api_url = `${API_BASE_URL}/private/candidat/get-meets`;
  return fetchWithAuthorization(api_url, "GET");
};

export const getMyActivities = async () => {
  const api_url = `${API_BASE_URL}/private/candidat/get-activities`;
  return fetchWithAuthorization(api_url, "GET");
};

export const getMyProgrammeById = async (id) => {
  const api_url = `${API_BASE_URL}/private/candidat/get-programme/${id}`;
  return fetchWithAuthorization(api_url, "GET");
};

export const deletePost = async (id) => {
  const api_url = `${API_BASE_URL}/private/candidat/${id}/delete-post`;
  return fetchWithAuthorization(api_url, "DELETE");
};

export const deleteMeet = async (id) => {
  const api_url = `${API_BASE_URL}/private/candidat/${id}/delete-meet`;
  return fetchWithAuthorization(api_url, "DELETE");
};

export const deleteActivity = async (id) => {
  const api_url = `${API_BASE_URL}/private/candidat/${id}/delete-activity`;
  return fetchWithAuthorization(api_url, "DELETE");
};

export const deleteProgramme = async (id) => {
  const api_url = `${API_BASE_URL}/private/candidat/delete-programme/${id}`;
  return fetchWithAuthorization(api_url, "DELETE");
};

export const updateActivity = async (id, data) => {
  const api_url = `${API_BASE_URL}/private/candidat/update-activity/${id}`;
  return fetchWithAuthorization(api_url, "PUT", data);
};

export const updateMeet = async (id, data) => {
  const api_url = `${API_BASE_URL}/private/candidat/update-meet/${id}`;
  return fetchWithAuthorization(api_url, "PUT", data);
};

export const addMeet = async (data) => {
  const api_url = `${API_BASE_URL}/private/candidat/add-meet`;
  return fetchWithAuthorization(api_url, "POST", data);
};

export const addActivity = async (data) => {
  const api_url = `${API_BASE_URL}/private/candidat/add-activity`;
  return fetchWithAuthorization(api_url, "POST", data);
};

export const addFollower = async (data) => {
  const api_url = `${API_BASE_URL}/private/candidat/add-follower`;
  return fetchWithAuthorization(api_url, "POST", data);
};

export const addLike = async (data) => {
  const api_url = `${API_BASE_URL}/private/candidat/add-like`;
  return fetchWithAuthorization(api_url, "POST", data);
};

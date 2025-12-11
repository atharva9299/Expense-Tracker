import axios from "axios";
import api from "./axios";

let accessToken: string | null = null;

export function setAxiosAuthToken(token: string | null) {
    accessToken = token;
}

const authAPi = axios.create({
    baseURL:api.defaults.baseURL,
    withCredentials:true,
})



authAPi.interceptors.request.use((config) => {
    if (accessToken && config.headers) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});


export default authAPi;
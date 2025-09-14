import axios from "axios";
import { getToken } from "../utils/auth.js";

const api = axios.create({
    baseURL: "http://localhost:5000/api", // your backend URL
    headers: { "Content-Type": "application/json" }
});

// Add token automatically to every request
api.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;

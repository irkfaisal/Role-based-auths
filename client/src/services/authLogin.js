import axios from "axios";
import { PORT } from "../constants/Data";

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${PORT}/auth/login`, credentials);
        return response?.data; // Here it’s always 200–299 as it axios success code, only success api responses will appear here
    } catch (err) {
        // Normalize Axios error → always throw a consistent object
        const errorMessage =
            err.response?.data?.message || "Unable to login. Please try again.";

        throw new Error(errorMessage);
    }
};
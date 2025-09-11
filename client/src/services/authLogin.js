import axios from "axios";
import { PORT } from "../constants/Data";

export const loginUser = async (credentials) => {
    const response = await axios.post(`${PORT}/auth/login`, credentials);
    return response?.data;
}
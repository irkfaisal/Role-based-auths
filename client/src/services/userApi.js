import api from "./axiosInstance";

// add user/register api by super admin
export const addUser = async (data) => {
    const response = await api.post('/auth/register', data);
    return response?.data;
}

// get all users 

export const getUser = async () => {
    const response = await api.get('/user/users');
    return response?.data;
}
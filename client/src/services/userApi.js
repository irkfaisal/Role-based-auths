import api from "./axiosInstance";

// add user/register api by super admin
export const addUser = async (data) => {
    const response = await api.post('/auth/register', data);
    return response?.data;
}

// get all users 
export const getUser = async () => {
    const response = await api.get('/user');
    return response?.data;
}

// delete user by id
export const deleteUser = async (id) => {
    const response = await api.delete(`/user/delete/${id}`);
    return response?.data;
}

// toggle user status (active/deactive)
export const toggleUserStatus = async (data) => {
    const { userId, isActive } = data;
    const response = await api.patch(`/user/status/${userId}`, { isActive });
    return response?.data;
}
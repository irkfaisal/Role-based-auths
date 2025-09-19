import api from "./axiosInstance";

// Utility: Normalize Axios error into a clean Error object
const handleApiError = (err, defaultMessage) => {
    const message =
        err.response?.data?.message || err.message || defaultMessage;
    throw new Error(message);
};

// add user/register api by super admin
export const addUser = async (data) => {
    try {
        const response = await api.post("/auth/register", data);
        return response?.data;
    } catch (err) {
        handleApiError(err, "Failed to add user");
    }
};

// get all users 
export const getUser = async () => {
    try {
        const response = await api.get("/user");
        return response?.data;
    } catch (err) {
        handleApiError(err, "Failed to fetch users");
    }
};

// delete user by id
export const deleteUser = async (id) => {
    try {
        const response = await api.delete(`/user/delete/${id}`);
        return response?.data;
    } catch (error) {
        handleApiError(error, "Failed to delete user");
    }
};

// toggle user status (active/deactive)
export const toggleUserStatus = async (data) => {
    const { userId, isActive } = data;
    try {
        const response = await api.patch(`/user/status/${userId}`, { isActive });
        return response?.data;
    } catch (err) {
        handleApiError(err, "Failed to update user status");
    }
};
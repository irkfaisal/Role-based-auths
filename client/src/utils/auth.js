export const saveToken = (token) => {
    localStorage.setItem('token', token)
}

export const getToken = () => {
    return localStorage.getItem('token');
};

export const logout = () => {
    localStorage.removeItem('token');
    alert("Logout done")
};

export const saveUserData = (userData) => {
    localStorage.setItem('userData', JSON.stringify(userData))
}
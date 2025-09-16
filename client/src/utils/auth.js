export const saveToken = (token) => {
    localStorage.setItem('token', token)
}

export const getToken = () => {
    return localStorage.getItem('token');
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
     window.location.href = '/login';
    alert("Logout done")
};

export const saveUserData = (userData) => {
    localStorage.setItem('userData', JSON.stringify(userData))
}
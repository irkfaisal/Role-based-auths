import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/authLogin';
import { saveToken, saveUserData } from '../utils/auth';

const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const [userData, setUserData] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const handleLogin = async (credential) => {
        setLoading(true);
        setError('');
        try {
            const data = await loginUser(credential);

            if (data) {
                saveToken(data.token)
                setUserData(data)
                saveUserData(data?.userData)
                navigate('/')
            }

        } catch (error) {
            setError(error)
            throw error;
        } finally {
            setLoading(false)
        }
    }

    return { handleLogin, loading, error, userData }
}

export default useLogin

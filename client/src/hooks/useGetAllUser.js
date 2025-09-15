
import React, { useEffect, useState } from 'react'
import { getUser } from '../services/userApi';

const useGetAllUser = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await getUser();
                setUsers(response)
            } catch (error) {
                setError(error.message || "Failed to fetch users")
            } finally {
                setLoading(false)
            }
        }
        fetchUser()
    }, [])

    return { users, loading, error }
}

export default useGetAllUser;


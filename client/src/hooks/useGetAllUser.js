
import { useEffect, useState } from 'react'
import { deleteUser, getUser, toggleUserStatus } from '../services/userApi';

const useGetAllUser = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true; // to avoid memory leaks
        async function fetchUser() {
            try {
                const response = await getUser();
                if (isMounted) setUsers(response)
            } catch (error) {
                if (isMounted) setError(error.message || "Failed to fetch users")
            } finally {
                if (isMounted) setLoading(false)
            }
        }
        fetchUser();

        return () => {
            isMounted = false; // cleanup
        };

    }, [])

    // ✅ Toggle user active/inactive
    const handleToggleActive = async (userId, isActive) => {
        try {
            const toggleResponse = await toggleUserStatus({ userId, isActive });
            const updatedUser = toggleResponse.user;
            setUsers((prev) =>
                prev.map((u) => (u.id === userId ? { ...u, ...updatedUser } : u))
            );
            alert(toggleResponse.message);
        } catch (err) {
            console.error("Error toggling user:", err);
            throw err;
        }
    };
    // ✅ Delete user
    const handleDeleteUser = async (userId) => {
        try {
            await deleteUser(userId);
            setUsers((prev) => prev.filter((u) => u.id !== userId));
        } catch (err) {
            console.error("Error deleting user:", err);
            throw err;
        }
    };
    // ✅ Update permissions (placeholder)
    const handleUpdatePermissions = async (userId, permissions) => {
        // try {
        //     const updatedUser = await updatePermissions(userId, permissions);
        //     setUsers((prev) =>
        //         prev.map((u) => (u.id === userId ? { ...u, ...updatedUser } : u))
        //     );
        // } catch (err) {
        //     console.error("Error updating permissions:", err);
        //     throw err;
        // }
    };

    return {
        users,
        loading,
        error,
        handleToggleActive,
        handleDeleteUser,
        handleUpdatePermissions,
    }
}

export default useGetAllUser;


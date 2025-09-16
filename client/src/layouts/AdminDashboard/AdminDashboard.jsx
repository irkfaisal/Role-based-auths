import Card from "./components/Card"
import Table from "./components/Table"
import "./styles/AdminDashboard.css"
import useGetAllUser from "../../hooks/useGetAllUser";

const AdminDashboard = () => {
    const { users, loading, error, handleToggleActive, handleUpdatePermissions, handleDeleteUser } = useGetAllUser();

    if (loading) return <p>Loading users...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="dashboard">
            <div className="dashboard-content">
                <Card />
                <Table users={users} handleToggleActive={handleToggleActive} handleUpdatePermissions={handleUpdatePermissions} handleDeleteUser={handleDeleteUser} />
            </div>
        </div>
    )
}

export default AdminDashboard;

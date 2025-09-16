
import useGetAllUser from "../../../hooks/useGetAllUser";
import Table from "../../../layouts/AdminDashboard/components/Table"
import AddUserForm from "./AddUserForm"
import "./styles/AddUserPage.css"

const AddUserPage = ({ onNavigateBack }) => {
    const { users, setUsers, loading, error, handleToggleActive, handleUpdatePermissions, handleDeleteUser } = useGetAllUser();

    if (loading) return <p>Loading users...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="add-user-page">
            <div className="page-content">
                <AddUserForm />
                <Table users={users} setUsers={setUsers} handleToggleActive={handleToggleActive} handleUpdatePermissions={handleUpdatePermissions} handleDeleteUser={handleDeleteUser} />
            </div>
        </div>
    )
}

export default AddUserPage

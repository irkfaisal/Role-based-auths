import AddRoleForm from "./AddRoleForm.jsx";
import AddRoleTable from "./AddRoleTable.jsx";
import "./css/AddRolePage.css";

const AddRolePage = () => {
    return (
        <main className="role-page">
            <div className="role-header">
                <div className="role-header-content">
                    <div className="role-icon">👥</div>
                    <h1 className="role-title">Manage Roles</h1>
                    <p className="role-subtitle">Create and manage user roles for your application</p>
                </div>
            </div>

            <div className="role-container">
                <div className="role-form-section">
                    <AddRoleForm />
                </div>
                <div className="role-table-section">
                    <AddRoleTable />
                </div>
            </div>
        </main>
    );
};

export default AddRolePage;

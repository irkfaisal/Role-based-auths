import AddRoleForm from "./AddRoleForm.jsx";
import AddRoleTable from "./AddRoleTable.jsx";
import "./css/AddRolePage.css";

const AddRolePage = () => {
    return (
        <div className="role-page">
            <h2 className="role-title">Manage Roles</h2>
            <div className="role-container">
                <div className="role-form-section">
                    <AddRoleForm />
                </div>
                <div className="role-table-section">
                    <AddRoleTable />
                </div>
            </div>
        </div>
    );
};

export default AddRolePage;

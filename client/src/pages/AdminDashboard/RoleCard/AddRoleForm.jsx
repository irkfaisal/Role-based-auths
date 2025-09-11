import { useState } from "react";
import './css/AddRoleForm.css'

const AddRoleForm = () => {
    const [roleName, setRoleName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("New Role:", roleName);
        setRoleName("");
    };

    return (
        <form className="role-form" onSubmit={handleSubmit}>
            <h3>Add Role</h3>
            <input
                type="text"
                value={roleName}
                onChange={(e) => setRoleName(e.target.value)}
                placeholder="Enter role name"
                required
            />
            <button type="submit">Add Role</button>
        </form>
    );
};

export default AddRoleForm;

import { useState } from "react";
import './css/AddRoleForm.css'

const AddRoleForm = () => {
    const [roleName, setRoleName] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!roleName.trim()) {
            setError("Role name is required")
            return
        }

        console.log("New Role:", roleName)
        setRoleName("")
        setError("")
    }

    const handleInputChange = (e) => {
        setRoleName(e.target.value)
        if (error) {
            setError("")
        }
    }

    return (
        <div className="role-container">
            <div className="role-card">
                <div className="role-header">
                    <div className="logo">
                        <div className="logo-icon">👤</div>
                    </div>
                    <h2 className="role-title">Add New Role</h2>
                    <p className="role-subtitle">Create a new role for your system</p>
                </div>

                <form className="role-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="roleName" className="form-label">
                            Role Name
                        </label>
                        <input
                            id="roleName"
                            type="text"
                            value={roleName}
                            onChange={handleInputChange}
                            placeholder="Enter role name"
                            className={`form-input ${error ? "form-input-error" : ""}`}
                            required
                        />
                        {error && <span className="error-message">{error}</span>}
                    </div>

                    <button type="submit" className="role-button">
                        Add Role
                    </button>
                </form>
            </div>
        </div>
    )
};

export default AddRoleForm;

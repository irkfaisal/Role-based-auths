import { useState } from "react"
import "./styles/AddUserForm.css"
import { addUser } from "../../../services/userApi"

const AddUserForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        roleId: '8',
        role: "User",
        password: "",
        permissions: [],
        franchisees: [],
        isActive: true,
    })

    const [permissionInput, setPermissionInput] = useState("")
    const [franchiseeInput, setFranchiseeInput] = useState("")

    const availableRoles = [
        { id: 6, name: 'Director' },
        { id: 7, name: 'Admin' },
        { id: 8, name: 'Super Admin' },
        { id: 9, name: 'Employee' },
        { id: 10, name: 'Manager' }
    ]

    const availablePermissions = ["Dashboard", "Projects", "Reports", "Management", "Billing", "Admin"]
    const availableFranchisees = ['Oncore NZ', 'PlanFirst', 'Techverse Origin', 'We Sort It', 'Oncore International', 'Refresh NZ', 'Refresh AU', 'Refresh US', 'Refresh UK', 'Zones NZ', 'Zones AU']

    const handleInputChange = (e) => {
        const { name, value, type } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === "number" ? Number.parseInt(value) : value,
        }))
    }

    const handleRoleChange = (e) => {
        const roleId = Number.parseInt(e.target.value)
        const roleName = availableRoles.find((role) => role.id === roleId)?.name || "User"
        setFormData((prev) => ({
            ...prev,
            roleId,
            role: roleName,
        }))
    }

    const addPermission = (permission) => {
        if (permission && !formData.permissions.includes(permission)) {
            setFormData((prev) => ({
                ...prev,
                permissions: [...prev.permissions, permission],
            }))
        }
    }

    const removePermission = (permission) => {
        setFormData((prev) => ({
            ...prev,
            permissions: prev.permissions.filter((p) => p !== permission),
        }))
    }

    const addFranchisee = (franchisee) => {
        if (franchisee && !formData.franchisees.includes(franchisee)) {
            setFormData((prev) => ({
                ...prev,
                franchisees: [...prev.franchisees, franchisee],
            }))
        }
    }

    const removeFranchisee = (franchisee) => {
        setFormData((prev) => ({
            ...prev,
            franchisees: prev.franchisees.filter((f) => f !== franchisee),
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await addUser(formData)
            if (resp) {
                alert("User added successfully!");
            }
        } catch (error) {
            alert("Failed to add user: " + error.message);
        }
        if (formData.name && formData.email && formData.password) {
            setFormData({
                name: "",
                email: "",
                roleId: 1,
                role: "User",
                password: "",
                permissions: [],
                franchisees: [],
                isActive: true,
            })
            setPermissionInput("")
            setFranchiseeInput("")
            alert("User added successfully!")
        }
    }

    return (
        <div className="form-card">
            <div className="form-header">
                <h2 className="form-title">User Information</h2>
                <p className="form-subtitle">Create a new user account with permissions and access settings</p>
            </div>

            <div className="form-content">
                <form onSubmit={handleSubmit} className="user-form">
                    {/* Basic Information */}
                    <div className="form-grid">
                        <div className="form-field">
                            <label htmlFor="name" className="form-label">
                                <span className="label-icon">👤</span>
                                Full Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                placeholder="Enter full name"
                                className="form-input"
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="email" className="form-label">
                                <span className="label-icon">✉️</span>
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                placeholder="Enter email address"
                                className="form-input"
                            />
                        </div>
                    </div>

                    {/* Role and Password */}
                    <div className="form-grid">
                        <div className="form-field">
                            <label htmlFor="roleId" className="form-label">
                                <span className="label-icon">🛡️</span>
                                Role *
                            </label>
                            <select
                                id="roleId"
                                name="roleId"
                                value={formData.roleId}
                                onChange={handleRoleChange}
                                required
                                className="form-select"
                            >
                                <option value="">Select a role</option>
                                {availableRoles.map((role) => (
                                    <option key={role.id} value={role.id}>
                                        {role.name} (ID: {role.id})
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-field">
                            <label htmlFor="password" className="form-label">
                                <span className="label-icon">🔒</span>
                                Password *
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                                placeholder="Enter password"
                                className="form-input"
                            />
                        </div>
                    </div>

                    {/* Permissions */}
                    <div className="form-section">
                        <label className="form-label">
                            <span className="label-icon">🛡️</span>
                            Permissions
                        </label>

                        {/* Selected Permissions */}
                        {formData.permissions.length > 0 && (
                            <div className="tags-container">
                                {formData.permissions.map((permission, index) => (
                                    <div key={index} className="tag tag-primary">
                                        {permission}
                                        <button type="button" onClick={() => removePermission(permission)} className="tag-remove">
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Available Permissions */}
                        <div className="buttons-container">
                            {availablePermissions.map((permission) => (
                                <button
                                    key={permission}
                                    type="button"
                                    onClick={() => addPermission(permission)}
                                    disabled={formData.permissions.includes(permission)}
                                    className="add-button"
                                >
                                    + {permission}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Franchisees */}
                    <div className="form-section">
                        <label className="form-label">
                            <span className="label-icon">🏢</span>
                            Franchisees
                        </label>

                        {/* Selected Franchisees */}
                        {formData.franchisees.length > 0 && (
                            <div className="tags-container">
                                {formData.franchisees.map((franchisee, index) => (
                                    <div key={index} className="tag tag-secondary">
                                        {franchisee}
                                        <button type="button" onClick={() => removeFranchisee(franchisee)} className="tag-remove">
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Available Franchisees */}
                        <div className="buttons-container">
                            {availableFranchisees.map((franchisee, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => addFranchisee(franchisee)}
                                    disabled={formData.franchisees.includes(franchisee)}
                                    className="add-button"
                                >
                                    + {franchisee}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Active Status */}
                    <div className="toggle-section">
                        <div className="toggle-info">
                            <label htmlFor="isActive" className="toggle-label">
                                Active User
                            </label>
                            <p className="toggle-description">Enable this user account for immediate access</p>
                        </div>
                        <div className="toggle-wrapper">
                            <input
                                type="checkbox"
                                id="isActive"
                                checked={formData.isActive}
                                onChange={(e) => setFormData((prev) => ({ ...prev, isActive: e.target.checked }))}
                                className="toggle-input"
                            />
                            <label htmlFor="isActive" className="toggle-switch"></label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="submit-section">
                        <button type="submit" className="submit-button">
                            Create User Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddUserForm

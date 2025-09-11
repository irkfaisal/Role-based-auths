import { useState } from "react"
import "./styles/AddUserForm.css"

const AddUserForm = ({ onAddUser }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        roleId: 1,
        role: "User",
        password: "",
        permissions: [],
        franchisees: [],
        isActive: true,
    })

    const [permissionInput, setPermissionInput] = useState("")
    const [franchiseeInput, setFranchiseeInput] = useState("")

    const availableRoles = [
        { id: 1, name: "Admin" },
        { id: 2, name: "Manager" },
        { id: 3, name: "User" },
    ]

    const availablePermissions = ["Read", "Write", "Delete", "Update", "Create"]
    const availableFranchisees = ["Franchise A", "Franchise B", "Franchise C", "Franchise D"]

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

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.name && formData.email && formData.password) {
            onAddUser(formData)
            // Reset form
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
        <div className="form-container">
            <div className="form-header">
                <h2>User Information</h2>
            </div>

            <form onSubmit={handleSubmit} className="add-user-form">
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="name">Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter full name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter email address"
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="roleId">Role *</label>
                        <select id="roleId" name="roleId" value={formData.roleId} onChange={handleRoleChange} required>
                            {availableRoles.map((role) => (
                                <option key={role.id} value={role.id}>
                                    {role.name} (ID: {role.id})
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password *</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter password"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label>Permissions</label>
                    <div className="tags-input">
                        <div className="tags-container">
                            {formData.permissions.map((permission, index) => (
                                <span key={index} className="tag permission-tag">
                                    {permission}
                                    <button type="button" onClick={() => removePermission(permission)}>
                                        ×
                                    </button>
                                </span>
                            ))}
                        </div>
                        <div className="add-tags">
                            {availablePermissions.map((permission) => (
                                <button
                                    key={permission}
                                    type="button"
                                    className={`tag-btn ${formData.permissions.includes(permission) ? "disabled" : ""}`}
                                    onClick={() => addPermission(permission)}
                                    disabled={formData.permissions.includes(permission)}
                                >
                                    + {permission}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label>Franchisees</label>
                    <div className="tags-input">
                        <div className="tags-container">
                            {formData.franchisees.map((franchisee, index) => (
                                <span key={index} className="tag franchise-tag">
                                    {franchisee}
                                    <button type="button" onClick={() => removeFranchisee(franchisee)}>
                                        ×
                                    </button>
                                </span>
                            ))}
                        </div>
                        <div className="add-tags">
                            {availableFranchisees.map((franchisee) => (
                                <button
                                    key={franchisee}
                                    type="button"
                                    className={`tag-btn ${formData.franchisees.includes(franchisee) ? "disabled" : ""}`}
                                    onClick={() => addFranchisee(franchisee)}
                                    disabled={formData.franchisees.includes(franchisee)}
                                >
                                    + {franchisee}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            checked={formData.isActive}
                            onChange={(e) => setFormData((prev) => ({ ...prev, isActive: e.target.checked }))}
                        />
                        <span className="checkmark"></span>
                        Active User
                    </label>
                </div>

                <button type="submit" className="submit-btn">
                    Add User
                </button>
            </form>
        </div>
    )
}

export default AddUserForm

import { useState } from 'react'
import './css/AddRoleTable.css'

const dummyRoles = [
    { id: 1, name: "Admin" },
    { id: 2, name: "Manager" },
    { id: 3, name: "Employee" },
]

const AddRoleTable = () => {
    const [roles, setRoles] = useState(dummyRoles)

    const handleEdit = (id) => {
        console.log("Edit role with ID:", id)
    }

    const handleDelete = (id) => {
        setRoles(roles.filter((role) => role.id !== id))
        console.log("Deleted role with ID:", id)
    }

    return (
        <div className="table-container">
            <div className="table-card">
                <div className="table-header">
                    <div className="table-icon">👥</div>
                    <h3 className="table-title">All Roles</h3>
                    <p className="table-subtitle">Manage user roles and permissions</p>
                </div>

                <div className="table-wrapper">
                    <table className="roles-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Role Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {roles.map((role) => (
                                <tr key={role.id}>
                                    <td className="id-cell">{role.id}</td>
                                    <td className="name-cell">{role.name}</td>
                                    <td className="actions-cell">
                                        <button className="action-btn edit-btn" onClick={() => handleEdit(role.id)}>
                                            ✏️ Edit
                                        </button>
                                        <button className="action-btn delete-btn" onClick={() => handleDelete(role.id)}>
                                            🗑️ Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {roles.length === 0 && (
                    <div className="empty-state">
                        <p>No roles found. Add some roles to get started.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
export default AddRoleTable;

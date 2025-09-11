import { useState } from "react"
import "../styles/Table.css"

const Table = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      roleId: 1,
      role: "Admin",
      password: "********",
      permissions: ["Read", "Write", "Delete"],
      franchisees: ["Franchise A", "Franchise B"],
      isActive: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      roleId: 2,
      role: "Manager",
      password: "********",
      permissions: ["Read", "Write"],
      franchisees: ["Franchise C"],
      isActive: true,
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike.johnson@example.com",
      roleId: 3,
      role: "User",
      password: "********",
      permissions: ["Read"],
      franchisees: ["Franchise A"],
      isActive: false,
    },
    {
      id: 4,
      name: "Sarah Wilson",
      email: "sarah.wilson@example.com",
      roleId: 2,
      role: "Manager",
      password: "********",
      permissions: ["Read", "Write"],
      franchisees: ["Franchise B", "Franchise D"],
      isActive: true,
    },
  ])

  const handleToggleActive = (userId) => {
    setUsers(users.map((user) => (user.id === userId ? { ...user, isActive: !user.isActive } : user)))
  }

  const handleUpdatePermissions = (userId) => {
    alert(`Update permissions for user ID: ${userId}`)
  }

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== userId))
    }
  }

  return (
    <div className="table-container">
      <div className="table-header">
        <h2>Users Management</h2>
        <button className="add-user-btn">+ Add User</button>
      </div>

      <div className="table-wrapper">
        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role ID</th>
              <th>Role</th>
              <th>Password</th>
              <th>Permissions</th>
              <th>Franchisees</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <div className="user-name">
                    <div className="user-avatar">{user.name.charAt(0).toUpperCase()}</div>
                    {user.name}
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.roleId}</td>
                <td>
                  <span className={`role-badge role-${user.role.toLowerCase()}`}>{user.role}</span>
                </td>
                <td>{user.password}</td>
                <td>
                  <div className="permissions">
                    {user.permissions.map((permission, index) => (
                      <span key={index} className="permission-tag">
                        {permission}
                      </span>
                    ))}
                  </div>
                </td>
                <td>
                  <div className="franchisees">
                    {user.franchisees.map((franchise, index) => (
                      <span key={index} className="franchise-tag">
                        {franchise}
                      </span>
                    ))}
                  </div>
                </td>
                <td>
                  <label className="toggle-switch">
                    <input type="checkbox" checked={user.isActive} onChange={() => handleToggleActive(user.id)} />
                    <span className="slider"></span>
                  </label>
                </td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="update-btn"
                      onClick={() => handleUpdatePermissions(user.id)}
                      title="Update Permissions"
                    >
                      ✏️
                    </button>
                    <button className="delete-btn" onClick={() => handleDeleteUser(user.id)} title="Delete User">
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table

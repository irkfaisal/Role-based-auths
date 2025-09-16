import "../styles/Table.css"

const Table = ({ users, handleToggleActive, handleUpdatePermissions, handleDeleteUser }) => {
  return (
    <div className="table-container">
      <div className="table-header">
        <h2>Users Management</h2>
      </div>

      <div className="table-wrapper">
        <table className="users-table">
          <thead>
            <tr>
              <th>Sr</th>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role ID</th>
              <th>Role</th>
              <th>Permissions</th>
              <th>Franchisees</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) => (
              <tr key={user.id}>
                <td>{key + 1}</td>
                <td>{user.id || "No data"}</td>
                <td>
                  <div className="user-name">
                    <div className="user-avatar">{user.name ? user.name.charAt(0).toUpperCase() : "?"}</div>
                    {user.name || "No data"}
                  </div>
                </td>
                <td>{user.email || "No data"}</td>
                <td>{user?.role?.id || "No data"}</td>
                <td>
                  <span className={`role-badge role-${user?.role?.name?.toLowerCase()}`}> {user?.role?.name || "No data"}</span>
                </td>
                <td>
                  <div className="permissions">
                    {user.permissions && user.permissions.length > 0 ? (
                      user.permissions.map((permission, index) => (
                        <span key={index} className="permission-tag">
                          {permission?.page?.name || "No data"}
                        </span>
                      ))
                    ) : (
                      <span className="permission-tag">No data</span>
                    )}
                  </div>
                </td>
                <td>
                  <div className="franchisees">
                    {user.franchisees && user.franchisees.length > 0 ? (
                      user.franchisees.map((franchise, index) => (
                        <span key={index} className="franchise-tag">
                          {franchise?.name || "No data"}
                        </span>
                      ))
                    ) : (
                      <span className="franchise-tag">No data</span>
                    )}
                  </div>
                </td>
                <td>
                  <label className="toggle-switch">
                    <input type="checkbox" checked={user.isActive ?? false} onChange={() => handleToggleActive(user.id, user.isActive)} />
                    <span className="slider"></span>
                  </label>
                </td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="update-btn"
                      onClick={() => handleUpdatePermissions(user.id)}
                      title="Update Permissions"
                      disabled={!user.id}
                    >
                      ✏️
                    </button>
                    <button className="delete-btn" onClick={() => handleDeleteUser(user.id)} disabled={!user.id} title="Delete User">
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

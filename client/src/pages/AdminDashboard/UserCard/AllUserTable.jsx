import "./styles/AllUsersTable.css"

const AllUsersTable = ({ users }) => {
    return (
        <div className="all-users-container">
            <div className="table-header">
                <h2>All Users ({users?.length})</h2>
            </div>

            <div className="table-wrapper">
                <table className="all-users-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Permissions</th>
                            <th>Franchisees</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>
                                    <div className="user-name">
                                        <div className="user-avatar">{user.name.charAt(0).toUpperCase()}</div>
                                        {user.name}
                                    </div>
                                </td>
                                <td>{user.email}</td>
                                <td>
                                    <span className={`role-badge role-${user.role.toLowerCase()}`}>{user.role}</span>
                                </td>
                                <td>
                                    <div className="permissions">
                                        {user.permissions?.map((permission, index) => (
                                            <span key={index} className="permission-tag">
                                                {permission}
                                            </span>
                                        ))}
                                    </div>
                                </td>
                                <td>
                                    <div className="franchisees">
                                        {user?.franchisees?.map((franchise, index) => (
                                            <span key={index} className="franchise-tag">
                                                {franchise}
                                            </span>
                                        ))}
                                    </div>
                                </td>
                                <td>
                                    <span className={`status-badge ${user?.isActive ? "active" : "inactive"}`}>
                                        {user?.isActive ? "Active" : "Inactive"}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default AllUsersTable

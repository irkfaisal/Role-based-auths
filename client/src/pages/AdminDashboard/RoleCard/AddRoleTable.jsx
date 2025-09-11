import './css/AddRoleTable.css'

const dummyRoles = [
    { id: 1, name: "Admin" },
    { id: 2, name: "Manager" },
    { id: 3, name: "Employee" },
];

const AddRoleTable = () => {
    return (
        <div className="role-table">
            <h3>All Roles</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Role Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyRoles.map((role) => (
                        <tr key={role.id}>
                            <td>{role.id}</td>
                            <td>{role.name}</td>
                            <td>
                                <button className="edit-btn">Edit</button>
                                <button className="delete-btn">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AddRoleTable;

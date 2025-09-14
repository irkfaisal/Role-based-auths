
import AddUserForm from "./AddUserForm"
import AllUsersTable from "./AllUserTable"
import "./styles/AddUserPage.css"

const AddUserPage = ({ users, onNavigateBack }) => {
    return (
        <div className="add-user-page">
            <div className="page-header">
                <button className="back-btn" onClick={onNavigateBack}>
                    ←
                </button>
                <h1>Add New User</h1>
                <p>Create a new user account and manage user details</p>
            </div>

            <div className="page-content">
                <AddUserForm />
                <AllUsersTable users={users} />
            </div>
        </div>
    )
}

export default AddUserPage

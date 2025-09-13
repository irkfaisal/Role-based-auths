
import AddPageForm from "./AddPageForm"
import AddPageTable from "./AddPageTable"
import "./styles/AddPage.css"

const AddPage = ({ users, onAddUser, onNavigateBack }) => {
    return (
        <div className="add-user-page">
            <div className="page-header">
                <button className="back-btn" onClick={onNavigateBack}>
                    ← Back to Dashboard
                </button>
                <h1>Add New Page</h1>
                <p>Create a new page and manage pages</p>
            </div>

            <div className="page-content">
                <AddPageForm onAddUser={onAddUser} />
                <AddPageTable users={users} />
            </div>
        </div>
    )
}

export default AddPage

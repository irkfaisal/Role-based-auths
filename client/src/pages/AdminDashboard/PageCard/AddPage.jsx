
import AddPageForm from "./AddPageForm"
import AddPageTable from "./AddPageTable"
import "./styles/AddPage.css"

const AddPage = ({ users, onAddUser, onNavigateBack }) => {
    return (
        <div className="add-user-page">
            <div className="page-content">
                <AddPageForm onAddUser={onAddUser} />
                <AddPageTable users={users} />
            </div>
        </div>
    )
}

export default AddPage

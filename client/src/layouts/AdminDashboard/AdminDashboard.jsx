import Card from "./components/Card"
import Table from "./components/Table"
import "./styles/AdminDashboard.css"

const AdminDashboard = () => {
    return (
        <>
            <div className="dashboard">
                <div className="dashboard-header">
                    <h1>Dashboard</h1>
                    <p>Manage your users, roles, and permissions</p>
                </div>

                <div className="dashboard-content">
                    <Card />
                    <Table />
                </div>
            </div>
        </>
    )
}

export default AdminDashboard;

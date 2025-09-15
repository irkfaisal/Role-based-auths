import { useEffect, useState } from "react";
import Card from "./components/Card"
import Table from "./components/Table"
import "./styles/AdminDashboard.css"
import { getUser } from "../../services/userApi";
import useGetAllUser from "../../hooks/useGetAllUser";

const AdminDashboard = () => {
    const { users, loading, error } = useGetAllUser();

    if (loading) return <p>Loading users...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <div className="dashboard">
                <div className="dashboard-content">
                    <Card />
                    <Table users={users} />
                </div>
            </div>
        </>
    )
}

export default AdminDashboard;

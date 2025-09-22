import { Outlet } from 'react-router-dom'
import '../App.css'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const HomePage = () => {
    const getUserData = localStorage.getItem('userData');
    const userData = JSON.parse(getUserData);
    const userRole = userData?.role.name;
    const sidebarData = userData?.permissions;
    console.log("sidebarData", sidebarData);
    return (
        <>
            <div className="layout">
                <Sidebar sidebarData={sidebarData} />
                <div className="main">
                    <Header userRole={userRole} />
                    <div className="content">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage

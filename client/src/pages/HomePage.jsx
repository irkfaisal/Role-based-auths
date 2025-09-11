import { Outlet } from 'react-router-dom'
import '../App.css'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const HomePage = () => {
    return (
        <>
            <div className="layout">
                <Sidebar />
                <div className="main">
                    <Header />
                    <div className="content">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage

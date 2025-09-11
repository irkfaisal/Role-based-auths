import { NavLink } from 'react-router-dom';
import '../App.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <h2>AuthApp</h2>
            <ul>
                <li><NavLink to="/admin">Admin</NavLink></li>
                <li><NavLink to="/user">User</NavLink></li>
                <li><NavLink to="/content">Roles</NavLink></li>
                <li>Settings</li>
            </ul>
        </div>
    );
}

export default Sidebar;

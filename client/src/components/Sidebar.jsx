import { NavLink } from 'react-router-dom';
import '../App.css';

function Sidebar({ sidebarData }) {
    return (
        <div className="sidebar">
            <h2>AuthApp</h2>
            <ul>
                {sidebarData.map((item, index) => (
                    <li key={index.id}>
                        <NavLink to={`${item.page.path}`}>{item.page.name}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;

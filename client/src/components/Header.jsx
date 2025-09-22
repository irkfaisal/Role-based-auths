import '../App.css';
import { logout } from '../utils/auth';

function Header({ userRole }) {
    function handleLogout() {
        logout()
    };

    return (
        <nav className="navbar">
            <div className="navbar-title">Welcome, {userRole}</div>
            <div className="navbar-actions">
                <button onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    );
}

export default Header;

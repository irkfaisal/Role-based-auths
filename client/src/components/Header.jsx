import '../App.css';
import { logout } from '../utils/auth';

function Header() {
    function handleLogout() {
        logout()
    }
    return (
        <nav className="navbar">
            <div className="navbar-title">Welcome, Admin</div>
            <div className="navbar-actions">
                <button onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    );
}

export default Header;

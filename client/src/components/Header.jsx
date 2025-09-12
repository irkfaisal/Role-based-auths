import '../App.css';

function Header() {
    return (
        <nav className="navbar">
            <div className="navbar-title">Welcome, Admin</div>
            <div className="navbar-actions">
                <button>Logout</button>
            </div>
        </nav>
    );
}

export default Header;

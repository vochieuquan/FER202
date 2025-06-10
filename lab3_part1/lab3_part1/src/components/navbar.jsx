import '../css/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() { 
    return (
        <div className="navbar">
            <div className="navbar-brand-section">
                <div className="navbar-brand">Pizza House</div>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="search-container">
                <input type="text" placeholder="Search" />
                <button>Search</button>
            </div>
        </div>
    );
}

export default Navbar;
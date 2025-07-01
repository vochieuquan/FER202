// Navbar.js
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light px-3 shadow-sm">
      <Link className="navbar-brand fw-bold" to="/">Vegan</Link>
      <div className="navbar-nav">
        <Link className="nav-link" to="/news">News</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
        <Link className="nav-link" to="/quiz">Quiz</Link>
      </div>
    </nav>
  );
}

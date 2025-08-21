import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // If already on home, do a full refresh
      window.location.reload();
    }
    // Otherwise, React Router will handle the redirect to "/"
  };

  return (
    <nav className="navbar">
      <div className="logo-title">
        <h2>
          <Link to="/" onClick={handleLogoClick} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
            My Portfolio
          </Link>
        </h2>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

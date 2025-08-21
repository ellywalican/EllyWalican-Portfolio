import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false); // state for mobile menu

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.location.reload();
    }
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

      {/* Navigation Links */}
      <ul className={open ? 'open' : ''}>
        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
        <li><Link to="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
        <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
      </ul>

      {/* Hamburger Menu Button */}
      <div className="menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;

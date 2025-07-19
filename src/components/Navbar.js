  import React from 'react';
  import { Link } from 'react-router-dom';
  import './Navbar.css';

  const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="logo-title">
        <img src="https://scontent.fmnl7-1.fna.fbcdn.net/v/t39.30808-1/506475483_1915681675948655_1051936473401037800_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeHTxh5sVy1b8j-zTavPMwDcCY188kw5-ysJjXzyTDn7K1ubKitxCbEXtAqsejvs6T8hg4GNA9Q6EA7g92f5RwS1&_nc_ohc=6IEh0becCq4Q7kNvwHSd69i&_nc_oc=AdkKeBPICpy2nmDThY-HewLOH6XqIcOB7fVExkqUEvWC7YKt6zJUrK0FO-MMUKQYuqo&_nc_zt=24&_nc_ht=scontent.fmnl7-1.fna&_nc_gid=WhT3zd7gsWGih8gSZJx29w&oh=00_AfQa3RNDxxfmHKCjpFw2ay34XDksxJFlCqeilQrXbmHJ3g&oe=68815DB7" alt="Logo" className="logo" />
        <h2>Elly Walican</h2>
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

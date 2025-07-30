  import React from 'react';
  import { Link } from 'react-router-dom';
  import './Navbar.css';

  const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="logo-title">
        <img src="https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-1/524595065_1948156789367810_8538665807610987039_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeF17WzyYpe3c5rq23gyflv7ittEisPpf0KK20SKw-l_Qsrf3gFZiXWN5pEV_lzyZgCBKsUilfg9bib6Zcb1rZoq&_nc_ohc=daJSNyejVLgQ7kNvwHyZXnl&_nc_oc=AdlOD_G1k7RJigxpFz8U_Mj3LXDohs8I_3Snh0L8kVQdCQTuBIbkmIkqpquZlJn4yOk&_nc_zt=24&_nc_ht=scontent.fmnl13-4.fna&_nc_gid=OtcqmYoyfhonamrqDtq7mg&oh=00_AfSh6lsbxHJCBTWZP_iNpQ5S5HMlpahykLe3TpiZFScljQ&oe=688F4606" alt="Logo" className="logo" />
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

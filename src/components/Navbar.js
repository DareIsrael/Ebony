import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom for navigation


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>EbonyfirstClass</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
       
        <li>
          <Link to="/subscribe" className="nav-link">Subscription</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

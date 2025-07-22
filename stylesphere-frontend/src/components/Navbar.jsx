import React from 'react';
import { FaHeart, FaShoppingCart, FaSearch } from 'react-icons/fa';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">StyleSphere</div>
      </div>

      <div className="navbar-center">
        <div className="navbar-search">
          <input type="text" placeholder="Search products..." />
          <button type="button" className="search-btn">
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="navbar-right">
        <FaHeart className="nav-icon" />
        <FaShoppingCart className="nav-icon" />
        <button className="login-btn">Login/Register</button>
      </div>
    </nav>
  );
}

export default Navbar;

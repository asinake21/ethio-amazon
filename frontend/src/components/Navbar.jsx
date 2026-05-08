import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar glass">
      <div className="navbar-container">
        <div className="logo">
          <h1 className="gradient-text">Ethi-Amazon</h1>
        </div>
        <div className="nav-links">
          <a href="/" className="nav-item">Home</a>
          <a href="/shop" className="nav-item">Shop</a>
          <a href="/categories" className="nav-item">Categories</a>
          <a href="/sell" className="nav-item">Sell</a>
        </div>
        <div className="nav-actions">
          <div className="search-bar glass">
            <input type="text" placeholder="Search products..." />
          </div>
          <button className="cart-btn">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">0</span>
          </button>
          <button className="auth-btn glass">Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cartCount } = useCart();
  const [isLight, setIsLight] = React.useState(false);

  const toggleTheme = () => {
    const newTheme = !isLight;
    setIsLight(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme ? 'light' : 'dark');
  };

  return (
    <nav className="navbar glass">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <h1 className="gradient-text">Ethi-Amazon</h1>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/shop" className="nav-item">Shop</Link>
          {user && user.role === 'seller' && <Link to="/sell" className="nav-item">Seller Dashboard</Link>}
          {user && user.role === 'admin' && <Link to="/admin" className="nav-item">Admin</Link>}
        </div>
        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle Dark/Light Mode">
            {isLight ? '🌙' : '☀️'}
          </button>
          <div className="search-bar glass">
            <input type="text" placeholder="Search products..." />
          </div>
          <button className="cart-btn">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{cartCount}</span>
          </button>
          
          {user ? (
            <div className="user-menu">
              <span className="user-name">Hi, {user.name.split(' ')[0]}</span>
              <button onClick={logout} className="auth-btn glass">Logout</button>
            </div>
          ) : (
            <Link to="/login" className="auth-btn glass">Sign In</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

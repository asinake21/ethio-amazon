import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import CartSidebar from './CartSidebar';
import { Search, ShoppingBag, User, Sun, Moon, LogOut } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cartCount } = useCart();
  const [isLight, setIsLight] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const toggleTheme = () => {
    const newTheme = !isLight;
    setIsLight(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme ? 'light' : 'dark');
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <>
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
            {user && user.role === 'seller' && <Link to="/sell" className="nav-item">Dashboard</Link>}
          </div>
          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme}>
              {isLight ? <Moon size={22} /> : <Sun size={22} />}
            </button>
            <div className="search-bar glass">
              <Search size={18} className="search-icon" />
              <input type="text" placeholder="Search treasures..." />
            </div>
            <button className="cart-btn" onClick={toggleCart}>
              <ShoppingBag size={22} />
              <span className="cart-count">{cartCount}</span>
            </button>
            
            {user ? (
              <div className="user-menu">
                <span className="user-name">{user.name.split(' ')[0]}</span>
                <button onClick={logout} className="logout-btn" title="Logout"><LogOut size={20} /></button>
              </div>
            ) : (
              <Link to="/login" className="auth-btn glass">Sign In</Link>
            )}
          </div>
        </div>
      </nav>
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;

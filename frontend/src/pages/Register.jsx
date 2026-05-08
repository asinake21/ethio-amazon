import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './Login.css'; // Reuse common auth styles

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'buyer'
  });
  const [error, setError] = useState('');
  const { register } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const res = await register(formData);
    if (!res.success) {
      setError(res.error);
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card glass">
        <h2 className="gradient-text">Join the Future</h2>
        <p className="auth-subtitle">Create your Ethi-Amazon account</p>
        
        {error && <div className="error-msg">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              name="name"
              className="glass"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              name="email"
              className="glass"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              name="password"
              className="glass"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>I want to:</label>
            <select 
              name="role" 
              className="glass auth-select"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="buyer">Buy Products</option>
              <option value="seller">Sell Products</option>
              <option value="delivery">Deliver Orders</option>
            </select>
          </div>
          <button type="submit" className="primary-btn auth-submit">Create Account</button>
        </form>
        
        <p className="auth-footer">
          Already have an account? <a href="/login">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default Register;

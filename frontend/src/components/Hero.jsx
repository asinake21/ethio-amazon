import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-badge">Modernizing Heritage</span>
          <h1 className="hero-title">
            The Ultimate <span className="gradient-text">Ethiopian</span> <br /> 
            Marketplace
          </h1>
          <p className="hero-subtitle">
            Experience the vibrant culture of Ethiopia through curated traditional 
            art, world-class coffee, and modern fashion. Handcrafted excellence, 
            delivered to your doorstep.
          </p>
          <div className="hero-cta">
            <Link to="/shop">
              <button className="primary-btn hero-btn">
                Shop Now <ArrowRight size={20} />
              </button>
            </Link>
            <button className="secondary-btn hero-btn">Explore Stories</button>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num">5k+</span>
              <span className="stat-label">Products</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num">10k+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="hero-image-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-image-glow"></div>
        <img src="/hero.png" alt="Ethiopian Marketplace" className="hero-image" />
      </motion.div>
    </section>
  );
};

export default Hero;

import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-subtitle">Experience the Future of Ethiopian Commerce</h2>
        <h1 className="hero-title">Connect with Local Vendors <br/> <span className="gradient-text">Nationwide</span></h1>
        <p className="hero-description">
          Bridging the gap between local craftsmanship and modern buyers. 
          The unified marketplace for Ethiopia.
        </p>
        <div className="hero-btns">
          <button className="primary-btn">Start Shopping</button>
          <button className="secondary-btn glass">Sell on Ethi-Amazon</button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-image-container glass">
          {/* We will add the generated image here */}
          <div className="hero-overlay"></div>
        </div>
      </div>
      <div className="hero-bg-accent"></div>
    </section>
  );
};

export default Hero;

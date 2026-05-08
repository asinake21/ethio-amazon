import React from 'react';
import ProductGrid from '../components/ProductGrid';
import './Shop.css';

const Shop = () => {
  return (
    <div className="shop-page">
      <div className="shop-banner glass">
        <h1 className="gradient-text">Ethi-Amazon Shop</h1>
        <p>Discover the finest Ethiopian products all in one place.</p>
      </div>
      
      <div className="shop-container">
        <div className="shop-filters glass">
          <h3>Categories</h3>
          <ul>
            <li className="active">All Products</li>
            <li>Electronics</li>
            <li>Clothing</li>
            <li>Traditional Art</li>
            <li>Coffee & Food</li>
            <li>Home & Garden</li>
            <li>Beauty</li>
          </ul>
        </div>
        
        <div className="shop-main">
          <ProductGrid />
        </div>
      </div>
    </div>
  );
};

export default Shop;

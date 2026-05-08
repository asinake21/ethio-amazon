import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        setProducts(res.data.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching products:', err);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div className="loader container">Loading amazing products...</div>;
  }

  return (
    <section className="product-grid-section container">
      <div className="section-header">
        <h2 className="gradient-text">Featured Products</h2>
        <p>Handpicked treasures from across Ethiopia</p>
      </div>
      
      {products.length === 0 ? (
        <p className="no-products">No products found. Start by adding some!</p>
      ) : (
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductGrid;

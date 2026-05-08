import React from 'react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card glass">
      <div className="product-image">
        {/* Using a placeholder if no image exists */}
        <img src={product.image === 'no-photo.jpg' ? `https://via.placeholder.com/400?text=${product.name}` : product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price}</p>
        <button 
          className="add-to-cart" 
          title="Add to Cart"
          onClick={() => addToCart(product)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

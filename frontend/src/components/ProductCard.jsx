import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Plus } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      className="product-card glass"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4 }}
    >
      <div className="product-image">
        <img src={product.image === 'no-photo.jpg' ? `https://via.placeholder.com/400?text=${product.name}` : product.image} alt={product.name} />
        <div className="product-badge">{product.category}</div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description.substring(0, 60)}...</p>
        <div className="product-footer">
          <p className="product-price">${product.price}</p>
          <motion.button 
            className="add-to-cart-btn" 
            whileTap={{ scale: 0.9 }}
            onClick={() => addToCart(product)}
          >
            <Plus size={20} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;

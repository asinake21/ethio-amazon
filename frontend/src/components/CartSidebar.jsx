import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import './CartSidebar.css';

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, clearCart, cartCount } = useCart();
  
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="cart-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div 
            className="cart-sidebar glass"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="cart-header">
              <h2>Your Shopping Bag ({cartCount})</h2>
              <button onClick={onClose} className="close-btn"><X /></button>
            </div>

            <div className="cart-items">
              {cartItems.length === 0 ? (
                <div className="empty-cart">
                  <ShoppingBag size={64} />
                  <p>Your bag is empty</p>
                  <button onClick={onClose} className="primary-btn">Start Shopping</button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item._id} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <div className="item-details">
                      <h4>{item.name}</h4>
                      <p>${item.price} x {item.quantity}</p>
                    </div>
                    <button onClick={() => removeFromCart(item._id)} className="remove-item">
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="cart-footer">
                <div className="total-price">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <button className="primary-btn checkout-btn">Proceed to Checkout</button>
                <button onClick={clearCart} className="clear-cart-btn">Clear Bag</button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;

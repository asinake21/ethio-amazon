import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Login from './pages/Login';
import Register from './pages/Register';
import Shop from './pages/Shop';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<><Hero /><ProductGrid /></>} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/* Add more routes here */}
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  </AuthProvider>
);
}

export default App;

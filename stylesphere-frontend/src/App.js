import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all your pages
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ProductList from './Pages/ProductList';
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Profile from './Pages/Profile';
import SellerDashboard from './Pages/SellerDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/seller" element={<SellerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

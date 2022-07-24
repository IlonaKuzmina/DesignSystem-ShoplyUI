import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Footer from './component/Footer/Footer';
import Navigation from './component/Navigation/Navigation';
import AboutPage from './pages/AboutPage/AboutPage';
import CartPage from './pages/CartPage/CartPage';
import DetailPage from './pages/DetailPage/DetailPage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProductPage from './pages/ProductPage/ProductPage';
import AdminProductsPage from './pages/AdminProductsPage/AdminProductsPage';
import AdminHomePage from './pages/AdminHomePage/AdminHomePage';
import AdminHeader from './component/AdminHeader/AdminHeader';

const App = () => {
  const [admin, setAdmin] = useState(true);

  return (
    <Router>
      {admin ? (
        <>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/products/:id" element={<DetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route path="/admin/home" element={<AdminHomePage />} />
            <Route path="/admin/products" element={<AdminProductsPage />} />
          </Routes>
        </>
      )
        : (
          <>
            <AdminHeader />
            <Routes>
              <Route path="/" element={<AdminHomePage />} />
              <Route path="/admin/home" element={<AdminHomePage />} />
              <Route path="/admin/products" element={<AdminProductsPage />} />
            </Routes>

          </>
        )}

      <Footer />
    </Router>
  );
};

export default App;

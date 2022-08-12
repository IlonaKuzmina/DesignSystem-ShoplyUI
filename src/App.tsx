import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Footer from './component/Footer/Footer';
import Navigation from './component/Navigation/Navigation';
import AboutPage from './pages/AboutPage/AboutPage';
import CartPage from './pages/CartPage/CartPage';
import DetailPage from './pages/DetailPage/DetailPage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import AdminProductsPage from './pages/AdminProductsPage/AdminProductsPage';
import AdminHomePage from './pages/AdminHomePage/AdminHomePage';
import AdminHeader from './component/AdminHeader/AdminHeader';
import Page404 from './pages/Page404/Page404';

const App = () => {
  const [adminIsLoged, setAdminIsLoged] = useState(false);
  const [error, setError] = useState();

  const adminUser = {
    email: 'admin@adm.com',
    password: '123',
  };

  const loginStatus = (logInfo: any) => {
    if (adminUser.email === logInfo.email && adminUser.password === logInfo.password) {
      setAdminIsLoged(true);
    } else {
      alert('Username and/or password do not match.');
    }
  };

  const logOut = (logOutInfo: any) => {
    setAdminIsLoged(logOutInfo);
  };

  return (
    <Router>
      {!adminIsLoged ? (
        <>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<DetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage loginStatus={loginStatus} />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </>
      )
        : (
          <>
            <AdminHeader logOut={logOut} />
            <Routes>
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

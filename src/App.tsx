import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import store from './reducer/store';

import './App.css';
import Footer from './component/Atoms/Footer/Footer';
import Navigation from './component/Molecules/Navigation/Navigation';
import AboutPage from './component/Pages/AboutPage/AboutPage';
import CartPage from './component/Pages/CartPage/CartPage';
import DetailPage from './component/Pages/DetailPage/DetailPage';
import HomePage from './component/Pages/HomePage/HomePage';
import LoginPage from './component/Pages/LoginPage/LoginPage';
import ProductsPage from './component/Pages/ProductsPage/ProductsPage';
import AdminProductsPage from './component/Pages/AdminProductsPage/AdminProductsPage';
import AdminHomePage from './component/Pages/AdminHomePage/AdminHomePage';
import AdminHeader from './component/Atoms/AdminHeader/AdminHeader';
import Page404 from './component/Pages/Page404/Page404';

const App = () => {
  const [adminIsLoged, setAdminIsLoged] = useState(false);

  const adminUser = {
    email: 'admin@adm.com',
    password: '123',
  };

  const loginStatus = (logInfo: any) => {
    if (adminUser.email === logInfo.email && adminUser.password === logInfo.password) {
      setAdminIsLoged(true);
    } else {
      // eslint-disable-next-line no-alert
      alert('Username and/or password do not match.');
    }
  };

  const logOut = (logOutInfo: any) => {
    setAdminIsLoged(logOutInfo);
  };

  return (
    <Provider store={store}>
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
              <Route path="/login" element={<LoginPage loginStatus={loginStatus} adminIsLoged={adminIsLoged} />} />
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
    </Provider>
  );
};

export default App;

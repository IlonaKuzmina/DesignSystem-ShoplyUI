/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { RootState } from '../../reducer/store';
import './BurgerNav.scss';

const BurgerNav = () => {
  const products = useSelector(({ product }: RootState) => product);
  const [checked, setChecked] = React.useState(false);
  const navigate = useNavigate();

  return (
    <section className="top-nav hiddenb" aria-hidden="true">
      <div className="logo__wrapper" onClick={() => { navigate('/home'); }}>
        <img src="./assets/logo/Shoply..png" alt="" />
      </div>
      <input id="menu-toggle" type="checkbox" checked={checked} onClick={() => { setChecked((old) => !old); }} />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button" />
      </label>
      <ul className="menu">
        <li>
          <NavLink
            to="/home"
            className="navigation__link"
            onClick={() => { setChecked((old) => !old); }}
          >
            Home
          </NavLink>

        </li>
        <li>
          <NavLink
            to="/products"
            className="navigation__link"
            onClick={() => { setChecked((old) => !old); }}
          >
            Products
          </NavLink>

        </li>
        <li>
          <NavLink
            to="/about"
            className="navigation__link"
            onClick={() => { setChecked((old) => !old); }}
          >
            About
          </NavLink>

        </li>
        <li>
          <NavLink to="/cart" id="cart" className="navigation__link" onClick={() => { setChecked((old) => !old); }}>
            Cart
            <span id="counter" className="cart__button--counterb">{products.cartTotal}</span>
          </NavLink>
        </li>
        <li>
          <span
            className="navigation__link"
            onClick={() => { navigate('/login'); setChecked((old) => !old); }}
          >
            Log in
          </span>

        </li>
      </ul>
    </section>
  );
};

export default BurgerNav;

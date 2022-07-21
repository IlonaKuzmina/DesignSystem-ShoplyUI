/* eslint-disable jsx-a11y/label-has-associated-control */
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import './BurgerNav.scss';

const BurgerNav = () => {
  const navigate = useNavigate();

  return (
    <section className="top-nav hiddenb" aria-hidden="true">
      <div className="logo__wrapper" onClick={() => { navigate('/home'); }}>
        <img src="./assets/logo/Shoply..png" alt="" />
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button" />
      </label>
      <ul className="menu">
        <li><NavLink to="/home" className="navigation__link">Home</NavLink></li>
        <li><NavLink to="/products" className="navigation__link">Products</NavLink></li>
        <li><NavLink to="/about" className="navigation__link">About</NavLink></li>
        <li>
          <NavLink to="/cart" className="navigation__link">
            Cart
            <span className="cart__button--counterb">0</span>
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default BurgerNav;

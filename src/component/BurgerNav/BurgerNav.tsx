/* eslint-disable jsx-a11y/label-has-associated-control */
import { NavLink } from 'react-router-dom';
import './BurgerNav.scss';

const BurgerNav = () => (
  <div className="burger__container">
    {/* <section className="top-nav">
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button" />
      </label>
      <ul className="menu">
        <li><NavLink to="/home" className="navigation__link">Home</NavLink></li>
        <li><NavLink to="/products" className="navigation__link">Products</NavLink></li>
        <li><NavLink to="/about" className="navigation__link">About</NavLink></li>
      </ul>
    </section> */}
  </div>
);

export default BurgerNav;

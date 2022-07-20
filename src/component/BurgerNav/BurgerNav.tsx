import { NavLink } from 'react-router-dom';
import './BurgerNav.scss';

const BurgerNav = () => (
  <div className="burger__container">
    <nav role="navigation">
      <div id="menuToggle">

        <input className="input__burger" type="checkbox" />

        <span />
        <span />
        <span />

        <ul id="menu">
          <NavLink to="/home" className="navigation__link">Home</NavLink>
          <NavLink to="/products" className="navigation__link">Products</NavLink>
          <NavLink to="/about" className="navigation__link">About</NavLink>
          {/* <a href="#"><li>Home</li></a>
        <a href="#"><li>Product</li></a>
        <a href="#"><li>About</li></a> */}
        </ul>
      </div>
    </nav>
  </div>
);

export default BurgerNav;

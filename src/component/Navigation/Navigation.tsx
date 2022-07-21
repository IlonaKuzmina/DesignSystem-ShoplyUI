/* eslint-disable jsx-a11y/label-has-associated-control */
import { NavLink, useNavigate } from 'react-router-dom';
import BurgerNav from '../BurgerNav/BurgerNav';
import Button from '../Button/Button';
import './Navigation.scss';

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="navigation__wrapper">
        <div className="logo__wrapper" onClick={() => { navigate('/home'); }}>
          <img src="./assets/logo/Shoply..png" alt="" />
        </div>

        <div className="navigation__links--container">
          <NavLink to="/home" className="navigation__link">Home</NavLink>
          /
          <NavLink to="/products" className="navigation__link">Products</NavLink>
          /
          <NavLink to="/about" className="navigation__link">About</NavLink>
        </div>

        <div className="cart__button--container">
          <div className="cart__button--wrapper">
            <button className="cart__button" onClick={() => { navigate('/cart'); }}>
              <img className="cart__button--image" src="./assets/icons/cart.svg" alt="Cart" />
              <span className="cart__button--counter">0</span>
            </button>
          </div>

          <Button padding="8px 33px" label="Log in" primary />
        </div>

        {/* <div className="burger__navigation--wrapper hidden" aria-hidden="true">
          <BurgerNav />
        </div> */}

      </div>

      <section className="top-nav hidden" aria-hidden="true">
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
        </ul>
      </section>

    </div>
  );
};

export default Navigation;

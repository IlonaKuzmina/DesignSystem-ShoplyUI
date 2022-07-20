import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import './Navigation.scss';

export const Navigation = () => {
  const navigate = useNavigate();

  return (
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
    </div>
  );
};

export default Navigation;

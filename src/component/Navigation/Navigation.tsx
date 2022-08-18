import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { RootState } from '../../reducer/store';
import BurgerNav from '../BurgerNav/BurgerNav';
import Button from '../Button/Button';
import './Navigation.scss';

export const Navigation = () => {
  const products = useSelector(({ product }: RootState) => product);
  const navigate = useNavigate();

  return (
    <div>
      <div className="navigation__wrapper">
        <div className="logo__wrapper" onClick={() => { navigate('/home'); }}>
          <img src="./assets/logo/Shoply..png" alt="" />
        </div>

        <div className="navigation__links--container">
          <NavLink
            to="/home"
            className={({ isActive }) => [
              'navigation__link',
              isActive ? 'active__link' : null,
            ]
              .filter(Boolean)
              .join(' ')}
            end
          >
            Home

          </NavLink>
          /
          <NavLink
            to="/products"
            className={({ isActive }) => [
              'navigation__link',
              isActive ? 'active__link' : null,
            ]
              .filter(Boolean)
              .join(' ')}
            end
          >
            Products

          </NavLink>
          /
          <NavLink
            to="/about"
            className={({ isActive }) => [
              'navigation__link',
              isActive ? 'active__link' : null,
            ]
              .filter(Boolean)
              .join(' ')}
            end
          >
            About

          </NavLink>
        </div>

        <div className="cart__button--container">
          <div className="cart__button--wrapper">
            <button className="cart__button" onClick={() => { navigate('/cart'); }}>
              <img className="cart__button--image" src="/assets/icons/cart.svg" alt="Cart" />
              <span className="cart__button--counter">{products.cartTotal}</span>
            </button>
          </div>

          <Button onClick={() => { navigate('/login'); }} padding="8px 33px" label="Log in" primary />
        </div>
      </div>

      <BurgerNav />

    </div>
  );
};

export default Navigation;

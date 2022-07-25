/* eslint-disable jsx-a11y/label-has-associated-control */
import { NavLink, useNavigate } from 'react-router-dom';
import './AdminBurgerNav.scss';

const AdminBurgerNav = ({ loginStatus }: any) => {
  const navigate = useNavigate();

  const data = false;

  return (
    <section className="top-nav hiddenb" aria-hidden="true">
      <div className="logo__wrapper" onClick={() => { navigate('/home'); }}>
        <img src="./public/assets/logo/Shoply..png" alt="" />
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button" />
      </label>

      <ul className="menu">
        {/* <div className="navigation__links--container">
          <NavLink to="/admin/home" className="navigation__link">Home</NavLink>
          /
          <NavLink to="/admin/products" className="navigation__link">Products</NavLink>
          /
          <NavLink to="/home" className="navigation__link">Logout</NavLink>
        </div> */}

        <li><NavLink to="/admin/home" className="navigation__link">Home</NavLink></li>
        <li><NavLink to="/admin/products" className="navigation__link">Products</NavLink></li>
        {/* <li><NavLink to="/home" className="navigation__link">Logoutttt</NavLink></li> */}
        <li><button type="submit" onClick={() => { loginStatus(data); navigate('/home'); }}>logout</button></li>

      </ul>
    </section>
  );
};

export default AdminBurgerNav;

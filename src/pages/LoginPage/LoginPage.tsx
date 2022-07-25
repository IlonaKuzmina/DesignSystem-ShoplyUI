import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../../component/Button/Button';
import './LoginPage.scss';

const LoginPage = ({ loginStatus }: any) => {
  const [admin, setAdmin] = useState('');
  const navigate = useNavigate();

  const data = true;

  return (
    <div className="login__header--wrapper">
      <div className="row center-xs middle-sm">
        <div className="col-xs-12 col-sm-5 col-md-5">
          <div className="header__wrapper--right">
            <img src="./assets/images/clock__login.png" alt="Title" />
          </div>
        </div>

        <div className="col-xs-12 col-sm-5 col-md-5">
          <div className="login__wrapper--left">
            <form>
              <h1 className="login__title">login</h1>
              <input className="login__name--input" type="text" placeholder=" " />
              <br />
              <input className="login__password--input" type="password" placeholder=" " />
              <br />
              <span>Forgot password?</span>
              <br />
              <button
                className="login__button"
                onClick={() => { loginStatus(data); navigate('/admin/home'); }}
              >
                Next

              </button>
              {/* <br />
              <NavLink to="/admin/home" className="navigation__link">Admin home</NavLink>
              <br />
              <NavLink to="/admin/products" className="navigation__link">Admin products</NavLink> */}
            </form>

          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;

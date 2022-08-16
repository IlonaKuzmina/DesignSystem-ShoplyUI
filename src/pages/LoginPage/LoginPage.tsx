import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.scss';

const LoginPage = ({ loginStatus, adminIsLoged }: any) => {
  const adminUser = {
    email: 'admin@adm.com',
    password: '123',
  };

  const [user, setUser] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const focusInput = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (focusInput.current) {
      focusInput.current.focus();
    }
  }, []);

  const submitHandler = (e: any) => {
    e.preventDefault();
  };

  const goToAdminPage = () => {
    if ((user.password === adminUser.password) && (user.password === adminUser.password)) {
      navigate('/admin/home');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="login__header--wrapper">
      <div className="row center-xs middle-sm">
        <div className="col-xs-12 col-sm-6 col-md-5">
          <div className="login__picture">
            <img src="./assets/images/clock__login.png" alt="Title" />
          </div>
        </div>

        <div className="col-xs-10 col-sm-5 col-md-5">
          <div className="login__wrapper--left">
            <form onSubmit={submitHandler}>
              <h1 className="login__title">login</h1>
              <input
                className="login__name--input"
                type="text"
                placeholder="Email: admin@adm.com"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                value={user.email}
                ref={focusInput}
              />
              {(user.email === '' || user.email === adminUser.email)
                ? '' : (<span>User name is incorect</span>)}
              <br />

              <input
                className="login__password--input"
                type="password"
                placeholder="Password: 123"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                value={user.password}
                required
              />
              {(user.password === '' || user.password === adminUser.password)
                ? '' : (<span>Password is incorect</span>)}
              <br />

              <span className="login__span--text">Forgot password?</span>
              <br />

              <button
                type="button"
                className="login__button"
                onClick={() => { loginStatus(user); goToAdminPage(); }}
              >
                Next

              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;

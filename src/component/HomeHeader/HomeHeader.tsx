import './HomeHeader.scss';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

export const HomeHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="home__header--wrapper">
      <div className="row center-xs middle-sm">
        <div className="col-xs-12 col-sm-5 col-md-6">
          <div className="header__wrapper--left">
            <h1 className="header__title">logitech g pro x superlight</h1>
            <p className="header__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulm nibh erat</p>

            <Button
              padding="12px 37px"
              label="shop now"
              primary
              onClick={() => navigate('/products')}
            />
          </div>
        </div>
        <div className="col-xs-12 col-sm-7 col-md-6">
          <div className="header__wrapper--right">
            <img src="./assets/images/title__pick.png" alt="Title" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;

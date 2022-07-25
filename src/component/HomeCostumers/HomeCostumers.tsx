import './HomeCostumers.scss';
import HomeTitle from '../HomeTitle/HomeTitle';

const HomeCostumers = () => (
  <div className="costumer__container">
    <HomeTitle title="what our costumers are saying" />
    <div className="row">
      <div className="col-xs-12 col-md-4">
        <img className="costumer__image" src="./assets/images/girl.png" alt="" />
      </div>
      <div className="col-xs-12 col-md-8">
        <div className="costumer__wrapper">
          <h2 className="costumer__title">Help us Improve our productivity</h2>
          <p className="costumer__text">
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur,
            purus id tincidunt feugiat, metus orci sagittis elit, quis tempor orci elit id arcu.
            Proin egestas bibendum efficitur. &quot;

          </p>
          <p className="costumer__text--signature">Adriana Lopez</p>
          <p className="costumer__text--profesion">Client</p>
        </div>
      </div>
    </div>
  </div>
);

export default HomeCostumers;

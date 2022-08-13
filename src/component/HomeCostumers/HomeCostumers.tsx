import './HomeCostumers.scss';
import HomeTitle from '../HomeTitle/HomeTitle';

const HomeCostumers = () => (
  <div className="costumer__container">
    <HomeTitle title="what our costumers are saying" />

    <div className="costumer__content--block">
      <div className="costumer__image--wrapper">
        <img className="costumer__image" src="./assets/images/girl.png" alt="" />
      </div>

      <div className="costumer__content--wrapper">
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
);

export default HomeCostumers;

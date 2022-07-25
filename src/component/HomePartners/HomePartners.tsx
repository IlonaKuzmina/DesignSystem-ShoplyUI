import HomeTitle from '../HomeTitle/HomeTitle';
import './HomePartner.scss';

export const HomePartners = () => (
  <footer className="partner__container">
    <div className="">
      <div className="">
        <HomeTitle title="Our partners" />
        <div className="partner__logos--container">
          <div className="partner__logo--wrapper">
            <div className="partner__logo partner__logo--jpmorgan" />
            <div className="partner__logo partner__logo--ousho" />
          </div>

          <div className="partner__logo--wrapper">
            <div className="partner__logo partner__logo--pullbear" />
            <div className="partner__logo partner__logo--rosewood" />
          </div>
        </div>
      </div>
    </div>
  </footer>

);

export default HomePartners;

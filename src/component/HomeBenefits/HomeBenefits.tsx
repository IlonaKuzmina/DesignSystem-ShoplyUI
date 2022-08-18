import './HomeBenefits.scss';
import BenefitsCard from '../BenefitsCard/BenefitsCard';
import { HomeTitle } from '../HomeTitle/HomeTitle';

const HomeBenefits = () => (
  <div className="benefits__container">
    <HomeTitle title="benefits using our services" />
    <div className="benefits__wrapper">
      <BenefitsCard
        image="/assets/icons/quality.svg"
        title="best quality"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur, purus id "
      />
      <BenefitsCard
        image="/assets/icons/shipping.svg"
        title="free shipping"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur, purus id "
      />
      <BenefitsCard
        image="/assets/icons/warranty.svg"
        title="warranty"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur, purus id "
      />
    </div>
  </div>
);

export default HomeBenefits;

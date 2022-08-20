import { useEffect } from 'react';
import './HomePage.scss';
import HomeBenefits from '../../Molecules/HomeBenefits/HomeBenefits';
import HomeCostumers from '../../Atoms/HomeCostumers/HomeCostumers';
import HomeProduct from '../../Molecules/HomeProduct/HomeProduct';
import HomePartners from '../../Atoms/HomePartners/HomePartners';
import HomeHeader from '../../Atoms/HomeHeader/HomeHeader';
import ScrollUpButton from '../../Atoms/ScrollUpButton/ScrollUpButton';

export const HomePage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <HomeHeader />
      <HomePartners />
      <HomeProduct />
      <HomeBenefits />
      <HomeCostumers />
      <ScrollUpButton />
    </>
  );
};

export default HomePage;

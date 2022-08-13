import { useEffect } from 'react';
import './HomePage.scss';
import HomeBenefits from '../../component/HomeBenefits/HomeBenefits';
import HomeCostumers from '../../component/HomeCostumers/HomeCostumers';
import HomeProduct from '../../component/HomeProduct/HomeProduct';
import HomePartners from '../../component/HomePartners/HomePartners';
import HomeHeader from '../../component/HomeHeader/HomeHeader';
import ScrollUpButton from '../../component/ScrollUpButton/ScrollUpButton';

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

import './HomePage.scss';
import HomeBenefits from '../../component/HomeBenefits/HomeBenefits';
import HomeCostumers from '../../component/HomeCostumers/HomeCostumers';
import HomeProduct from '../../component/HomeProduct/HomeProduct';
import HomePartners from '../../component/HomePartners/HomePartners';
import HomeHeader from '../../component/HomeHeader/HomeHeader';

export const HomePage = () => (
  <>
    <HomeHeader />
    <HomePartners />
    <HomeProduct />
    <HomeBenefits />
    <HomeCostumers />
  </>
);

export default HomePage;

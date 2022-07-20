import './Footer.scss';

const Footer = () => (
  <div className="footer__container">
    <div className="footer__left--wrapper">
      <img className="footer__logo" src="./assets/logo/Shoply.svg" alt="Logo" />

      <p className="footer__copyright">© Copyright 2021. Created by OurTeam</p>
    </div>
    <div className="footer__right--wrapper">
      <img className="footer__icons" src="./assets/icons/Facebook.svg" alt="Facebook" />
      <img className="footer__icons" src="./assets/icons/Instagram.svg" alt="Instagram" />
      <img className="footer__icons" src="./assets/icons/Twitter.svg" alt="Twitter" />
      <img className="footer__icons" src="./assets/icons/Youtube.svg" alt="Youtube" />
    </div>
  </div>
);

export default Footer;

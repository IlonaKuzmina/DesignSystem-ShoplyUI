import React, { useEffect } from 'react';
import MediaQuery from 'react-responsive';
import NavigationLine from '../../component/NavigationLine/NavigationLine';
import NormalScreenAbout from '../../component/NormalScreenAbout/NormalScreenAbout';
import SmallScreenAbout from '../../component/SmallScreenAbout/SmallScreenAbout';
import './AboutPage.scss';

const AboutPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <NavigationLine link="about" />
      <div className="aboutpage__content--container">
        <div className="row center-xs">
          <div className="col-xs-12 col-md-6">
            <div className="aboutpage__image--wrapper">
              <img className="aboutpage__image" src="./assets/images/our__teem-1.png" alt="" />
            </div>
          </div>
          <MediaQuery maxWidth={359}>
            <SmallScreenAbout />
          </MediaQuery>

          <MediaQuery minWidth={360}>
            <NormalScreenAbout />
          </MediaQuery>
        </div>
      </div>
    </>
  );
};

export default AboutPage;

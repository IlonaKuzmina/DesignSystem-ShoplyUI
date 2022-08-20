import React from 'react';
import './ScrollUpButton.scss';

const ScrollUpButton = () => (
  <button className="scrollup__button" onClick={() => { window.scrollTo(0, 0); }}>
    <img src="/assets/icons/arrow_up.svg" alt="" />
  </button>
);

export default ScrollUpButton;

import react, { useState } from 'react';
import './SmallScreenAbout.scss';

const SmallScreenAbout = () => {
  const [isShowen, setIsShowen] = useState(false);

  return (
    <div className="phone__content--wrapper">
      <button
        className="phone__content--button"
        onClick={() => { setIsShowen(!isShowen); }}
      >
        our team

      </button>
      <hr className="phone__underline--specifiction" />
      {isShowen && (
      <p className="phone__content--text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quisque ac ornare nisl, a ornare ipsum. Vivamus venenatis sodales sapien, ut condimentum ante ultricies et.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Nunc cursus pellentesque arcu sit amet placerat. Cras ut erat aliquet, suscipit tellus vitae, tempus magna.
        {' '}
      </p>
      )}
    </div>
  );
};

export default SmallScreenAbout;

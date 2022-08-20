import react from 'react';
import './NormalScreenAbout.scss';

const NormalScreenAbout = () => (
  <div className="col-xs-12 col-md-6">
    <div className="aboutpage__content--wrapper">
      <h2
        className="aboutpage__content--title"
      >
        our team

      </h2>
      <hr className="aboutpage__underline--specifiction" />
      <p className="aboutpage__content--text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quisque ac ornare nisl, a ornare ipsum. Vivamus venenatis sodales sapien, ut condimentum ante ultricies et.
        Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Nunc cursus pellentesque arcu sit amet placerat.
        Cras ut erat aliquet, suscipit tellus vitae, tempus magna.
        {' '}

      </p>
    </div>
  </div>
);

export default NormalScreenAbout;

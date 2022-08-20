import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Atoms/Button/Button';
import './Page404.scss';

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <div className="error__message--container">
      <h1 className="error__message">
        {' '}
        The page you are looking for doesn&apos;t exist or has been moved!
      </h1>
      <Button label="Return to the home page" onClick={() => navigate('/home')} padding="15px 30px" primary />
    </div>
  );
};

export default Page404;

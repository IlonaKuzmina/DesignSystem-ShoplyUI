import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../component/Button/Button';
import './Page404.scss';

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <div className="error__mesage--container">
      <h1 className="error__mesage">
        {' '}
        The page you are looking for doesn&apos;t exist or has been moved!
      </h1>
      <Button label="Return to the home page" onClick={() => navigate('/home')} padding="15px 30px" primary />
    </div>
  );
};

export default Page404;

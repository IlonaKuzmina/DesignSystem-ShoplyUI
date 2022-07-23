import React, { FC, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './NavigationLine.scss';

type NavigationLineProps = {
  link: string,
  linkTwo?: string,
}

const NavigationLine: FC<NavigationLineProps> = ({
  link, linkTwo,
}) => {
  const navigation = useNavigate();
  const [active, setActive] = useState(true);

  return (
    <div className="navigation__line--container">
      <NavLink to="/home" className="navigaation__line--link">Home</NavLink>
      <span className="navigation__line--separator">
        {' '}
        {'>'}
      </span>
      <NavLink to={`/${link}`} className="navigaation__line--link">{link}</NavLink>
      <NavLink to={`/${linkTwo}`} className="navigaation__line--link">{linkTwo}</NavLink>
    </div>
  );
};

export default NavigationLine;

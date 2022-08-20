import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationLine.scss';

type NavigationLineProps = {
  link: string,
}

const NavigationLine: FC<NavigationLineProps> = ({
  link,
}) => (
  <div className="navigation__line--container">
    <NavLink
      to="/home"
      className={({ isActive }) => [
        'navigaation__line--link',
        isActive ? 'active__link' : null,
      ]
        .filter(Boolean)
        .join(' ')}
      end
    >
      Home

    </NavLink>
    <span className="navigation__line--separator">
      {' '}
      {'>'}
    </span>
    <NavLink
      to={`/${link}`}
      className={({ isActive }) => [
        'navigaation__line--link',
        isActive ? 'active__link' : null,
      ]
        .filter(Boolean)
        .join(' ')}
      end
    >
      {link}

    </NavLink>
  </div>
);

export default NavigationLine;

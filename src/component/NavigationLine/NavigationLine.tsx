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
      <NavLink
        to={`/${linkTwo}`}
        className={({ isActive }) => [
          'navigaation__line--link',
          isActive ? 'active__link' : null,
        ]
          .filter(Boolean)
          .join(' ')}
        end
      >
        {linkTwo}

      </NavLink>
    </div>
  );
};

export default NavigationLine;

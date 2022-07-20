import React, { FC } from 'react';
import './MainWrapper.scss';

type WrapperProps = {
    background: string;
    padding: string;
    children: React.ReactNode;
}

const MainWrapper: FC<WrapperProps> = ({ background, padding, children }) => (
  <div className="main__wrapper" style={{ background, padding }}>
    {children}
  </div>
);

export default MainWrapper;

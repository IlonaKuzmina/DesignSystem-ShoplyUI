import { FC, ReactNode } from 'react';
import './Button.scss';

type ButtonProps = {
  label?: string;
  primary?: boolean,
  padding: string,
  type?: 'gray',
  onClick?: () => void;
  children?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  padding,
  onClick,
  label,
  type,
  primary,
  children,
}) => {
  const mode = primary ? 'text__button--primary' : 'text__button--secondary';

  return (
    <button
      onClick={onClick}
      style={{ padding }}
      className={['text__button', `text__button--${type}`, mode].join(' ')}
    >
      {label}
      {children}
    </button>
  );
};

export default Button;

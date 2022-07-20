import './Button.scss';

type ButtonProps = {
  label?: string;
  primary?: boolean,
  padding: string,
  type?: 'gray' | 'icon',
  onClick?: () => void;
  icon?: string,
}

const Button = ({
  padding,
  onClick,
  icon,
  label,
  type,
  primary,
}: ButtonProps) => {
  const mode = primary ? 'text__button--primary' : 'text__button--secondary';

  return (
    <button
      onClick={onClick}
      style={{ padding }}
      className={['text__button', `text__button--${type}`, mode].join(' ')}
    >
      {label}
      <img className="icon__button--cart" src={icon} alt="Cart" />
    </button>
  );
};

export default Button;

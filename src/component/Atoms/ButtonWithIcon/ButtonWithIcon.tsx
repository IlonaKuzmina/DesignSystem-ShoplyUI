import './ButtonWithIcon.scss';

type ButtonProps = {
  label?: string;
  primary?: boolean,
  padding: string,
  type?: 'gray' | 'icon',
  onClick?: () => void;
  icon?: string,
}

const ButtonWithIcon = ({
  padding,
  onClick,
  icon,
  label,
  type,
  primary,
}: ButtonProps) => {
  const mode = primary ? 'text__btn--primary' : 'text__btn--secondary';

  return (
    <button
      onClick={onClick}
      style={{ padding }}
      className={['text__btn', `text__btn--${type}`, mode].join(' ')}
    >
      {label}
      <img className="icon__btn--cart" src={icon} alt="Cart" />
    </button>
  );
};

export default ButtonWithIcon;

import './Button.scss';

type ButtonProps = {
  label?: string;
  primary?: boolean,
  padding: string,
  type?: 'gray',
  onClick?: () => void;
}

const Button = ({
  padding,
  onClick,
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
    </button>
  );
};

export default Button;

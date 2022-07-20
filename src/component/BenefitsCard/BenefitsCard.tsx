import './BenefitsCard.scss';

type BenefitsACardProps = {
  image: string,
  title: string;
  text: string;
}

const BenefitsCard = ({ image, title, text }: BenefitsACardProps) => (
  <div className="benefits__card--content">
    <img className="benefits__content--image" src={image} alt="Quality" />
    <h3 className="benefits__content--title">{title}</h3>
    <p className="benefits__content--text">{text}</p>
  </div>
);

export default BenefitsCard;

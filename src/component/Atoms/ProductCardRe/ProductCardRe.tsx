import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, countAllInCart } from '../../../reducer/productReducer/productReducer';
import { AppDispatch } from '../../../reducer/store';
import ButtonWithIcon from '../ButtonWithIcon/ButtonWithIcon';
import './ProductCardRe.scss';

type ProductCardProps = {
  id?: number,
  image?: string,
  onClick: () => void,
}

export const ProductCard: FC<ProductCardProps> = ({
  id, image, onClick,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div
      onClick={onClick}
      key={id}
      className="card__wrapper"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="card__button--container">
        <button
          className="product__button--customisation"
          onClick={onClick}
        >
          detail

        </button>
        <ButtonWithIcon
          type="icon"
          onClick={() => { dispatch(addToCart(Number(id))); dispatch(countAllInCart()); }}
          icon="/assets/icons/cart.svg"
          padding="5px 5px"
        />
      </div>
    </div>
  );
};

export default ProductCard;

import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCount, addToCart } from '../../reducer/productReducer/productReducer';
import { AppDispatch } from '../../reducer/store';
import ButtonWithIcon from '../ButtonWithIcon/ButtonWithIcon';
import './ProductCardRe.scss';

type ProductCardProps = {
  id?: number,
  backgroundImage?: string,
}

export const ProductCard: FC<ProductCardProps> = ({
  id, backgroundImage,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div
      key={id}
      className="card__wrapper"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="card__button--container">
        <button
          className="product__button--customisation"
          onClick={() => {
            navigate(`/product/${id}`);
          }}
        >
          detail

        </button>
        <ButtonWithIcon
          type="icon"
          onClick={() => { dispatch(addToCart(id)); dispatch(addCount(id)); }}
          icon="./assets/icons/cart.svg"
          padding="5px 5px"
        />
      </div>
    </div>
  );
};

export default ProductCard;

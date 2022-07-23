import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../reducer/productReducer/productReducer';
import { AppDispatch } from '../../reducer/store';
import Button from '../Button/Button';
import ButtonWithIcon from '../ButtonWithIcon/ButtonWithIcon';
import './ProductCard.scss';

type ProductCardProps = {
  image?: string,
  name?: string,
  id?: number,
  backgroundImage?: string,
}

export const ProductCard: FC<ProductCardProps> = ({
  id, name, image, backgroundImage,
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
          onClick={() => { navigate(`/products/${id}`); }}
        >
          detail

        </button>
        <ButtonWithIcon
          type="icon"
          onClick={() => { dispatch(addToCart(id)); }}
          icon="./assets/icons/cart.svg"
          padding="5px 13px"
        />
      </div>
    </div>
  );
};

export default ProductCard;

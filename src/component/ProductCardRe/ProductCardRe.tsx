import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart, countAllInCart } from '../../reducer/productReducer/productReducer';
import { AppDispatch } from '../../reducer/store';
import ButtonWithIcon from '../ButtonWithIcon/ButtonWithIcon';
import './ProductCardRe.scss';

type ProductCardProps = {
  id?: number,
  image?: string,
}

export const ProductCard: FC<ProductCardProps> = ({
  id, image,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div
      key={id}
      className="card__wrapper"
      style={{ backgroundImage: `url(${image})` }}
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
          onClick={() => { dispatch(addToCart(Number(id))); dispatch(countAllInCart()); }}
          icon="/assets/icons/cart.svg"
          padding="5px 5px"
        />
      </div>
    </div>
  );
};

export default ProductCard;

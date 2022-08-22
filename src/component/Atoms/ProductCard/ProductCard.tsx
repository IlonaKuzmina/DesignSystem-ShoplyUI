import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, countAllInCart } from '../../../reducer/productReducer/productReducer';
import { AppDispatch } from '../../../reducer/store';
import './ProductCard.scss';

type ProductCardProps = {
  id: number,
  image: string,
  price: number,
  name: string,
  onClick: () => void,
}

export const ProductCard: FC<ProductCardProps> = ({
  id, price, name, image, onClick,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="product__card--wrapper" key={id}>
      <div
        key={id}
        className="card"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div
          className="button__wrapper"
        >
          <button
            className="products__button--detail"
            onClick={onClick}
          >
            detail

          </button>
          <button
            className="products__button--cart"
            onClick={() => { dispatch(addToCart(Number(id))); dispatch(countAllInCart()); }}
          >
            <img className="icon__button--cart" src="/assets/icons/cart.svg" alt="Cart" />

          </button>
        </div>
      </div>

      <div className="product__info">
        <span>{name}</span>
        <strong>
          $
          {' '}
          {price}
        </strong>
      </div>
    </div>
  );
};

export default ProductCard;

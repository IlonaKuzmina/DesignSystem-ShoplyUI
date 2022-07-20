import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../reducer/productReducer/productReducer';
import { AppDispatch } from '../../reducer/store';
import Button from '../Button/Button';
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
    <div key={id} className="card__wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="card__button--container">
        <Button
          primary
          onClick={() => navigate('/products/:id')}
          label="DETAIL"
          padding="12px 44px"
        />
        <Button
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

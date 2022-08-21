import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductData } from '../../../data/products';
import {
  addCount, addToCart, countAllInCart, removeCount,
} from '../../../reducer/productReducer/productReducer';
import { AppDispatch, RootState } from '../../../reducer/store';
import Button from '../Button/Button';
import './ProductDetail.scss';

type ProductDetailProps = {
    currentProduct?: ProductData;
    id?: string;
}

export const ProductDetail: FC<ProductDetailProps> = ({ currentProduct, id }) => {
  const products = useSelector(({ product }: RootState) => product);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="product__wrapper">
      <div className="product__left--container">
        <img className="product__main--image" src={currentProduct?.image} alt="Title" />
      </div>
      <div className="product__right--container">
        <div className="testing__order">
          <h2 className="product__tittle">{currentProduct?.name}</h2>
          <p className="product__specification">{currentProduct?.specification}</p>
          <p className="product__stock--info">
            Stock:
            {' '}
            {currentProduct?.inStock}
          </p>
          <p className="product__price--info">
            Price:
            <strong>
              {' '}
              $
              {' '}
              {currentProduct?.price}
            </strong>
          </p>
          <div className="product__button--block">
            {' '}
            <button
              disabled={products.addToCartCounter === 1}
              className="count__btn"
              onClick={() => { dispatch(removeCount(Number(id))); }}
            >
              -

            </button>
            <button className="count__btn">{products.addToCartCounter}</button>
            <button
              disabled={products.addToCartCounter === currentProduct?.inStock}
              className="count__btn"
              onClick={() => { dispatch(addCount(Number(id))); }}
            >
              +

            </button>
            <Button
              padding="9px 16px"
              label="Add to cart"
              primary
              onClick={() => { dispatch(addToCart(Number(id))); dispatch(countAllInCart()); }}
            />

            {products.addToCartCounter === currentProduct?.inStock
              ? (<span className="detail__cart--msg">Out of stock</span>) : (<span />)}
          </div>
        </div>

        <div className="product__images--container">
          <img className="addition__image" src={currentProduct?.image} alt="bilde" />
          <img className="addition__image" src={currentProduct?.image} alt="bilde" />
          <img className="addition__image" src={currentProduct?.image} alt="bilde" />
          <img className="addition__image" src={currentProduct?.image} alt="bilde" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

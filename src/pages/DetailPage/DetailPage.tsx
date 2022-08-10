import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  addCount, addToCart, countAllInCart, removeCount,
} from '../../reducer/productReducer/productReducer';
import { AppDispatch, RootState } from '../../reducer/store';
import { ProductData } from '../../data/productData';
import Button from '../../component/Button/Button';
import NavigationLine from '../../component/NavigationLine/NavigationLine';
import './DetailPage.scss';

const DetailPage = () => {
  const [currentProduct, setCurrentProduct] = useState<ProductData>();
  const products = useSelector(({ product }: RootState) => product);
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();

  useEffect(() => {
    const activeProduct = products.items.find((p) => p.id === Number(id));
    setCurrentProduct(activeProduct);
  }, [products]);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <NavigationLine link="Product" />
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
    </>

  );
};

export default DetailPage;

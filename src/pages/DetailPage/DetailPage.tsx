import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../component/Button/Button';
import NavigationLine from '../../component/NavigationLine/NavigationLine';
import { ProductData, getProduct } from '../../data/productData';
import {
  addCount, addToCart, countAllInCart, removeCount,
} from '../../reducer/productReducer/productReducer';
import { AppDispatch, RootState } from '../../reducer/store';
import './DetailPage.scss';

// export type ProductItemProps = {
//   count: number;
// }

const DetailPage = () => {
  const [currentProduct, setCurrentProduct] = useState<ProductData>();
  const products = useSelector(({ product }: RootState) => product);
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const product = getProduct(Number(id));
    if (product) {
      setCurrentProduct(product);
    } else {
      navigate('/products');
    }
    window.scrollTo(0, 0);
  }, []);

  // const getProductCount = (id) => {
  //   products.items.map((i) => {
  //     if (id === i.id) {
  //       i.count;
  //     }
  //     return i;
  //   });
  // };

  return (
    <>
      <NavigationLine link="Product" />
      <div className="product__wrapper">
        <div className="product__left--container">
          <img className="product__main--image" src="./assets/images/product_14.png" alt="Title" />
          {/* <img className="product__main--image" src={currentProduct?.image} alt={currentProduct?.subcategory} /> */}
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
              <button className="count__btn" onClick={() => { dispatch(removeCount(id)); }}>-</button>
              <button className="count__btn">{currentProduct?.count}</button>
              <button className="count__btn" onClick={() => { dispatch(addCount(id)); }}>+</button>
              <Button
                padding="9px 16px"
                label="Add to cart"
                primary
                onClick={() => { dispatch(addToCart(id)); dispatch(countAllInCart()); }}
              />
            </div>
          </div>

          <div className="product__images--container">
            <img className="addition__image" src={currentProduct?.image} alt="bilde" />
            <img className="addition__image" src={currentProduct?.image} alt="bilde" />
            <img className="addition__image" src={currentProduct?.image} alt="bilde" />
            <img className="addition__image" src="./assets/images/girl.png" alt="bilde" />
          </div>
        </div>
      </div>
    </>

  );
};

export default DetailPage;

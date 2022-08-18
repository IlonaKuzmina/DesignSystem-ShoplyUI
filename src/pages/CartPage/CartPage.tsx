import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../component/Button/Button';
import CartItem from '../../component/CartItem/CartItem';
import NavigationLine from '../../component/NavigationLine/NavigationLine';
import {
  addCountInCart, countAllInCart, countTotalInCart, removeCountInCart, removeFromCart,
} from '../../reducer/productReducer/productReducer';
import { AppDispatch, RootState } from '../../reducer/store';
import './CartPage.scss';
import HomeTitle from '../../component/HomeTitle/HomeTitle';

const CartPage = () => {
  const items = useSelector(({ product }: RootState) => product);
  const dispatch = useDispatch<AppDispatch>();
  const shipingFee = 5;
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(countTotalInCart());
  }, []);

  return (
    <>
      <NavigationLine link="My Cart" />
      {items.cartTotal === 0 ? (
        <div className="emptycart__container">
          <HomeTitle title="Cart is empty!" />
          <div className="cart__button--wrapper">
            <Button onClick={() => navigate('/products')} label="back to products list" primary padding="15px 15px" />
          </div>

        </div>
      ) : (
        <>
          <div className="cart__details">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
          </div>
          {items.items.filter((it) => it.inCart === true).map(({
            id, count, name, price, image, inStock,
          }) => (
            <CartItem
              id={id}
              key={id}
              name={name}
              image={image}
              price={price}
              count={count}
              inStock={inStock}
              onIncrement={() => {
                dispatch(addCountInCart(id)); dispatch(countAllInCart()); dispatch(countTotalInCart());
              }}
              onDecrement={() => {
                dispatch(removeCountInCart(id)); dispatch(countAllInCart()); dispatch(countTotalInCart());
                if (count === 1) {
                  dispatch(removeFromCart(id));
                }
              }}
            />
          ))}

          <div className="subtotal__container">
            <div className="subtotal__line">
              <span>Subtotal</span>
              <span>:</span>
              <span>
                $
                {items.cartTotalSum}
              </span>
            </div>
            <div className="subtotal__line">
              <span>Shipping fee</span>
              <span>:</span>
              <span>
                $
                {shipingFee}
              </span>
            </div>
            <div className="subtotal__line">
              <span>Total Order</span>
              <span>:</span>
              <span>
                $
                {items.cartTotalSum + shipingFee}
              </span>
            </div>
          </div>

          <div className="checkout__button--container">
            <Button padding="13px 18px" label="Close" onClick={() => navigate('/home')} />
            <Button padding="13px 18px" label="Check out" primary />
          </div>
        </>
      )}
    </>
  );
};

export default CartPage;

import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../../component/CartItem/CartItem';
import NavigationLine from '../../component/NavigationLine/NavigationLine';
import {
  addCount, countAllInCart, countTotalInCart, removeCount, removeFromCart,
} from '../../reducer/productReducer/productReducer';
import { AppDispatch, RootState } from '../../reducer/store';
import './CartPage.scss';

const CartPage = () => {
  const items = useSelector(({ product }: RootState) => product);
  const dispatch = useDispatch<AppDispatch>();
  const shipingFee = 5;

  return (
    <>
      <NavigationLine link="My Cart" />
      <div className="cart__details">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Total</span>
      </div>
      {items.items.filter((it) => it.inCart === true).map(({
        id, count, name, price, image,
      }) => (
        <CartItem
          id={id}
          key={id}
          name={name}
          image={image}
          price={price}
          count={count}
          onIncrement={() => { dispatch(addCount(id)); dispatch(countAllInCart()); dispatch(countTotalInCart()); }}
          onDecrement={() => {
            dispatch(removeCount(id)); dispatch(countAllInCart()); dispatch(countTotalInCart());
            if (count === 1) {
              dispatch(removeFromCart(id));
            }
          }}
        />
      ))}

      {items.items.map((item) => item.inCart === true) ? (
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
      ) : (<div>tuks</div>)}

    </>
  );
};

export default CartPage;

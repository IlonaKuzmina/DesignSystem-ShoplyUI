import './CartItem.scss';

export type CartItemProps = {
  id: number,
  name: string,
  image: string,
  price: number,
  count: number,
  onIncrement: () => void,
  onDecrement: () => void,
}

const CartItem = ({
  name, image, price, id, count, onIncrement, onDecrement,
}: CartItemProps) => (
  <div
    key={id}
    className="item__container"
  >
    <div className="image__box">
      <div className="image__wrapper">
        <img className="item__image" src={image} alt="Nav bildes" />
      </div>

      <span className="item__name big">
        {name}
      </span>
    </div>

    <strong className="item__price big">
      $
      {' '}
      {price}
    </strong>

    <div className="cart__button--container big">
      <button
        className="cart__button--decrement"
        disabled={count === 0}
        onClick={() => onDecrement()}
      >
        -

      </button>
      <button className="count__info">{count}</button>
      <button
        className="cart__button--increment"
        onClick={() => onIncrement()}
      >
        +

      </button>
    </div>

    <div className="small__container">
      <span className="">
        {name}
      </span>
      <strong>
        $
        {' '}
        {price}
      </strong>
      <div className="">
        <button
          className="cart__button--decrement"
          disabled={count === 0}
          onClick={() => onDecrement()}
        >
          -

        </button>
        <button className="count__info">{count}</button>
        <button
          className="cart__button--increment"
          onClick={() => onIncrement()}
        >
          +

        </button>
      </div>
    </div>

    <span>
      {(count * price).toFixed(2)}
    </span>
  </div>
);

export default CartItem;

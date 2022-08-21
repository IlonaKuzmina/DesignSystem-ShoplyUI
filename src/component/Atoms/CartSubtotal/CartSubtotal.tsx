import React, { FC } from 'react';
import './CartSubtotal.scss';

type CartSubtotalProps = {
    cartTotalSum: number,
    shipingFee: number,
}

export const CartSubtotal: FC<CartSubtotalProps> = ({ cartTotalSum, shipingFee }) => (
  <div className="subtotal__container">
    <div className="subtotal__line">
      <span>Subtotal</span>
      <span>:</span>
      <span>
        $
        {cartTotalSum}
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
        {cartTotalSum + shipingFee}
      </span>
    </div>
  </div>

);

export default CartSubtotal;

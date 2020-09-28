import React from 'react';
import './CartItem.css';

const CartItem = ({ name, image,desc, cost, quantity }) => {
  return (
    <div className="CartItem">
      <div>{name}</div>
      <div className="CartItem-details">
        <div className="CartItem-quantity">Qty: {quantity}</div>
        <div>${cost.toFixed(2)}</div>
      </div>
    </div>
  );
};
export default CartItem;
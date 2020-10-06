import React from 'react';
import CartItem from './CartItem';
import CheckoutForm from './CheckoutForm';
import { Elements, StripeProvider } from 'react-stripe-elements';
import './Cart.css';

const Cart = ({ itemsInCart, totalCost }) =>{
  return (
    <div className="Cart">
      <h2 className="Cart-title">Your shopping cart</h2>
      {itemsInCart.length > 0 ? (
        <div>
          {itemsInCart.map(item => (
            <CartItem
              key={item.id}
              name = {item.name}
              image = {item.img_url}
              desc={item.desc}
              cost={item.price * item.quantity}
              quantity={item.quantity}
            />
          ))}
          {itemsInCart.length > 0 && (
            <StripeProvider apiKey={`${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`}>
                <Elements>
                <CheckoutForm totalCost={totalCost} />
                </Elements>
            </StripeProvider>
            )}
          <div className="Cart-total-cost">
            Total cost: ${totalCost.toFixed(2)}
          </div>
        </div>
      ) : (
        <div>Your cart is empty</div>
      )}
    </div>
  );
};
export default Cart;
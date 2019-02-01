import React from 'react';

const ShoppingCart = () => (
  <div className="shopping-cart-card" >
    <div className="cart-arrow"></div>
    <h1 className="cart-title">Food Cart</h1>
    <div className="cart-all-items"></div>
    <div className="item-recipt">
        <div className="sub"><p>Sub-total</p><p className="sub-total">0</p></div>
        <div className="tax"><p>Tax</p><p className="total-tax">0</p></div>
        <div className="total"><p>Total</p><p className="total-price">0</p></div>
      </div>
    <button className="item-checkout" >Checkout</button>
  </div>
);

export default ShoppingCart;

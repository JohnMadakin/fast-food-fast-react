import React, { Fragment } from 'react';
import CartItem from './CartItem';

const CartContainer = (props) => {
  const Items = props.order
  .map((item, index) => <CartItem key={item.itemid} itemid={item.itemid} 
    itemTitle={item.itemTitle} 
    itemPrice={item.itemPrice} 
    itemUrl={item.itemurl}
    itemCost={item.itemCost}
    index={index}
    itemQuantity={item.quantity}
    currentOrder={props.currentOrder} 
    changeQuantity={props.changeQuantity}
    removeItem={props.removeItem}
  />);
  return (
    <div>
      {Items}
    </div>
    )
};

export default CartContainer;

import React from 'react';

const Items = (props) => {
  const orderedItems = props.order.map(item => (
    <div className="item" key={item.itemid}>
      <img className="cart-image" src={`${item.itemurl}`} />
      <p className="item-title">{item.itemTitle}</p>
      <p className="item-price">{item.itemPrice * item.quantity}</p>
      <div className="item-footer-checkout">
        <div className="qty-checkout"><span>{item.quantity}</span></div>
    </div>
    </div>
  )       
);
return orderedItems;

}
export default Items;




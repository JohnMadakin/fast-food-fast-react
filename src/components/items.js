import React from 'react';

const Items = (props) => {
  console.log('what do i have',props.order.length)
  const orderedItems = props.order.map(item => (
    <div className="item" key={item.itemid}>
      <img className="cart-image" src={`${item.itemurl}`} />
      <p className="item-title">{item.itemTitle}</p>
      <p className="item-price">{item.itemPrice * item.quantity}</p>
      <div className="item-footer">
        <div className="qty"><span>{item.quantity}</span></div>
    </div>
    </div>
  )       
);
return orderedItems;

}
export default Items;




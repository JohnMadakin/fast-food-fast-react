import React from 'react';

const CartItem = (props) => {
  console.log('item cost ===> ',props.itemCost, props.itemPrice, props.itemQuantity);
return (
  <div className="item">
    <img className="cart-image" src={`${props.itemUrl}`} />
    <p className="item-title">{props.itemTitle}</p>
    <p className="item-price">{ props.itemPrice * props.itemQuantity}</p>
    <div className="item-footer">
    <div className="qty"><input className="quantity" type="number" min="1" max="50" step="1" value={props.itemQuantity} onChange={(e)=> props.changeQuantity(e,props.itemPrice,props.index)} /></div>
    <div className="delete" onClick={()=> props.removeItem(props.index,props.itemCost,props.itemQuantity)}>
    </div>
    </div>
  </div>
);
}
export default CartItem;

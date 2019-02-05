import React, {Fragment} from 'react';

const Item = (props)  => {
  const {index, orderInfo} = props;
  const orders = props.orders.map(order => (
    <tr key={`${order.title}${index}`}>
      <td><img className="cart-image" src={`${order.imageurl}`} /></td>
      <td className="admin-food-item">{order.title}</td>
      <td><span className="admin-order-qty">{order.quantity}</span></td>
      <td>{order.price}</td>
      <td>{order.quantity*order.price}</td>
      <td>{orderInfo[index].deliveryaddress}</td>
    </tr>
    )
  )
  return (
    <Fragment>
    <tr>
      <th></th>
      <th>Name</th>
      <th>Quantity</th>
      <th>Price per food item</th>
      <th>Total Price</th>
      <th>Delivery Address</th>
    </tr>
    {orders}
    </Fragment>
  );
};

export default Item;

import React, {Fragment} from 'react';
import Item from './Item';


const Order = (props) => {
  const orderInfo = [...props.orders.ordersInfo];
  const Items = props.orders.ordersItem.map((item,index) => {
    const orderDate = new Date(orderInfo[index].date_created).
    toLocaleString('en-us', {day: '2-digit',  month: '2-digit', year: 'numeric' }).
    replace(/(\d+)\/(\d+)\/(\d+)/, '$2-$1-$3');
  
    return (
      <Fragment key={index*Math.random()}>
      <tr><td>Order {index+1}</td><td>{orderDate}</td></tr>
        <Item orders={item} index={index} orderInfo={orderInfo} key={index*Math.random()} />
        <tr><td></td><td></td><td></td><td>Total:</td><td>N{orderInfo[index].total.toFixed(2)}</td></tr>
      </Fragment>
    )
  });
  return (
    <table className="user-orders">
      <tbody>
        {Items}
    </tbody>
  </table>

  )
};

export default Order;


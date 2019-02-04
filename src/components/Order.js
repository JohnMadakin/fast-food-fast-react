import React from 'react';

const Order = (props) => {
  console.log('=========> items ', props.orders.ordersItem)
  //ordersItem[index].title, ordersItem[index].quantity, ordersItem[index].imageurl, ordersItem[index].price, orderInfo[index].paymentmethod, orderInfo[index].orderstatus, orderInfo[index].total, orderInfo[index].deliveryaddress, orderInfo[index].date_created 
  const orderInfo = [...props.orders.ordersInfo];
  const Items = props.orders.ordersItem.map((item,index) => {
    return (<tr key={`${item.title}${index}`}><td className="admin-food-item">{item.title}</td>
    <td><span className="admin-order-qty">{item.quantity}</span></td>
    <td>{item.imageurl}</td>
    <td>{item.price}</td>
    <td>{orderInfo[index].total}</td>
    <td>{orderInfo[index].deliveryaddress}</td>
    <td>{orderInfo[index].date_created }</td>

    </tr>)
  });
  return (
    <table>
      <tbody>
        {Items}
    </tbody>
  </table>

  )
};

export default Order;


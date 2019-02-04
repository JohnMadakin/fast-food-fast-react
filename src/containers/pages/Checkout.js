import React from 'react';
import axios from 'axios';

import Items from '../../components/items';
import Input from '../../components/Input';
import history from '../../history';


class Checkout extends React.Component{
  constructor(props){
    super(props);
    this.placeOrder = this.placeOrder.bind(this);
    this.handleDeliveryAddress = this.handleDeliveryAddress.bind(this);
  }
  state = {
    deliveryAddress: '',
  }

  handleDeliveryAddress(e){
    const address = e.target.value;
    this.setState({
      deliveryAddress: address,
    })
  }
  componentWillMount(){
    console.log('=======> history', history)
    const {user} = history.location.state;
    !user ? history.push('/') : null
  }

  placeOrder(){
    const url = 'https://edafe-fast-food-fast.herokuapp.com/api/v1/orders';
    const { order }= this.props.history.location.state;
    const orders = [...order];
    const token = history.location.state.user;
    console.log('-------------> ', orders);
    const postOrder = order.map(items => {
      const {itemCost, itemPrice, itemTitle, itemurl, ...selectedItems} = items;
      return selectedItems;
    })
    console.log('++++++++++++',postOrder);
    const userData = {
      orders:[
        ...postOrder,
      ],
      status: "pending",
      payment: 'payondelivery',
      deliveryAddress: this.state.deliveryAddress,
    }
    console.log('------------->  user data', userData);

    axios(
      {
      url,
      method: 'POST',
      data: 
        JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
        "x-auth": token,
      },
    })
    .then((response)=>{
      console.log(response.data);
    })
    .catch((error)=>{
      console.log(error.response)
    })

  }

  render(){
    const { order }= this.props.history.location.state;
    console.log('---> props',this.props)
    const subTotal = order.reduce((a,b)=> a+(b.quantity * b.itemPrice), 0);

    return(
      <main className="content-food">
      
      <div className="checkout-container">
        <div className="checkout-shopping-cart">
            <h1 className="cart-title checkout-cart-title">Food Items</h1>
            <h3 className="waiting">Please be patient, Placing other</h3>
            <div className="all-items">
                <Items order={this.props.history.location.state.order} />
                <Input inputtype="text" onChange={this.handleDeliveryAddress}/>
            </div>
        </div>
        <div className="item-recipt-container">
          <div className="item-recipt">
            <div className="sub"><p>Sub-total</p><p className="sub-total">{subTotal}</p></div>
            <div className="tax"><p>Tax</p><p className="total-tax">{subTotal*0.05}</p></div>
            <div className="total"><p>Total</p><p className="total-price">{subTotal + subTotal*0.05}</p></div>
          </div>
          <div className="payment-group">
              <p className="pay">Payment method: <span className="payment-on-delivery">Payment on delivery</span></p>
              <button className="item-checkout" onClick={this.placeOrder} >Place Order</button>
          </div>
        </div>
      </div>
     
      <h3 className="error-message"></h3>
    </main>
  
  
    );
  }
}

export default Checkout;

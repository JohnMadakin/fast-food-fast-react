import React from 'react';
import axios from 'axios';

import Items from '../../components/items';
import Input from '../../components/Input';
import history from '../../history';
import PopUp from '../../components/PopUp';


class Checkout extends React.Component{
  constructor(props){
    super(props);
    this.placeOrder = this.placeOrder.bind(this);
    this.handleDeliveryAddress = this.handleDeliveryAddress.bind(this);
  }
  state = {
    deliveryAddress: '',
    postedOrder: false,
  }

  handleDeliveryAddress(e){
    const address = e.target.value;
    this.setState({
      deliveryAddress: address,
    })
  }
  componentWillMount(){
    console.log('------here ----', history)
    const { user } = this.props;
    console.log('------here ----2', user)

    if(!user ){
      console.log('------here ----3')
      return history.push('/signup');
    }
    console.log('------here ----4')

  }
  
  componentDidMount(){
    console.log('------here ----2-------', history)

  }

  placeOrder(){
    const url = 'https://edafe-fast-food-fast.herokuapp.com/api/v1/orders';
    const { order }= history.location.state;
    const orders = [...order];
    const token = history.location.state.user;
    const postOrder = orders.map(items => {
      const {itemCost, itemPrice, itemTitle, itemurl, ...selectedItems} = items;
      return selectedItems;
    })
    const userData = {
      orders:[
        ...postOrder,
      ],
      status: "pending",
      payment: 'payondelivery',
      deliveryAddress: this.state.deliveryAddress,
    }
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
      this.setState({
        postedOrder: true,
      }, ()=>{
        localStorage.clear('userorder');
      });
    })
    .catch((error)=>{
      console.log(error.response)
    })

  }

  render(){
    const { order }= history.location.state;
    const message = {
      title: 'Hi Customer! This is your Attendant',
      body: 'Your Order have been posted',
      footer: 'ok',
    }
    const subTotal = order.reduce((a,b)=> a+(b.quantity * b.itemPrice), 0);

    return(
      <main className="content-food">
      {this.state.postedOrder ? <PopUp message={message}/> : null}
      <div className="checkout-container">
        <div className="checkout-shopping-cart">
            <h1 className="cart-title checkout-cart-title">Food Items</h1>
            <h3 className="waiting">Please be patient, Placing order</h3>
            <div className="all-items">
                <Items order={history.location.state.order} />
                <Input inputtype="text" className="email" placeholder="Enter Delivery Address" onChange={this.handleDeliveryAddress}/>
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

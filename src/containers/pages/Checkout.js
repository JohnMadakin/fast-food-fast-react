import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withToastManager } from 'react-toast-notifications';


import Items from '../../components/items';
import Input from '../../components/Input';
import postOrders from '../../actions/postOrders';



export class Checkout extends React.Component{
  state = {
    deliveryAddress: '',
    postedOrder: false,
    order: [],

  }

  handleDeliveryAddress = (e) => {
    const address = e.target.value;
    this.setState({
      deliveryAddress: address,
    })
  }
  
  componentDidMount(){
    const { user } = this.props;
    if(!user ){
      // this.history.push("/signup");
      return window.location.replace('/signup');
    }
    this.setState({
      order: [...JSON.parse(localStorage.getItem('userorder') || '[]')],
    });
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.errorOccured !== nextProps.errorOccured && nextProps.errorOccured === true) {
      this.props.toastManager.add(`${nextProps.errorMessage.data.message}`, {
        appearance: 'error',
        autoDismiss: true,
      });
      return false;
    }
    if (this.props.orderPostSuccess !== nextProps.orderPostSuccess && nextProps.orderPostSuccess === true) {
      this.props.toastManager.add('You have Successfully Placed your Order', {
        appearance: 'success',
        autoDismiss: true,
      });
      setTimeout(()=>{
        window.location.replace('/user');
      }, 3000)
      return true;
    }

    return true;
  }

  placeOrder = () => {
    const orders = [...this.state.order];
    return this.props.postOrder(this.props.user.token, orders, this.state.deliveryAddress);
  }


  render(){
    const numberOfItems = JSON.parse(localStorage.getItem('userorder') || "[]").length;
    const subTotal = this.state.order.reduce((a,b)=> a+(b.quantity * b.itemPrice), 0);
    return(
      <main className="content-food">
      <div className="checkout-container">
        <div className="checkout-shopping-cart">
            <h1 className="cart-title checkout-cart-title">Food Items</h1>
            {numberOfItems=== 0 ? <h2 className="dahboard-message">Your Cart is Empty</h2> :             
            <div className="all-items">
                <Items order={this.state.order} />
                <Input inputtype="text" className="checkout-delivery-address" placeholder="Enter Delivery Address" onChange={this.handleDeliveryAddress}/>
            </div>
}

        </div>
        <div className="item-recipt-container">
          <div className="item-recipt">
            <div className="sub"><p>Sub-total</p><p className="sub-total">{subTotal}</p></div>
            <div className="tax"><p>Tax</p><p className="total-tax">{subTotal*0.05}</p></div>
            <div className="total"><p>Total</p><p className="total-price">{subTotal + subTotal*0.05}</p></div>
          </div>
          <div className="payment-group">
              <p className="pay">Payment method: <span className="payment-on-delivery">Payment on delivery</span></p>
              {this.props.isPostingOrder ? <div className="spinner"></div> : null}           
              <button className="item-checkout" onClick={this.placeOrder} >Place Order</button>
          </div>
        </div>
      </div>
    </main>
  
  
    );
  }
}

export const mapStateToProps = state => ({
  ...state.getAllMenuReducer,
  ...state.postOrderReducer
});

export const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...postOrders,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withToastManager(Checkout));


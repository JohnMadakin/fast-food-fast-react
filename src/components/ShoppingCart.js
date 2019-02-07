import React from 'react';
 
import CartContainer from './CartContainer';

class ShoppingCart extends React.Component {
  state = {
    user: '',
    order: JSON.parse(localStorage.getItem('usercart') || '[]'),
    subTotal: JSON.parse(localStorage.getItem('usercart') || '[]').reduce((a,b) => a+(b.itemPrice * b.quantity), 0) || 0,
  }
  handleQuantityChange = (e, price,index) => {
    const order = [...this.state.order];
    order[index].quantity = parseInt(e.target.value);
    const subTotal = order.reduce((a,b) => a+(b.itemPrice * b.quantity), 0);
    this.setState({
      order,
      subTotal,
    }, ()=>{
      localStorage.setItem('usercart',JSON.stringify(this.state.order));
    });
  }
  removeItem = (item,price,qty) => {
    const order = [...this.state.order];
    order.splice(item, 1);
    const subTotal = this.state.subTotal - qty*price;
    this.setState({
      order,
      subTotal,
    }, ()=>{
      localStorage.setItem('usercart',JSON.stringify(this.state.order));
    });

  }
  checkOut = () => {
    const order = [...this.state.order];
    localStorage.setItem('userorder',JSON.stringify(order));
    this.props.closeCart();
    this.props.history.push('/checkout');
  }
  render(){
    return (
      <div className="shopping-cart-card" >
      <div className="cart-arrow"></div>
      <h1 className="cart-title">Food Cart</h1>
      <div className="cart-all-items"><CartContainer removeItem={this.removeItem} order={this.state.order} changeQuantity={this.handleQuantityChange} /></div>
      <div className="item-recipt">
          <div className="sub"><p>Sub-total</p><p className="sub-total">{this.state.subTotal.toFixed(2)}</p></div>
          <div className="tax"><p>Tax</p><p className="total-tax">{(this.state.subTotal*0.05).toFixed(2)}</p></div>
          <div className="total"><p>Total</p><p className="total-price">{(this.state.subTotal*0.05 + this.state.subTotal).toFixed(2)}</p></div>
        </div>
      <button className="item-checkout" onClick={this.checkOut}>Checkout</button>
    </div>
  
    );
  }
}

export default ShoppingCart;

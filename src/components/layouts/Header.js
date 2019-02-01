import React from 'react';
import {Link} from 'react-router-dom';

import '../../styles/style.css';

export default class Header extends React.Component {
  state = {
    loginPanel: false,
  }

  handleLoginModal(){
    console.log('-------------------------------');
    this.setState({
      loginPanel: true,
    });

  }

  render(){
    return (
      <nav className="nav">
      <header className="header">
        <div className="header-content">
          <div className="logo-container">
            <Link to="/" className="homepage">
              <p className="logo">fast<span className="logo-icon"><img alt="fast-food-fast-logo" src="../../../src/assets/images/logo.png" height="32px" width="32px"/></span><span className="logo_sub">food</span> <span className="logo_sub_2">fast</span></p>
            </Link></div>
            <div className="cart"><img src="../../../src/assets/images/cart.png" alt="cart" height="24px" width="24px"/><span>My Food Cart</span></div>
            <div className="menu"><img src="../../../src/assets/images/menu1.png" alt="menu" height="32px" width="32px"/> </div>
            <nav className="nav">
                <div className="login nav__item"><a className="login-modal">{this.props.user ? <span>logout</span> : <span><Link to="/login" onClick={handleLoginModal}>login</Link></span>}</a></div>
                <div className="signup nav__item">{this.props.user ? <span>dashboard</span> : <span><Link to="/signup">signup</Link></span>}</div>
              </nav>
              <div className="shopping-cart-card">
                <div className="cart-arrow"></div>
                <h1 className="cart-title">Food Cart</h1>
                <div className="cart-all-items"></div>
                <div className="item-recipt">
                    <div className="sub"><p>Sub-total</p><p className="sub-total">0</p></div>
                    <div className="tax"><p>Tax</p><p className="total-tax">0</p></div>
                    <div className="total"><p>Total</p><p className="total-price">0</p></div>
                  </div>
                <button className="item-checkout" >Checkout</button>
              </div>
              <div id="modal-id" className="modal">
                  <span className="close" title="Close Modal">&times;</span>
                  <form className="modal-content animate">
                    <div className="imgcontainer">
                      <h1>Login</h1>
                    </div>
                
                    <div className="modal-container" style={{display:this.state.loginPanel ? 'block' : 'none'}}>
                        <div className="login-spinner"></div>           
                      <label className="login-message"></label>
                      <label htmlFor="uname"><b>Username</b></label>
                      <input id="uname" type="text" placeholder="Enter Username" name="uname" required/>
                
                      <label  htmlFor="psw"><b>Password</b></label>
                      <input id="psw" type="password" placeholder="Enter Password" name="psw" required/>
                
                      <button className="submit" type="submit">Login</button>
                      {/* <label>
                        <input type="checkbox" checked="checked" name="remember"/> Remember me
                      </label> */}
                    </div>
                
                    <div className="modal-container" style={{backgroundColor: '#f1f1f'}}>
                      <button type="button" className="cancelbtn">Cancel</button>
                    
                    </div>
                  </form>
                </div>
        </div>
  
  </header>
  </nav>
  
    );
  }
}

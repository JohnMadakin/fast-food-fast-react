import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import Modal from '../Modal';
import ShoppingCart from '../ShoppoingCart';
import '../../styles/style.css';
import logo from '../../assets/images/logo.png';
import cart from '../../assets/images/cart.png';

export default class Header extends React.Component {
  constructor(props){
    super(props);
    this.handleLoginModal = this.handleLoginModal.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.showCart = this.showCart.bind(this);
  }
  state = {
    loginPanel: false,
    errorMessage: null,
    isLoggedIn: null,
    loading: false,
    viewCart: false,
  }

  handleLoginModal(){
    this.setState({
      loginPanel: true,
    });
  }
  closeModal(e){
    e.preventDefault();
    this.setState({
      loginPanel: false,
    });

  }
   handleSignIn (e, username, password){
    e.preventDefault();
    const url = 'https://edafe-fast-food-fast.herokuapp.com/api/v1/auth/login';
    const userData = {
      username,
      password,
    }
      axios(
        {
        url,
        method: 'POST',
        data: 
          userData,
        headers: {
          "Content-Type": "application/json",
        },
  
      })
      .then((response)=>{
        if(response.status === 200){
          console.log(response.data.token);
          localStorage.setItem('fastfoodtoken',response.data.token);
          return this.setState({
            isLoggedIn: true,
          });
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        return this.setState({
          errorMessage: 'Invalid Username or Password',
          isLoggedIn: false,
        })
      });
  }
  showCart(){
    console.log('===>', this.state.viewCart)
    this.setState({
      viewCart: !this.state.viewCart,
    });
  }

  render(){
    return (
      <nav className="nav">
      {this.state.isLoggedIn ? <Redirect to="/user" /> : null}
      <header className="header">
        <div className="header-content">
          <div className="logo-container">
            <Link to="/" className="homepage">
              <p className="logo">fast<span className="logo-icon"><img alt="fast-food-fast-logo" src={logo} height="32px" width="32px"/></span><span className="logo_sub">food</span> <span className="logo_sub_2">fast</span></p>
            </Link></div>
            <div className="cart" onClick={this.showCart}><img src={cart} alt="cart" height="24px" width="24px"/><span>My Food Cart</span></div>
            <div className="menu"><img src="../../../src/assets/images/menu1.png" alt="menu" height="32px" width="32px"/> </div>
            <nav className="nav">
    <div className="login nav__item"><p className="login-modal">{this.props.user ? <span>logout</span> : <span onClick={this.handleLoginModal}>login</span>}</p></div>
                <div className="signup nav__item">{this.props.user ? <span>dashboard</span> : <span><Link to="/signup">signup</Link></span>}</div>
              </nav>
              {this.state.viewCart ? <ShoppingCart /> : null}
              <Modal errorMessage={this.state.errorMessage} closeModal={(e) => this.closeModal(e)} loginPanel={this.state.loginPanel} signin={(e, uname, password) => this.handleSignIn(e,  uname, password)}/>
        </div>
  
  </header>
  </nav>
  
    );
  }
}


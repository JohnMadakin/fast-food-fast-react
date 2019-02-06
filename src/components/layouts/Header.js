import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import Modal from '../Modal';
import ShoppingCart from '../ShoppingCart';
import logo from '../../assets/images/logo.png';
import cart from '../../assets/images/cart.png';
import '../../styles/style.css';


export default class Header extends React.Component {
  constructor(props){
    super(props);
    this.handleLoginModal = this.handleLoginModal.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.showCart = this.showCart.bind(this);
    this.closeCart = this.closeCart.bind(this);
    this.handleLogoutModal = this.handleLogoutModal.bind(this);
  }
  state = {
    loginPanel: false,
    errorMessage: null,
    isLoggedIn: null,
    loading: false,
    viewCart: false,
    loggedOut: false,
    mobileView: false,
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
          localStorage.setItem('fastfoodtoken',response.data.token);
          return this.setState({
            isLoggedIn: true,
            loginPanel: false,
          }, ()=> {
            window.location.replace('/user');
          });
        }
      })
      .catch((error) => {
        return this.setState({
          errorMessage: 'Invalid Username or Password',
          isLoggedIn: false,
        })
      });
  }
  
  showCart(){
    this.setState({
      viewCart: !this.state.viewCart,
    });
  }
  
  closeCart(){
    this.setState({
      viewCart: false,
    });
  }
  
  handleLogoutModal(){
    this.setState({
      loggedOut: true,
    }, ()=>{
      localStorage.clear('fastfoodtoken');
      window.location.replace('/');
    });
  }
  
  openMenu = () => {
    this.setState({
      mobileView: !this.state.mobileView,
    })
  }


  render(){
    console.log('this.props.user', this.props.user);
    return (
      <header className="header">
            {/* {this.state.isLoggedIn ? <Redirect to="/user" /> : null} */}
        <div className="header-content">
          <div className="logo-container">
            <Link to="/" className="homepage">
              <p className="logo">fast<span className="logo-icon"><img alt="fast-food-fast-logo" src={logo} height="32px" width="32px"/></span><span className="logo_sub">food</span> <span className="logo_sub_2">fast</span></p>
            </Link></div>
            <div className="cart" onClick={this.showCart}><img src={cart} alt="cart" height="24px" width="24px"/><span>My Food Cart</span></div>
            <div className="menu"><img src="../../../src/assets/images/menu1.png" alt="menu" height="32px" width="32px" onClick={this.openMenu}/> </div>
            <nav className={this.state.mobileView ? 'nav open' : 'nav'}>
    <div className="login nav__item"><p className="login-modal">{this.props.user || this.state.loggedOut ? <span className="header-login" onClick={this.handleLogoutModal}>Logout</span> : <span className="header-logout" onClick={this.handleLoginModal}>Login</span>}</p></div>
                <div className="signup nav__item">{this.props.user ? <span><Link to="/user">dashboard</Link></span> : <span><Link to="/signup">signup</Link></span>}</div>
              </nav>
              {this.state.viewCart ? <ShoppingCart  closeCart={this.closeCart} /> : null}
              <Modal errorMessage={this.state.errorMessage} closeModal={(e) => this.closeModal(e)} loginPanel={this.state.loginPanel} signin={(e, uname, password) => this.handleSignIn(e,  uname, password)}/>
        </div>
  </header>
    );
  }
}


import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withToastManager } from 'react-toast-notifications';



import Modal from '../Modal';
import ShoppingCart from '../ShoppingCart';
import logo from '../../assets/images/logo.png';
import cart from '../../assets/images/cart.png';
import getCartNumber from '../../actions/addToCart';
import signinUser from '../../actions/authActions';


// import getCartNumber from '../../actions/addToCart';

import '../../styles/style.css';


class Header extends React.Component {
  state = {
    loginPanel: false,
    errorMessage: null,
    isLoggedIn: null,
    loading: false,
    viewCart: false,
    loggedOut: false,
    mobileView: false,
    removeCartIcon: false,
    numberOfItems: JSON.parse(localStorage.getItem('usercart') || '[]').length,
  }

  handleLoginModal = () => {
    this.setState({
      loginPanel: true,
    });
  }
  
  closeModal= (e) =>{
    e.preventDefault();
    this.setState({
      loginPanel: false,
    });

  }
  
   handleSignIn = (e, username, password) => {
    e.preventDefault();
    const userData = {
      username,
      password,
    }
    this.props.signinUser(userData);
  }
  
  showCart = () =>{
    this.setState({
      viewCart: !this.state.viewCart,
    });
  }
  
  closeCart = () =>{
    this.setState({
      viewCart: false,
    });
  }
  
  handleLogoutModal = () => {
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
  //
  shouldComponentUpdate(nextProps){
    if (this.props.signInError !== nextProps.signInError && nextProps.signInError === true) {
      this.props.toastManager.add(`${nextProps.errorMessageSignIn}`, {
        appearance: 'error',
        autoDismiss: true,
      });
      return false;
    }
    if(nextProps.signinSuccess === true && JSON.parse(localStorage.getItem('usercart') || '[]').length < 1){
      window.location.replace('/user');;
    }
    if(nextProps.signinSuccess === true && JSON.parse(localStorage.getItem('usercart') || '[]').length > 0){
      window.location.replace('/checkout');
    }
    return true;
  }

  componentDidMount(){
    this.props.getCartNumber();
    const numberOfItems = this.props.numberOfCartItems;
    this.setState({
      numberOfItems,
    });
  }


  render(){
    let removeCartIcon;
    // this.props.history.location.pathname === '/checkout' ? removeCartIcon = true : removeCartIcon = false;
    // style={{display: removeCartIcon ? 'none' : 'block'}}
    // this.props.getCartNumber()

    const isCartEmpty = JSON.parse(localStorage.getItem('usercart') || "[]").length === 0 ? true : false;
    return (
      <header className="header">
            {/* {this.state.isLoggedIn ? <Redirect to="/user" /> : null} */}
        <div className="header-content">
          <div className="logo-container">
            <Link to="/" className="homepage">
              <p className="logo">fast<span className="logo-icon"><img alt="fast-food-fast-logo" src={logo} height="32px" width="32px"/></span><span className="logo_sub">food</span> <span className="logo_sub_2">fast</span></p>
            </Link></div>
    <div className="cart" onClick={this.showCart}><span data-badge={this.state.numberOfItems} className="items-number">{this.props.numberOfCartItems > 0 ? '+': '-'}</span><img src={cart} alt="cart" height="24px" width="24px"/>{ isCartEmpty ? <span>Empty Cart</span> : <span>Cart</span>}</div>
            <div className="menu"><img src="../../../src/assets/images/menu1.png" alt="menu" height="32px" width="32px" onClick={this.openMenu}/> </div>
            <nav className={this.state.mobileView ? 'nav open' : 'nav'}>
    <div className="login nav__item"><p className="login-modal">{!!this.props.user || this.state.loggedOut || this.props.signupSuccess ? <span className="header-login" onClick={this.handleLogoutModal}>Logout</span> : <span className="header-logout" onClick={this.handleLoginModal}>Login</span>}</p></div>
                <div className="signup nav__item">{this.props.user ? <span><Link to="/user">dashboard</Link></span> : <span><Link to="/signup">signup</Link></span>}</div>
              </nav>
              {this.state.viewCart ? <ShoppingCart history={this.props.history} closeCart={this.closeCart} /> : null}
              <Modal errorMessage={this.state.errorMessage} isLoading={this.props.isLoadingSignIn} closeModal={(e) => this.closeModal(e)} loginPanel={this.state.loginPanel} signin={(e, uname, password) => this.handleSignIn(e,  uname, password)}/>
        </div>
  </header>
    );
  }
}

export const mapStateToProps = state => ({
  ...state.getAllMenuReducer,
  ...state.addtoCartReducer,
  ...state.signinReducer,
});

export const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...getCartNumber,
    ...signinUser,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withToastManager(Header));


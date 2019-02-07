import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withToastManager } from 'react-toast-notifications';


import Products from '../menu/Products';
import menuActionCreators from '../../actions/getMenu';
import * as addToCart from '../../actions/addToCart';


export class HomePage extends React.Component {
  state = {
    cart: [],
  }
   
   componentDidMount(){
    this.props.getMenu();
  }

   handleClick = (foodItem) => {
     const order = {
       itemid: foodItem.foodId,
       itemTitle: foodItem.title,
       itemPrice: foodItem.price,
       itemurl: foodItem.imageUrl,
       itemCost: foodItem.price,
       quantity: 1,
     }
     const found = this.state.cart.find((item) => item.itemid === foodItem.foodId);
     if(found){
      return this.props.toastManager.add('Meal is already in the cart', {
        appearance: 'error',
        autoDismiss: true,
      });
     }
      this.setState({
        cart: [
          ...this.state.cart,
          order,
        ],
      }, () => {
      localStorage.setItem('usercart',JSON.stringify(this.state.cart));
       this.props.toastManager.add('Added to Cart', {
         appearance: 'success',
         autoDismiss: true,
       });
       });
   } 

  render(){
    const message = {
      title: 'Hi Customer! This is your Attendant',
      body: 'Food already added to cart',
      footer: 'ok',
    }
    return(
      <main className="content">
      <div className="hero">
          <div className="login-spinner"></div>           
          <h2 className="search-message">No Search Result Found</h2>
          <div className="search">
              <input className="search-food" type="text" placeholder="Search" /><button className="search-food-btn">Search</button>
            </div>
      </div>
      <div className="content-food">
          <div className="tab-content" id="sale">
              <div className="search-result">
    
              </div>          
            <div className="tab-content-container">
                  {this.props.isGettingAllMenu ? <div className="spinner"></div> : null}           
                <Products alreadyAdded={this.state.alreadyAdded}
                  menu={this.props.menu}
                  handleClick={this.handleClick}
                  buttonText={this.state.buttonText}
                />           
            </div>
          </div>
      </div>
    </main>
    );
  }
}

export const mapStateToProps = state => ({
  ...state.getAllMenuReducer,
});

export const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...menuActionCreators,
    ...addToCart,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withToastManager(HomePage));

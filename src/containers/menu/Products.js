import React, { Component } from 'react';
import axios from 'axios';

import Product from '../../components/Products/Product';
import PopUp from '../../components/PopUp';

class Products extends Component {
  state = {
    menu: [],
    cart: [],
    alreadyAdded: false,
  }
  componentDidMount(){
    axios.get('https://edafe-fast-food-fast.herokuapp.com/api/v1/menu')
    .then(res => {
      this.setState({ menu : res.data.menu});
    })
  }
  closePopUp = () => {
    console.log('something about you baby')
   this.setState({
      alreadyAdded: false,
    });
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
    // order.itemCost = order.quantity * order.itemPrice;
    const found = this.state.cart.find((item) => item.itemid === foodItem.foodId);
    if(found){
      console.log('-----you rock my world - -')
      return this.setState({
        alreadyAdded: true,
      });
    }
    this.setState({
      cart: [
        ...this.state.cart,
        order,
      ]
    }, () => {
      localStorage.setItem('usercart',JSON.stringify(this.state.cart));
    });
  }
  render() {
    const message = {
      title: 'Hi Customer! This is your Attendant',
      body: 'Food already added to cart',
      footer: 'ok',
    }

    const menus = this.state.menu.map((menu,index) => {
      return <Product key={menu.id} title={menu.name} calorie={menu.calorie} price={menu.price} ingredients={menu.ingredient} description={menu.description} 
        imageUrl={menu.imageurl} clickMe={this.handleClick} foodId={menu.id}
      />;
    });

    return (
      <div className="tab-content-container">
      {this.state.alreadyAdded ? <PopUp closePopUp={()=> this.closePopUp()} message={message} /> : null}
        {menus}
      </div>
    )
 }
}
export default Products;

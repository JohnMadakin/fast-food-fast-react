import React, { Component } from 'react';
import axios from 'axios';

import Product from '../../components/Products/Product';

class Products extends Component {
  state = {
    menu: [],
    cart: [],
  }
  componentDidMount(){
    axios.get('https://edafe-fast-food-fast.herokuapp.com/api/v1/menu')
    .then(res => {
      this.setState({ menu : res.data.menu});
    })
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
      return null;
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
    const menus = this.state.menu.map((menu,index) => {
      return <Product key={menu.id} title={menu.name} calorie={menu.calorie} price={menu.price} ingredients={menu.ingredient} description={menu.description} 
        imageUrl={menu.imageurl} clickMe={this.handleClick} foodId={menu.id}
      />;
    });

    return (
      <div className="tab-content-container">
        {menus}
      </div>
    )
 }
}
export default Products;

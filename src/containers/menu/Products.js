import React, { Component } from 'react';
import axios from 'axios';

import Product from '../../components/Products/Product';

class Products extends Component {
  state = {
    menu: [],
  }
  componentDidMount(){
    axios.get('https://edafe-fast-food-fast.herokuapp.com/api/v1/menu')
    .then(res => {
      console.log(res.data.menu)
      this.setState({ menu : res.data.menu});

    })
  }
  handleClick = (value) => {

    alert(value);
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

import React, { Component } from 'react';

import Product from '../../components/Products/Product';

export const Products = (props) => {
  const menus = props.menu.map((menu,index) => {
    return <Product key={menu.id} title={menu.name} calorie={menu.calorie} price={menu.price} ingredients={menu.ingredient} description={menu.description} 
      imageUrl={menu.imageurl} clickMe={props.handleClick} foodId={menu.id}
    />;
  });

  return (
    <div className="tab-content-container">
      {menus}
    </div>
  )
}

export default Products;

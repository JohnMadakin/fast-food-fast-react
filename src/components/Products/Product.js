import React from 'react';
import Aux from '../../hoc/Aux';

const Product = (props) => {
  return (
    <Aux>
      <div className="card">
        <h1 className="food-title">{props.title}</h1>
        <div className="space"></div>
        <div className="food-group">
          <img className="food-img" alt="bacon" src={`${props.imageUrl}`}/>
          <div className="food-more">
            <h2>Details</h2>
            <ul className="details">
              <li className="price">{props.price}</li>
              <li className="calorie">{props.calorie}</li>
              <li className="ingredient">{props.ingredients}</li>
            </ul>
          </div>
        </div>
        <hr/>
        <p className="food-des">{props.description}</p>
        <h1 className="order-now" data-price="2250" data-title="Bacon Cheeseburger" data-image-src="./images/bacon-chesseburger.jpg" onClick={()=> {props.clickMe(props.foodId, props.title, props.price)}}>add to cart</h1>
      </div>
    </Aux>
  );
}

export default Product;

import React, {Fragment} from 'react';

const Product = (props) => {
  const food = {
    foodId: props.foodId,
    price: props.price,
    title: props.title,
    imageUrl: props.imageUrl
  };
  return (
    <Fragment>
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
        <h1 className="order-now" onClick={()=> {props.clickMe(food)}}>add to cart</h1>
      </div>
    </Fragment>
  );
}

export default Product;

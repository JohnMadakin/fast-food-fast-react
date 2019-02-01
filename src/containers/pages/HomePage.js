import React from 'react';

import Products from '../menu/Products';

const HomePage = (props) => (
  <main className="content">
  <div className="hero">
      <div className="login-spinner"></div>           
      <h2 className="search-message">No Search Result Found</h2>
      <div className="search">
          <input className="search-food" type="text" placeholder="Search" /><button className="search-food-btn">Search</button>
        </div>
  </div>
  <div className="pop-up">
    <div className="pop-up-container">
      <div className="pop-up-msg-group">
        <h2 className="pop-up-title">Hi Customer! This is your Attendant</h2>
        <p className="pop-up-message">You have already added this to your food cart. Please adjust the quantity there</p>
        <p className="close-pop-up">Ok</p>
      </div>
    </div>
  </div>
  <div className="content-food">
      <div className="tab-content" id="sale">
          <div className="search-result">

          </div>          
        <div className="tab-content-container">
            {/* <div className="spinner"></div> */}
            <Products/>           
        </div>
      </div>
            
  </div>
  
</main>
);

export default HomePage;

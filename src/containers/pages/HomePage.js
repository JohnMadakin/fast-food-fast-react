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
  <div className="content-food">
      <div className="tab-content" id="sale">
          <div className="search-result">

          </div>          
        <div className="tab-content-container">
            <Products/>           
        </div>
      </div>
            
  </div>
</main>
);

export default HomePage;

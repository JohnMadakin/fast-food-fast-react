import React from 'react';
import {Link, IndexLink} from 'react-router';
export default class Header extends React.Component {
  render() {
    return(
      <div>
         <header className="header">
         <div className="logo-container">
        <a href="index.html" className="homepage">
          <p className="logo">fast<span className="logo-icon">
          <img alt="fast-food-fast-logo" src="./images/logo.png" height="32px" width="32px"/>
          </span><span className="logo_sub">food</span> <span className="logo_sub_2">fast</span></p>
        </a></div>
         </header>
      </div>
    );
  }
}
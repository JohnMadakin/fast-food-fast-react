import React from 'react';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';


import Header from './Header';
import Footer from './Footer';
import Aux from '../../hoc/Aux';

const decodeToken = () => {
  const token = localStorage.getItem('fastfoodtoken');
  try {
    const tokenInfo = jwtDecode(token);
    return tokenInfo;
  } catch (err) {
    return null;
  }
};

const Layout = (props) => {
  const userinfo = decodeToken();
  return (
    <Aux>
    <Header user={userinfo}/>
     {props.children}
    {/* <Footer /> */}
   </Aux>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired
};

export default Layout;

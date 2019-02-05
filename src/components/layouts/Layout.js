import React from 'react';
import PropTypes from 'prop-types';


import Header from './Header';
import Aux from '../../hoc/Aux';


const Layout = (props) => {
  // const userinfo = decodeToken();
  return (
    <Aux>
      <Header user={props.user} />
     {props.children}
   </Aux>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired
};

export default Layout;

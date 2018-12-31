import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';
import Aux from '../../hoc/Aux';

const Layout = (props) => (
  <Aux>
   <Header/>
    {props.children}
   {/* <Footer /> */}
  </Aux>
);

Layout.propTypes = {
  children: PropTypes.object.isRequired
};

export default Layout;

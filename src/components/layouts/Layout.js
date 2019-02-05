import React, {Fragment} from 'react';
import PropTypes from 'prop-types';


import Header from './Header';
import Aux from '../../hoc/Aux';


const Layout = (props) => {
  return (
    <Fragment>
      <Header user={props.user} />
     {props.children}
   </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired
};

export default Layout;

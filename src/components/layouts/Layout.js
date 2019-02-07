import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router'


import Header from './Header';


const Layout = (props) => {
  return (
    <Fragment>
      <Header history={props.history} user={props.user} />
     {props.children}
   </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired
};

export default withRouter(Layout);

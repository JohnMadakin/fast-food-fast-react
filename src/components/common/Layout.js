import React, {PropTypes} from 'react';
import Header from './Header';
import Footer from './Footer';

class Layout extends React.Component {
  render(){
   return (
     <div className="container-fluid">
      <Header/>
      {this.props.children}
      <Footer />
     </div>
   );
  }
}

Layout.propTypes = {
  children: PropTypes.object.isRequired
};

export default Layout;

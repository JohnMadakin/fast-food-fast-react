import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withToastManager } from 'react-toast-notifications';

import Order from '../../components/Order'
import getUserOrders from '../../actions/getUserOrder';


export class User extends React.Component {
  state = {
    orders: {},
    loading: true,
    displayPending: false,
    displayConfirm: false,
    displayDashboard: true,
  }
  componentDidMount(){
    const { user , getUserOrders} = this.props;
    if(!user ){
      return this.props.history.push('/');
    }
    getUserOrders(user);
   }
  handleSideNav = (tab) =>{
    if(tab === 'pending'){
      return this.setState({
        displayPending: true,
        displayConfirm: false,
      displayDashboard: false,

      });
    }
    return this.setState({
      displayConfirm: true,
      displayPending: false,
      displayDashboard: false,

    });

  }

  render(){ 
    let user = "";
    if(this.props.user){
      user = this.props.user.user.firstname;
    }
    return (
      <div>
        <div className="admin-content">
          <div className="content-nav">
            <p className="admin-nav-orders" id="pending-nav" data-nav="pending" onClick={()=> this.handleSideNav('pending')}>Pending Orders</p>
            <p className="admin-nav-orders" id="confirm-nav" data-nav="confirm" onClick={()=> this.handleSideNav('confirm')}>Delivered Orders</p>
          </div>
          <div className="admin-content-food" id="confirm" style={{display: this.state.displayConfirm ? 'block' : 'none'}}>
            <h2 className="dahboard-message">Hello {user}, Sorry, You have no confirmed Orders</h2>
            </div>
            <div className="admin-content-food" id="dashboard" style={{display: this.state.displayDashboard ? 'block' : 'none'}}>
              <h2 className="dahboard-message">Hello <span className="dashboard-name">{user}</span>, Welcome to your Dashboard</h2>
            </div>

          <div className="admin-content-food" id="pending" style={{display: this.state.displayPending ? 'block' : 'none'}}>
          {this.props.isGettingOrder ? <div className="spinner"></div> : null}           
              {this.props.getOrderSuccess ? <Order orders={this.props.orders} /> : null}
            </div>
          </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  ...state.getUserOrdersReducer,
});

export const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...getUserOrders,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withToastManager(User));

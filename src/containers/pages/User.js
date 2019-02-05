import React from 'react';
import axios from 'axios';
import Order from '../../components/Order'
import history from '../../history';


class User extends React.Component {
  constructor(props){
    super(props);
    this.handleSideNav = this.handleSideNav.bind(this);
  }
  state = {
    orders: {},
    loading: true,
    displayPending: false,
    displayConfirm: false,
  }
  componentDidMount(){
    const { user } = this.props;
    console.log('user => ', user)
    if(!user ){
      return history.push('/');
    }
    const url = `https://edafe-fast-food-fast.herokuapp.com/api/v1/users/${user.user.id}/orders`;
    axios(
      {
      url,
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "x-auth": user.token,
      },
    })
    .then(res => {
      this.setState({
        orders: res.data,
        loading: false,
      })
    })
    .catch((error)=>{
      console.log('error => ',error.response)
    });

  }
  handleSideNav(tab){
    if(tab === 'pending'){
      return this.setState({
        displayPending: true,
      });
    }
    return this.setState({
      displayConfirm: true,
    });

  }
  // componentWillMount(){
  //   const { user } = this.props;
  //   if(!user ){
  //     return history.push('/signup');
  //   }
  // }
  // shouldComponentUpdate(){
  //   console.log('--i reach component should update');
  // }

  render(){
    return (
      <div>
        <div className="admin-content">
          <div className="content-nav">
            <p className="admin-nav-orders" data-nav="pending" onClick={()=> this.handleSideNav('pending')}>Pending Orders</p>
            <p className="admin-nav-orders" data-nav="confirm" onClick={()=> this.handleSideNav('confirm')}>Delivered Orders</p>
            <div className="admin-content-food" id="confirm">

            </div>
          </div>
          <div className="admin-content-food" id="pending" style={{display: this.state.displayPending ? 'block' : 'none'}}>
              {!this.state.loading ? <Order orders={this.state.orders} /> : null}
            </div>
          </div>
      </div>
    );
  }
}

export default User;

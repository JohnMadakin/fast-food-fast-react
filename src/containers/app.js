import React, { Component } from "react";
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';

 
import history from '../history';
import store from '../store';
import Layout from '../components/layouts/Layout';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import CheckOut from './pages/Checkout';
import User from '../containers/pages/User';

const App = ({ user}) => {
  return (
    <Provider store={store}>
      <Router history={history}>
      <Layout user={user}>
          <Switch>
            <Route path='/' exact render={props => <HomePage {...props} user={user} />} />
            <Route path='/signup' exact component={SignUp}/>
            <Route path='/checkout' exact render={props => <CheckOut {...props} user={user} />}/>
            <Route path='/user' exact render={props => <User {...props} user={user} />}/>
          </Switch>
        </Layout>

      </Router>
      </Provider>
  );
}

export default App;

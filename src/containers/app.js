import React, { Component } from "react";
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import store from '../store';
import Layout from '../components/layouts/Layout';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';

class App extends Component {
    render() {
        return (
        <Provider store={store}>
          <BrowserRouter>
          <Layout>
              <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path='/signup' component={SignUp}/>
              </Switch>
            </Layout>

          </BrowserRouter>
          </Provider>
        );
    }
}

export default App;

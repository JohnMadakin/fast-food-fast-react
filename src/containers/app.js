import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from '../components/layouts/Layout';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';

class App extends Component {
    render() {
        return (
          <div>
            <Layout>
              <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path='/signup' component={SignUp}/>
              </Switch>
            </Layout>
          </div>
        );
    }
}

export default App;

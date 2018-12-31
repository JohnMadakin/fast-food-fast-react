import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from "./containers/app.js";
import reducer from './store/reducer';
import './styles/style.css';

const store = createStore(reducer);

render(<Provider store={store}><Router><App/></Router></Provider>, 
  document.querySelector("#root"));



import React from 'react';
import {render} from 'react-dom';

import App from "./containers/app.js";
import './styles/style.css';


render(<App/>, 
  document.querySelector("#root"));



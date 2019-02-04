import React from 'react';
import {render} from 'react-dom';

import decodeToken from './helpers/jwtDecode';
import App from "./containers/app.js";
import './styles/style.css';

const user = decodeToken();
render(<App user={user}/>, 
  document.querySelector("#root"));



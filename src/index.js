import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import App from "./components/App.js";

ReactDOM.render(<Router history={browserHistory} routes={routes} />
  , document.getElementById("root"));


import { combineReducers } from 'redux';
import signUpReducer from './signup';
import getAllMenuReducer from './getAllMenu';
import addtoCartReducer from './addtoCart';
import postOrderReducer from './postOrderReducer';
import getUserOrdersReducer from './getUserOrders';
import signinReducer from './signinReducer';

const rootReducer = combineReducers({
  getAllMenuReducer,
  addtoCartReducer,
  postOrderReducer,
  getUserOrdersReducer,
  signUpReducer,
  signinReducer,
});

export default rootReducer;

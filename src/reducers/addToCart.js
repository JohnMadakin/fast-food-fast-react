import * as actions from '../actions/actionTypes';
import updateObject from '../helpers/utility';

export const initialState = {
  cartItems: 0,
  numberOfCartItems: 0,
};

const addCartSuccess = (state, action )=> {
  return updateObject(
    state, {
      cartItems: state.numberOfCartItems + action.payload,
    },
  );
}

const getCartNumberSuccess = (state, action)=> {
  return updateObject(
    state, {
      numberOfCartItems: action.payload,
    },
  );
}


const addtoCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TO_CART:
      return addCartSuccess(state, action);
    case actions.GET_CART_NUMBER:
      return getCartNumberSuccess(state, action);
    default:
      return state;
  }
};

export default addtoCartReducer;


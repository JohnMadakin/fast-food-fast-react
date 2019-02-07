import * as actionTypes from './actionTypes';
 
export const addToCartSuccess = () => ({
  type: actionTypes.ADD_TO_CART,
  payload: 1,
});

export const cartNumberSuccess = (payload) => ({
  type: actionTypes.GET_CART_NUMBER,
  payload,
});


/**
 * @description - addToCart 
 * @param {*} user - user object to dispatch
 * @param {*} history
 * @returns {fn} - addToCart dispatch function
 */
export const addToCart = () => (dispatch) => {
    return dispatch(addToCartSuccess());
};

export const getCartNumber = () => (dispatch) => {
  const result = JSON.parse(localStorage.getItem('usercart') || "[]").length;
  return dispatch(cartNumberSuccess(result));
};

export default { addToCart, getCartNumber };

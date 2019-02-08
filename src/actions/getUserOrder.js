import axios from 'axios';
import * as actionTypes from './actionTypes';


/**
 * @description - getUserOrders start actions
 * @returns {object} - getUserOrders start action
 */
export const getUserOrdersStart = () => ({
  type: actionTypes.GET_USER_ORDER_START,
});

/**
 * @description - getUserOrders success actions
 * @param {*} payload - success response
 * @returns {object} - getUserOrders sucess action
 */
export const getUserOrdersSuccess = result => ({
  type: actionTypes.GET_USER_ORDER_SUCCESS,
  payload: result,
});
/**
 * @description - getUserOrders failure actions
 * @param {*} payload - failure response
 * @returns {object} - getUserOrders failure action
 */
export const getUserOrdersFailure = error => ({
  type: actionTypes.GET_USER_ORDER_FAILURE,
  payload: error,
});


/**
 * @description - getUserOrders 
 * @param {*} user - user object to dispatch
 * @param {*} history
 * @returns {fn} - getUserOrders dispatch function
 */
export const getUserOrders = (user) => (dispatch) => {
  dispatch(getUserOrdersStart());
  const url = `https://edafe-fast-food-fast.herokuapp.com/api/v1/users/${user.user.id}/orders`;
  axios(
    {
    url,
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "x-auth": user.token,
    },
  })
  .then(res => {
    dispatch(getUserOrdersSuccess(res.data));
  })
  .catch((error)=>{
    dispatch(getUserOrdersFailure(error.response));
  });
};

export default { getUserOrders };

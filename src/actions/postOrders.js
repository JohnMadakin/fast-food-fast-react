import axios from 'axios';
import * as actionTypes from './actionTypes';


/**
 * @description - postOrder start actions
 * @returns {object} - postOrder start action
 */
export const postOrderStart = () => ({
  type: actionTypes.POST_ORDER_START,
});

/**
 * @description - postOrder success actions
 * @param {*} payload - success response
 * @returns {object} - postOrder sucess action
 */
export const postOrderSuccess = result => ({
  type: actionTypes.POST_ORDER_SUCCESS,
  payload: result,
});
/**
 * @description - postOrder failure actions
 * @param {*} payload - failure response
 * @returns {object} - postOrder failure action
 */
export const postOrderFailure = error => ({
  type: actionTypes.POST_ORDER_FAILURE,
  payload: error,
});

/**
 * @description - postOrder 
 * @param {*} user - user object to dispatch
 * @param {*} history
 * @returns {fn} - postOrder dispatch function
 */
export const postOrder = (token, orders, address) => (dispatch) => {
  dispatch(postOrderStart());
  const url = 'https://edafe-fast-food-fast.herokuapp.com/api/v1/orders';
  const orderContent = orders.map(items => {
    const {itemCost, itemPrice, itemTitle, itemurl, ...selectedItems} = items;
    return selectedItems;
  })
  const userData = {
    orders:[
      ...orderContent,
    ],
    status: "pending",
    payment: 'payondelivery',
    deliveryAddress: address.trim(),
  }
  axios(
    {
    url,
    method: 'POST',
    data: 
      JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
      "x-auth": token,
    },
  })
  .then((response)=>{
    dispatch(postOrderSuccess(response.data));
    localStorage.clear('usercart');
    localStorage.clear('userorder');
  })
  .catch((error)=>{
    dispatch(postOrderFailure(error.response));
  })
};

export default { postOrder };

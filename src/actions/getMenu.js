import axios from 'axios';
import * as actionTypes from './actionTypes';


/**
 * @description - getMenu start actions
 * @returns {object} - getMenu start action
 */
export const getMenuStart = () => ({
  type: actionTypes.GET_MENU_START,
});

/**
 * @description - getMenu success actions
 * @param {*} payload - success response
 * @returns {object} - getMenu sucess action
 */
export const getMenuSuccess = result => ({
  type: actionTypes.GET_MENU_SUCCESS,
  payload: result,
});
/**
 * @description - getMenu failure actions
 * @param {*} payload - failure response
 * @returns {object} - getMenu failure action
 */
export const getMenuFailure = error => ({
  type: actionTypes.GET_MENU_FAILURE,
  payload: error,
});


/**
 * @description - getMenu 
 * @param {*} user - user object to dispatch
 * @param {*} history
 * @returns {fn} - getMenu dispatch function
 */
export const getMenu = () => (dispatch) => {
  dispatch(getMenuStart());
  axios.get('https://edafe-fast-food-fast.herokuapp.com/api/v1/menu')
  .then((res) => {
    dispatch(getMenuSuccess(res.data));
  })
  .catch((error)=>{
    dispatch(getMenuFailure(error.reponse));
  });
};

export default { getMenu };

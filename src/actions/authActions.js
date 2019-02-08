import axios from 'axios';
import * as actionTypes from './actionTypes';

/**
 * @description - Signin start actions
 * @returns {object} - signin start action
 */
export const signinStart = () => ({
  type: actionTypes.SIGN_IN_START,
});

/**
 * @description - Signin success actions
 * @param {*} payload - success response
 * @returns {object} - signin sucess action
 */
export const signinSuccess = payload => ({
  type: actionTypes.SIGN_IN_SUCCESS,
  payload,
});

/**
 * @description - Signin failure actions
 * @param {*} payload - failure response
 * @returns {object} - signin start action
 */
export const signinFailure = payload => ({
  type: actionTypes.SIGN_IN_FAILURE,
  payload,
});

/**
 * @description - Signin user
 * @param {*} user - user object to dispatch
 * @param {*} history
 * @returns {fn} - signin dispatch function
 */
export const signinUser = (userData) => async (dispatch) => {
  dispatch(signinStart());
  const url = 'https://edafe-fast-food-fast.herokuapp.com/api/v1/auth/login';
  axios(
      {
      url,
      method: 'POST',
      data: 
        userData,
      headers: {
        "Content-Type": "application/json",
      },

    })
    .then((response)=>{
      localStorage.setItem('fastfoodtoken',response.data.token);
      dispatch(signinSuccess(response.data));
    })
    .catch((error) => {
      dispatch(signinFailure(error));
    });

};
export const signUpStart = () => ({
  type: actionTypes.SIGN_UP_START,
});

/**
 * @description - Signup success actions
 * @param {*} payload - success response
 * @returns {object} - signup sucess action
 */
export const signUpSuccess = payload => ({
  type: actionTypes.SIGN_UP_SUCCESS,
  payload,
});

/**
 * @description - Signup failure actions
 * @param {*} payload - failure response
 * @returns {object} - signup start action
 */
export const signUpFailure = payload => ({
  type: actionTypes.SIGN_UP_FAILURE,
  payload,
});

/**
 * @description - Signup user
 * @param {*} user - user object to dispatch
 * @param {*} history
 * @returns {fn} - signup dispatch function
 */
export const signUpUser = (user, history) => async (dispatch) => {
  dispatch(signUpStart());
    const url = 'https://edafe-fast-food-fast.herokuapp.com/api/v1/auth/signup';
    axios.post(url,
      { ...user })
    .then((res)=>{
      localStorage.setItem('fastfoodtoken',res.data.token);
      const numberOfItems = JSON.parse(localStorage.getItem('usercart') || '[]').length;
      dispatch(signUpSuccess(res.data));
      numberOfItems < 1 ? history.push('/') : history.push('/checkout')
    })
    .catch((err) => {
      dispatch(signUpFailure(err));
    });
};

export default {
  signUpUser,
  signinUser,
}
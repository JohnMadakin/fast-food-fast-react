import * as actionTypes from '../actions/actionTypes';
import updateObject from '../helpers/utility';

const initState = {
  isLoadingSignIn: false,
  signinResponse: null,
  signInError: null,
  signinSuccess: null,
  errorMessageSignIn: null,
};

/**
 * @description - signin start - update the state when called
 * @param {object} state
 * @returns {object} - updated state
 */
const signinStart = state => updateObject(state,
  { isLoadingSignIn: true, signInError: null });

/**
 * @description - signin failure - update the state when called
 * @param {object} state
 * @param {object} action
 * @returns {object} - updated state
 */
const signinFailure = (state, action) => updateObject(state, {
  isLoadingSignIn: false,
  signInError: true,
  errorMessageSignIn: action.payload.response.data.message,
});

/**
 * @description - signin success - update the state when called
 * @param {object} state
 * @param {object} action
 * @returns {object} - updated state
 */
const signinSuccess = (state, action) => updateObject(state, {
  isLoadingSignIn: false,
  signinSuccess: true,
  signinResponse: action.payload,
});
const signinReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN_START: 
      return signinStart(state);
    case actionTypes.SIGN_IN_FAILURE: 
      return signinFailure(state, action);
    case actionTypes.SIGN_IN_SUCCESS: 
      return signinSuccess(state, action);
    default: return state;
  }
};

export default signinReducer;

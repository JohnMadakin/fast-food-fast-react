import * as actionTypes from '../actions/actionTypes';
import updateObject from '../helpers/utility';

const initState = {
  isLoading: false,
  response: null,
  error: null,
  signupSuccess: null,
  errorMessage: null,
};

/**
 * @description - Signup start - update the state when called
 * @param {object} state
 * @returns {object} - updated state
 */
const signUpStart = state => updateObject(state,
  { isLoading: true, error: null });

/**
 * @description - Signup failure - update the state when called
 * @param {object} state
 * @param {object} action
 * @returns {object} - updated state
 */
const signUpFailure = (state, action) => updateObject(state, {
  isLoading: false,
  error: true,
  errorMessage: action.payload.response.data.message,
});

/**
 * @description - Signup success - update the state when called
 * @param {object} state
 * @param {object} action
 * @returns {object} - updated state
 */
const signUpSuccess = (state, action) => updateObject(state, {
  isLoading: false,
  signupSuccess: true,
  response: action.payload,
});
const signUpReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP_START: 
      return signUpStart(state);
    case actionTypes.SIGN_UP_FAILURE: 
      return signUpFailure(state, action);
    case actionTypes.SIGN_UP_SUCCESS: 
      return signUpSuccess(state, action);
    default: return state;
  }
};

export default signUpReducer;

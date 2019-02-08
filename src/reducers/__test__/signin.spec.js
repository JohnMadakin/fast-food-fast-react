import reducers from '../signinReducer';
import * as actionTypes from '../../actions/actionTypes';

describe('### Signin Reducers', () => {
  it('should return an updated state if postOrderReducer success is called', () => {
    expect(reducers({
      isLoadingSignIn: false,
      signinResponse: null,
      signInError: null,
      signinSuccess: null,
      errorMessageSignIn: null,
        }, { type: actionTypes.SIGN_IN_SUCCESS , payload: {}})).toEqual({
          isLoadingSignIn: false,
          signinResponse: {},
          signInError: null,
          signinSuccess: true,
          errorMessageSignIn: null,
      });
  });

  it('should return an updated state if Signin start is called', () => {
    expect(reducers({
      isLoadingSignIn: false,
      signinResponse: null,
      signInError: null,
      signinSuccess: null,
      errorMessageSignIn: null,
        }, { type: actionTypes.SIGN_IN_START })).toEqual({
          isLoadingSignIn: true,
          signinResponse: null,
          signInError: null,
          signinSuccess: null,
          errorMessageSignIn: null,
      });
  });
  it('should return an updated state if Signin failure is called', () => {
    const response = {
      response:{
        data:{
          message: 'error occured',
        }
      }
    };
    expect(reducers({
      isLoadingSignIn: false,
      signinResponse: null,
      signInError: null,
      signinSuccess: null,
      errorMessageSignIn: null,
    }, { type: actionTypes.SIGN_IN_FAILURE, payload: response })).toEqual({
      isLoadingSignIn: false,
      signinResponse: null,
      signInError: true,
      signinSuccess: null,
      errorMessageSignIn: 'error occured',
    });
  });


});



import reducers from '../signup';
import * as actionTypes from '../../actions/actionTypes';

describe('### signup Reducers', () => {
  it('should return an updated state if postOrderReducer success is called', () => {
    expect(reducers({
      isLoading: false,
      response: null,
      error: null,
      signupSuccess: null,
      errorMessage: null,
    }, { type: actionTypes.SIGN_UP_SUCCESS , payload: {}})).toEqual({
      isLoading: false,
      error: null,
      errorMessage: null,
      signupSuccess: true,
      response: {},
  });
  });

  it('should return an updated state if signup start is called', () => {
    expect(reducers({
      isLoading: false,
      response: null,
      error: null,
      signupSuccess: null,
      errorMessage: null,
        }, { type: actionTypes.SIGN_UP_START })).toEqual({
          isLoading: true,
          error: null,
          errorMessage: null,
          signupSuccess: null,
          response: null,
        });
  });
  it('should return an updated state if signup failure is called', () => {
    const response = {
      response:{
        data:{
          message: 'error occured',
        }
      }
    };
    expect(reducers({
      isLoading: false,
      response: null,
      error: null,
      signupSuccess: null,
      errorMessage: null,
    }, { type: actionTypes.SIGN_UP_FAILURE, payload: response })).toEqual({
        isLoading: false,
        error: true,
        errorMessage: 'error occured',
        signupSuccess: null,
        response: null,
      });
  });


});



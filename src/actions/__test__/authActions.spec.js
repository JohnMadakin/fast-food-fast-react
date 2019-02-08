
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
const dispatchFn = jest.fn();

import {
  signinUser,
  signUpUser,  
  signUpFailure,
  signinFailure,
} from '../authActions';
import * as actionTypes from '../actionTypes';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('### Auth Actions Creators', () => {
  
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  // });

  it('should dispatch start signup actions ',
  async () => {
    const token = 'eytoskl39i0j443322323klklvdslfnkdfklnsllmd';
    const history = {
      push: jest.fn(),
    }
    const user = {
        firstname: 'sdfgsd',
        lastname: 'dsd',
      };
  const mockResponse = [
       { 
         id: 1,
         data: 'dsdf',
      }
      ];
    
    moxios.stubRequest('https://edafe-fast-food-fast.herokuapp.com/api/v1/auth/signup', {
      status: 200,
      response: mockResponse,
    });

    const expectedActions = [{
      type: actionTypes.SIGN_UP_START,
    }];
    const store = mockStore({});
    await store
      .dispatch(signUpUser(user, history));
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('should dispatch start signin actions ',
  async () => {
    const token = 'eytoskl39i0j443322323klklvdslfnkdfklnsllmd';
    const user = {
        username: 'sdfgsd',
        password: 'dsd',
      };
  const mockResponse = [
       { 
         id: 1,
         data: 'dsdf',
      }
      ];
    
    moxios.stubRequest('https://edafe-fast-food-fast.herokuapp.com/api/v1/auth/login', {
      status: 200,
      response: mockResponse,
    });

    const expectedActions = [{
      type: actionTypes.SIGN_IN_START,
    }];
    const store = mockStore({});
    await store
      .dispatch(signinUser(user));
    expect(store.getActions()).toEqual(expectedActions);
  });



  it('should return should return 500 Error Occur -signin actions  ',
  async () => {
    const error = {
      response: 'error occured',
    };
    moxios.stubRequest('https://edafe-fast-food-fast.herokuapp.com/api/v1/auth/login', {
      status: 500,
      response: error,
    });
    const expectedActions = [{
      type:  actionTypes.SIGN_IN_FAILURE,
      payload: {
        response: 'error occured',
      },
    }];
    const store = mockStore({});
    await store
      .dispatch(signinFailure(error));
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('should return should return 500 Error Occur -signin actions  ',
  async () => {
    const error = {
      response: 'error occured',
    };
    moxios.stubRequest('https://edafe-fast-food-fast.herokuapp.com/api/v1/auth/signup', {
      status: 500,
      response: error,
    });
    const expectedActions = [{
      type:  actionTypes.SIGN_UP_FAILURE,
      payload: {
        response: 'error occured',
      },
    }];
    const store = mockStore({});
    await store
      .dispatch(signUpFailure(error));
    expect(store.getActions()).toEqual(expectedActions);
  });
});


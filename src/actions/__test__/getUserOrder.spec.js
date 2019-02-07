import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import {
  getUserOrders,
  getUserOrdersFailure,
} from '../getUserOrder';
import * as actionTypes from '../actionTypes';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('### get user orders Actions Creators', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('should dispatch getUserOrders actions ',
  async () => {
    const user = {
      user: {
        id: 1,

      }
    };
  const mockResponse = [
       { id: 1,}
      ];
    
    moxios.stubRequest(`https://edafe-fast-food-fast.herokuapp.com/api/v1/users/${user.user.id}/orders`, {
      status: 200,
      response: mockResponse,
    });

    const expectedActions = [{
      type: actionTypes.GET_USER_ORDER_START,
    }];
    const store = mockStore({});
    await store
      .dispatch(getUserOrders(user));
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('should return should return 401 Error Occur - get orders failure actions  ',
  async () => {
    const error = {
      response: {
        message: 'error occured',
      },
    };
    moxios.stubRequest('https://edafe-fast-food-fast.herokuapp.com/api/v1/menu', {
      status: 500,
      response: error,
    });
    const expectedActions = [{
      type: actionTypes.GET_USER_ORDER_FAILURE,
      payload: {
        response: {
          message: 'error occured',
        },
        },
    }];
    const store = mockStore({});
    await store
      .dispatch(getUserOrdersFailure(error));
    expect(store.getActions()).toEqual(expectedActions);
  });


});
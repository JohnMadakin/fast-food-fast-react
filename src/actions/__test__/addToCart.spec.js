import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import {
  getCartNumber,
  addToCart,
} from '../addToCart';
import decodedToken from '../../helpers/jwtDecode.js';
import * as actionTypes from '../actionTypes';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('### Add to cart Actions Creators', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should dispatch addToCart actions ',
  async () => {
    const expectedActions = [{
      type: actionTypes.ADD_TO_CART,
      payload: 1,
    }];
    const store = mockStore({});
    await store
      .dispatch(addToCart());
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('should dispatch getCartNumber actions ',
  async () => {
    const expectedActions = [{
      type: actionTypes.GET_CART_NUMBER,
      payload: 0,
    }];
    const store = mockStore({});
    await store
      .dispatch(getCartNumber());
    expect(store.getActions()).toEqual(expectedActions);
  });

});


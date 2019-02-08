
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import {
  postOrder,
  postOrderFailure,
} from '../postOrders';
import * as actionTypes from '../actionTypes';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('### Post Order Actions Creators', () => {
  
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  // });

  it('should dispatch start postorder actions ',
  async () => {
    const token = 'eytoskl39i0j443322323klklvdslfnkdfklnsllmd';
    const address = '10 ikorodu lagos';
    const orders = [{
        itemid: 2,
        quantity: 3,
        status: "pending",
        payment: 'payondelivery',
        deliveryAddress: address
      }];
  const mockResponse = [
       { id: 1,}
      ];
    
    moxios.stubRequest('https://edafe-fast-food-fast.herokuapp.com/api/v1/orders', {
      status: 200,
      response: mockResponse,
    });

    const expectedActions = [{
      type: actionTypes.POST_ORDER_START,
    }];
    const store = mockStore({});
    await store
      .dispatch(postOrder(token, orders, address));
    expect(store.getActions()).toEqual(expectedActions);
  });


  it('should return should return 500 Error Occur - postorder actions  ',
  async () => {
    const error = {
      response: 'error occured',
    };
    moxios.stubRequest('https://edafe-fast-food-fast.herokuapp.com/api/v1/orders', {
      status: 500,
      response: error,
    });
    const expectedActions = [{
      type:  actionTypes.POST_ORDER_FAILURE,
      payload: {
        response: 'error occured',
      },
    }];
    const store = mockStore({});
    await store
      .dispatch(postOrderFailure(error));
    expect(store.getActions()).toEqual(expectedActions);
  });
});


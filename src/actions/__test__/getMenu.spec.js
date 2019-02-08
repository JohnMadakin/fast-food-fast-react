
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import {
  getMenu,
  getMenuFailure,
} from '../getMenu';
import * as actionTypes from '../actionTypes';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('### get Menu Actions Creators', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should dispatch getMenu actions ',
  async () => {
    const mockResponse = [
       { id: 1,}
      ];
    
    moxios.stubRequest('https://edafe-fast-food-fast.herokuapp.com/api/v1/menu', {
      status: 200,
      response: mockResponse,
    });

    const expectedActions = [{
      type: actionTypes.GET_MENU_START,
    }];
    const store = mockStore({});
    await store
      .dispatch(getMenu());
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('should return should return 401 Error Occur - getMenu actions  ',
  async () => {
    const error = {
      message: 'error occured',
    };
    moxios.stubRequest('https://edafe-fast-food-fast.herokuapp.com/api/v1/menu', {
      status: 500,
      response: error,
    });
    const expectedActions = [{
      type:  actionTypes.GET_MENU_FAILURE,
      payload: {
        message: 'error occured',
      },
    }];
    const store = mockStore({});
    await store
      .dispatch(getMenuFailure(error));
    expect(store.getActions()).toEqual(expectedActions);
  });
});


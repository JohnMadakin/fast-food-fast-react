import reducers from '../getUserOrders';
import * as actionTypes from '../../actions/actionTypes';

describe('### getUserOrders Reducers', () => {
  it('should return an updated state if getUserOrders success is called', () => {
    expect(reducers({
      isGettingOrder: null,
      getOrderSuccess: null,
      orders: {},
      errorMessage: null,
      errorOccured: null,
    }, { type: actionTypes.GET_USER_ORDER_SUCCESS, payload: {} })).toEqual({
      isGettingOrder: false,
      getOrderSuccess: true,
      orders: {},
      errorMessage: null,
      errorOccured: null,

    });
  });

  it('should return an updated state if getUserOrders start is called', () => {
    expect(reducers({
      isGettingOrder: null,
      getOrderSuccess: null,
      orders: {},
      errorMessage: null,
      errorOccured: null,

    }, { type: actionTypes.GET_USER_ORDER_START, payload: {} })).toEqual({
      isGettingOrder: true,
      getOrderSuccess: null,
      orders: {},
      errorMessage: null,
      errorOccured: null,

    });
  });
  it('should return an updated state if getUserOrders failure is called', () => {
    expect(reducers({
      isGettingOrder: null,
      getOrderSuccess: null,
      orders: {},
      errorMessage: null,
      errorOccured: null,

    }, { type: actionTypes.GET_USER_ORDER_FAILURE, payload: 'error occured' })).toEqual({
      isGettingOrder: false,
      getOrderSuccess: null,
      orders: {},
      errorMessage: 'error occured',
      errorOccured: true,


      });
  });


});



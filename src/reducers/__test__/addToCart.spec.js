import reducers from '../addToCart';
import * as actionTypes from '../../actions/actionTypes';

describe('### addtocart Reducers', () => {
  it('should return an updated state if getUserOrders success is called', () => {
    expect(reducers({
      cartItems: 0,
      numberOfCartItems: 0,
        }, { type: actionTypes.ADD_TO_CART, payload: 1 })).toEqual({
          cartItems: 1,
          numberOfCartItems: 0,
        
    });
  });

  it('should return an updated state if getUserOrders start is called', () => {
    expect(reducers({
      cartItems: 0,
      numberOfCartItems: 0,
    
    }, { type: actionTypes.GET_CART_NUMBER, payload: 0 })).toEqual({
      cartItems: 0,
      numberOfCartItems: 0,
        });
  });

});



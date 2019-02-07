import reducers from '../postOrderReducer';
import * as actionTypes from '../../actions/actionTypes';

describe('### postOrderReducer Reducers', () => {
  const menu =  {
    menu: [
    {
      foodid: 1,
      title: 'bread',
  },
  {
    foodid: 2,
    title: 'rice',
},

]}
  it('should return an updated state if postOrderReducer success is called', () => {
    expect(reducers({
      isPostingOrder: null,
      orderPostSuccess: null,
      errorMessage: null,
      errorOccured: null,
    }, { type: actionTypes.POST_ORDER_SUCCESS })).toEqual({
      isPostingOrder: null,
      orderPostSuccess: true,
      errorMessage: null,
      errorOccured: null,
    });
  });

  it('should return an updated state if postOrderReducer start is called', () => {
    expect(reducers({
      isPostingOrder: null,
      orderPostSuccess: null,
      errorMessage: null,
      errorOccured: null,
    }, { type: actionTypes.POST_ORDER_START })).toEqual({
      isPostingOrder: true,
      errorOccured: null,
      orderPostSuccess: null,
      errorMessage: null,
      orderPostSuccess: null,
      });
  });
  it('should return an updated state if postOrderReducer failure is called', () => {
    const error = 'error occured';
    expect(reducers({
      isPostingOrder: null,
      orderPostSuccess: null,
      errorMessage: null,
      errorOccured: null,
    }, { type: actionTypes.POST_ORDER_FAILURE, payload: 'error occured' })).toEqual({
      isPostingOrder: false,
      errorOccured: true,
      errorMessage: error,
      orderPostSuccess: null,    
     });
  });


});



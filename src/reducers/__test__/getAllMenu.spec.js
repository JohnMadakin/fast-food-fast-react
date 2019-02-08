import reducers from '../getAllMenu';
import * as actionTypes from '../../actions/actionTypes';

describe('### getAllMEnu Reducers', () => {
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
  it('should return an updated state if getAllMEnu success is called', () => {
    expect(reducers({
      isGettingAllMenu: false,
      error: null,
      success: null,
      menu: [],
    }, { type: actionTypes.GET_MENU_SUCCESS, payload: menu })).toEqual({
      isGettingAllMenu: false,
      error: null,
      success: true,
      menu: [
        {
          foodid: 1,
          title: 'bread',
      },
      {
        foodid: 2,
        title: 'rice',
    },
    
    ],

    });
  });

  it('should return an updated state if getAllMEnu start is called', () => {
    expect(reducers({
      isGettingAllMenu: false,
      error: null,
      success: null,
      menu: [],
    }, { type: actionTypes.GET_MENU_START, payload: {} })).toEqual({
      isGettingAllMenu: true,
      error: null,
      success: null,
      menu: [],

    });
  });
  it('should return an updated state if getAllMEnu failure is called', () => {
    expect(reducers({
      isGettingAllMenu: false,
      error: null,
      success: null,
      menu: [],

    }, { type: actionTypes.GET_MENU_FAILURE, payload: true})).toEqual({
      isGettingAllMenu: false,
      error: true,
      success: false,
      menu: [],
      });
  });


});



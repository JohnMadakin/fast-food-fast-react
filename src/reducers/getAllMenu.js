import * as actions from '../actions/actionTypes';
import updateObject from '../helpers/utility';

export const initialState = {
  isGettingAllMenu: false,
  error: null,
  success: null,
  menu: [],
};

const getAllMenuSuccess = (state, action )=> {
  return updateObject(
    state, {
      isGettingAllMenu: false,
      menu: action.payload.menu,
      success: true,
    },
  );
}
const fetchingMenu = state => updateObject(
  state, {
    isGettingAllMenu: true,
  },
);

const getAllMenuFailure = (state, action) => updateObject(
  state, {
    error: action.payload,
    success: false,
    isGettingAllMenu: false,
  },
);

const getAllMenuReducer = (state = initialState, action) => {

  switch (action.type) {
    case actions.GET_MENU_FAILURE:
      return getAllMenuFailure(state, action);
    case actions.GET_MENU_SUCCESS:
      return getAllMenuSuccess(state, action);
    case actions.GET_MENU_START:
      return fetchingMenu(state);
    default:
      return state;
  }
};

export default getAllMenuReducer;

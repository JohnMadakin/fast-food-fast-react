import * as actions from '../actions/actionTypes';
import updateObject from '../helpers/utility';

export const initialState = {
  isGettingOrder: null,
  getOrderSuccess: null,
  orders: {},
  errorMessage: null,
  errorOccured: null,
};

const getUserOrdersSuccess = (state, action )=> {
  return updateObject(
    state, {
      isGettingOrder: false,
      getOrderSuccess: true,
      orders: action.payload
    },
  );
}
const gettingOrders = state => updateObject(
  state, {
    isGettingOrder: true,
  },
);

const getUserOrdersFailure = (state, action) => updateObject(
  state, {
    isGettingOrder: false,
    errorOccured: true,
    errorMessage: action.payload,
  },
);

const getUserOrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_USER_ORDER_FAILURE:
      return getUserOrdersFailure(state, action);
    case actions.GET_USER_ORDER_SUCCESS:
      return getUserOrdersSuccess(state, action);
    case actions.GET_USER_ORDER_START:
      return gettingOrders(state);
    default:
      return state;
  }
};

export default getUserOrdersReducer;

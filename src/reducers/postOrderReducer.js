import * as actions from '../actions/actionTypes';
import updateObject from '../helpers/utility';

export const initialState = {
  isPostingOrder: null,
  orderPostSuccess: null,
  errorMessage: null,
  errorOccured: null,
};

const postOrderSuccess = (state)=> {
  return updateObject(
    state, {
      isPostingOrder: null,
      orderPostSuccess: true,
    },
  );
}
const postingOrder = state => updateObject(
  state, {
    isPostingOrder: true,
    errorOccured: null,
    orderPostSuccess: null,
  },
);

const postOrderFailure = (state, action) => updateObject(
  state, {
    isPostingOrder: false,
    errorOccured: true,
    errorMessage: action.payload,
  },
);

const postOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.POST_ORDER_FAILURE:
      return postOrderFailure(state, action);
    case actions.POST_ORDER_SUCCESS:
      return postOrderSuccess(state, action);
    case actions.POST_ORDER_START:
      return postingOrder(state);
    default:
      return state;
  }
};

export default postOrderReducer;

import { combineReducers } from "redux";
import * as actionTypes from "../actions/types";

const intitalUserState = {
  currentUser: null,
  isLoading: true
};

const user_reducer = (state = intitalUserState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        currentUser: action.payload.currentUser,
        isLoading: false
      };
    case actionTypes.CLEAR_USER:
      return {
        ...intitalUserState,
        isLoading: false
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: user_reducer
});

export default rootReducer;

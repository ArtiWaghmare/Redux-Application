
import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE,LOGOUT,} from "../Redux/ActionType"

const initialState = {
  isAuthenticated: false,
  user: null,
  error: ''
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isAuthenticated: false,
        error: ''
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        error: ''
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: ''
      };
    default:
      return state;
  }
};

export default authReducer;

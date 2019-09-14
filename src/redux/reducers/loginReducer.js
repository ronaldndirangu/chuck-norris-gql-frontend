import {
  LOGIN_SUCCESS, LOG_OUT
} from '../types';

const initialState = {
  user: null,
  token: null
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        token: action.token
      };
    case LOG_OUT:
      return {
        ...state,
        user: null,
        token: null
      };
    default:
      return state;
  }
};

export default loginReducer;

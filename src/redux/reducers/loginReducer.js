import {
  LOGIN_SUCCESS
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
    default:
      return state;
  }
};

export default loginReducer;

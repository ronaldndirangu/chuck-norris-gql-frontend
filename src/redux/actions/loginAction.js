import { LOGIN_SUCCESS } from '../types';

export const loginUser = ({ user, token }) => dispatch => {
  dispatch({ type: LOGIN_SUCCESS, user, token });
};

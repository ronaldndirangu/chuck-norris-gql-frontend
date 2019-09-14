import { LOGIN_SUCCESS, LOG_OUT } from '../types';

export const loginUser = ({ user, token }) => dispatch => {
  dispatch({ type: LOGIN_SUCCESS, user, token });
};

export const doLogout = () => dispatch => {
  dispatch({ type: LOG_OUT });
};

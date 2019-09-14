import { LOGIN_SUCCESS, LOG_OUT } from '../types';

export const loginUser = ({ name, token }) => dispatch => {
  dispatch({ type: LOGIN_SUCCESS, name, token });
};

export const doLogout = () => dispatch => {
  dispatch({ type: LOG_OUT });
};

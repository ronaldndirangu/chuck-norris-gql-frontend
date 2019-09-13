import { GET_JOKE } from '../types';

export const getJoke = ({ category }) => dispatch => {
  dispatch({ type: GET_JOKE, category });
};

import { GET_JOKE } from '../types';

const initialState = {
  category: null
};

const jokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOKE:
      return {
        ...state,
        category: action.category
      };
    default:
      return state;
  }
};

export default jokeReducer;

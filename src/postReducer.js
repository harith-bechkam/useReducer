import { ACTION_TYPES } from './postActionTypes';

export const INITIAL_STATE = {
  name: '',
  city: '',
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case ACTION_TYPES.FETCH_CITY:
      return {
        ...state,
        city: action.payload,
      };

    default:
      return state;
  }
};

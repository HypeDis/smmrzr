import { SET_PREV_TAB } from './../index';

const initialState = '';

const prevTabReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PREV_TAB:
      return action.currentTab;
    default:
      return state;
  }
};

export default prevTabReducer;

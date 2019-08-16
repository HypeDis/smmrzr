const initialState = 'UpliftingNews';
import { SET_CURRENT_TAB } from './../index';

const currentTabReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_TAB:
      return action.tabName;
    default:
      return state;
  }
};

export default currentTabReducer;

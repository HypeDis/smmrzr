const initialState = false;
import { CHANGE_HIDDEN_STATUS } from './../index';
const articlesHiddenReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_HIDDEN_STATUS:
      return action.newStatus;
    default:
      return state;
  }
};

export default articlesHiddenReducer;

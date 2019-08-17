import { SET_PERCENTAGE } from './../index';

const initialState = 0;

const percentageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PERCENTAGE: {
      return action.newPercentage;
    }
    default:
      return state;
  }
};

export default percentageReducer;

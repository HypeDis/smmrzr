import { SET_PERCENTAGE } from './../index';

const initialState = 50;

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

const initialState = [{ title: '', url: '' }];

import { GOT_ARTICLES } from './../index';

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ARTICLES:
      return action.articles;
    default:
      return state;
  }
};

export default articlesReducer;

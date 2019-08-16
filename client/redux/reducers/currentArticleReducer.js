import { GOT_CURRENT_ARTICLE } from './../index';

const initialState = { title: '', content: [], url: '' };

const currentArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CURRENT_ARTICLE:
      return action.article;
    default:
      return state;
  }
};

export default currentArticleReducer;

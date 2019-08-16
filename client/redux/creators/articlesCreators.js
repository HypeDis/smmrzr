import axios from 'axios';

// constants
export const GOT_ARTICLES = 'GOT_ARTICLE_LINKS';

// creators
export const gotArticles = articles => ({ type: GOT_ARTICLES, articles });

// thunks
export const getArticlesThunk = subreddit => {
  return dispatch =>
    axios
      .get(`/api/reddit/${subreddit}`)
      .then(response => {
        dispatch(gotArticles(response.data));
      })
      .catch(e => console.error(e));
};

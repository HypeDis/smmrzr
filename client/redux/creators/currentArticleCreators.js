import axios from 'axios';
import ArticleDisplay from '../../components/ArticleDisplay';
export const GOT_CURRENT_ARTICLE = 'GOT_CURRENT_CONTENT';

export const gotCurrentArticle = article => ({
  type: GOT_CURRENT_ARTICLE,
  article,
});

export const getCurrentArticleThunk = articleObj => {
  return dispatch => {
    const { url, title, percentage } = articleObj;
    axios
      .post('/api/summary', { url, percentage })
      .then(response => {
        const articleContent = response.data.content;
        dispatch(gotCurrentArticle({ title, content: articleContent, url }));
      })
      .catch(e => console.error(e));
  };
};

export default ArticleDisplay;

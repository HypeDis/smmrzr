import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getArticlesThunk } from './../redux';
import ArticleTitlesAccordion from './ArticleTitlesAccordion';
import ArticleDisplay from '../redux/creators/currentArticleCreators';
import ArticlesHeader from './ArticlesHeader';

const ArticleMain = props => {
  const { currentTab, articles, getArticles } = props;

  useEffect(() => {
    getArticles(currentTab);
  }, [currentTab]);

  return (
    <div id="article-ui-container">
      {/* <ArticleTitlesAccordion /> */}
      <ArticlesHeader />
      <ArticleDisplay />
    </div>
  );
};

const mapState = ({ currentTab, articles }) => ({ currentTab, articles });
const mapDispatch = dispatch => ({
  getArticles: subreddit => dispatch(getArticlesThunk(subreddit)),
});

export default connect(
  mapState,
  mapDispatch
)(ArticleMain);

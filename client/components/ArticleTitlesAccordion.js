import React, { useState } from 'react';
import { connect } from 'react-redux';

import { changeHiddenStatus, getCurrentArticleThunk } from './../redux';
const ArticleTitlesAccordion = props => {
  const {
    articles,
    isHidden,
    changeHiddenStatus,
    getCurrentArticle,
    percentage,
  } = props;

  const handleClick = evt => {
    evt.preventDefault();
    evt.persist();
    const url = evt.target.dataset.url;
    const title = evt.target.dataset.title;
    console.log('url', url);
    getCurrentArticle({ title, url, percentage });
    changeHiddenStatus(true);
  };
  return (
    <div className="accordion-container">
      <div className="accordion-header">
        <p>Articles</p>
        <a
          onClick={e => {
            e.preventDefault();
            changeHiddenStatus(!isHidden);
          }}
          href=""
          uk-icon={isHidden ? 'plus' : 'minus'}
        />
      </div>

      <div className="accordion-titles" hidden={isHidden}>
        {articles.map((article, idx) => {
          return (
            <a
              className="article-link"
              key={`article_${idx}`}
              data-url={article.url}
              data-title={article.title}
              style={idx % 2 === 0 ? {} : { background: 'blanchedalmond' }}
              onClick={handleClick}
            >
              {article.title}
            </a>
          );
        })}
      </div>
    </div>
  );
};

const mapState = ({ articles, articlesHidden, percentage }) => ({
  articles,
  isHidden: articlesHidden,
  percentage,
});

const mapDispatch = dispatch => ({
  changeHiddenStatus: status => {
    dispatch(changeHiddenStatus(status));
  },
  getCurrentArticle: url => {
    dispatch(getCurrentArticleThunk(url));
  },
});
export default connect(
  mapState,
  mapDispatch
)(ArticleTitlesAccordion);

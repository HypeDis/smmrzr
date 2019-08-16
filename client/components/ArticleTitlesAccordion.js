import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import {
  changeHiddenStatus,
  getCurrentArticleThunk,
  setPrevTab,
} from './../redux';
const ArticleTitlesAccordion = props => {
  const {
    articles,
    isHidden,
    changeHiddenStatus,
    getCurrentArticle,
    percentage,
    currentTab,
    setPrevTab,
    prevTab,
  } = props;

  const articlesEl = useRef(null);

  // works when dropdown is kept open but not when switching subreddits while dropdown is hidden
  useEffect(() => {
    articlesEl.current.scrollTo(0, 0);
  }, [currentTab]);

  // reset the scroll when opening the drop down on a new tab
  useEffect(() => {
    console.log(articlesEl.current);
    if (prevTab !== currentTab) {
      articlesEl.current.scrollTo(0, 0);
      setPrevTab(currentTab);
    }
  }, [isHidden]);

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
          className="uk-icon-button uk-icon-hover "
          uk-icon={isHidden ? 'plus' : 'minus'}
        />
      </div>

      <div ref={articlesEl} className="accordion-titles" hidden={isHidden}>
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

const mapState = ({
  articles,
  articlesHidden,
  percentage,
  currentTab,
  prevTab,
}) => ({
  articles,
  isHidden: articlesHidden,
  percentage,
  currentTab,
  prevTab,
});
const mapDispatch = dispatch => ({
  changeHiddenStatus: status => {
    dispatch(changeHiddenStatus(status));
  },
  getCurrentArticle: url => {
    dispatch(getCurrentArticleThunk(url));
  },
  setPrevTab: currentTab => dispatch(setPrevTab(currentTab)),
});
export default connect(
  mapState,
  mapDispatch
)(ArticleTitlesAccordion);

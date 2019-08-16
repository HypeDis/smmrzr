import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { changeHiddenStatus, getCurrentArticleThunk } from './../redux';
const ArticleTitlesAccordion = props => {
  const {
    articles,
    isHidden,
    changeHiddenStatus,
    getCurrentArticle,
    percentage,
    currentTab,
  } = props;

  const articlesEl = useRef(null);

  const usePrevious = val => {
    const ref = useRef();
    useEffect(() => {
      ref.current = currentTab;
    }, [currentTab]);
    return ref.current;
  };

  const prevTab = usePrevious(currentTab);
  // works when dropdown is kept open but not when switching subreddits while dropdown is hidden
  useEffect(() => {
    console.log('previous tab', prevTab);
    console.log('resetting articles scroll', articlesEl.current);
    articlesEl.current.scrollTo(0, 0);
  }, [currentTab]);

  // useEffect(() => {
  //   console.log(prevTab);
  // }, [isHidden]);

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

const mapState = ({ articles, articlesHidden, percentage, currentTab }) => ({
  articles,
  isHidden: articlesHidden,
  percentage,
  currentTab,
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

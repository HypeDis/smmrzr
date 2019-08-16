import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeHiddenStatus } from './../redux';
const ArticleDisplay = props => {
  const { currentArticle, changeHiddenStatus, articlesHidden } = props;
  return (
    <div
      id="article-display-container"
      onClick={e => {
        e.preventDefault();
        changeHiddenStatus(true);
      }}
    >
      <div id="article-content">
        <h3>
          <a
            target="_blank"
            href={currentArticle.url}
            onClick={e => {
              e.stopPropagation();
            }}
          >
            {currentArticle.title}
          </a>
        </h3>
        {currentArticle.content.map(sentence => {
          return (
            <p className="article-sentence" key={sentence}>
              {sentence}
            </p>
          );
        })}
      </div>
    </div>
  );
};

const mapState = ({ currentArticle, articlesHidden }) => ({
  currentArticle,
  articlesHidden,
});
const mapDispatch = dispatch => ({
  changeHiddenStatus: newStatus => {
    dispatch(changeHiddenStatus(newStatus));
  },
});

export default connect(
  mapState,
  mapDispatch
)(ArticleDisplay);

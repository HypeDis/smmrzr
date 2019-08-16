import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { changeHiddenStatus } from './../redux';
const ArticleDisplay = props => {
  const { currentArticle, changeHiddenStatus, articlesHidden } = props;
  const displayEl = useRef(null);
  useEffect(() => {
    displayEl.current.scrollTo(0, 0);
  }, [currentArticle.url]);
  return (
    <div
      ref={displayEl}
      id="article-display-container"
      className={currentArticle.url ? '' : 'article-display-container-inactive'}
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
        {currentArticle.content.map((sentence, idx) => {
          return (
            <p className="article-sentence" key={`sentence_${idx}`}>
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

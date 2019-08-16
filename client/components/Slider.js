import React, { useState } from 'react';
import { connect } from 'react-redux';

import { setPercentage, getCurrentArticleThunk } from './../redux';

const Slider = props => {
  const {
    percentage,
    setPercentage,
    currentArticle,
    getCurrentArticle,
  } = props;

  const handleChange = e => {
    const value = e.target.value;
    setPercentage(parseInt(value));
  };

  const handleMouseUp = () => {
    if (!currentArticle.url) {
      return;
    }
    const { url, title } = currentArticle;
    getCurrentArticle({ url, title, percentage });
  };

  return (
    <div id="slide-container" className="articles-header-side-element">
      <label htmlFor="rangeValue" style={{ paddingRight: '5px' }}>
        Shrink it:
      </label>
      <input
        type="range"
        name="rangeValue"
        min="0"
        max="90"
        step="10"
        value={percentage}
        onChange={handleChange}
        onMouseUp={handleMouseUp}
        id="shrink-slider"
      />
    </div>
  );
};

const mapState = ({ percentage, currentArticle }) => ({
  percentage,
  currentArticle,
});
const mapDispatch = dispatch => ({
  setPercentage: newPercentage => {
    dispatch(setPercentage(newPercentage));
  },
  getCurrentArticle: articleInfo => {
    dispatch(getCurrentArticleThunk(articleInfo));
  },
});

export default connect(
  mapState,
  mapDispatch
)(Slider);

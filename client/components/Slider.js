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

  const getIndex = (percentage, arr) => {
    const len = arr.length;
    let idx = len - Math.round((percentage / 100) * len) - 1;
    if (idx > len - 1) {
      idx = len - 1;
    }
    if (idx < 0) {
      idx = 0;
    }
    console.log(idx);
    return idx;
  };

  const summarizeArr = ['Smmrz', 'Summrz', 'Summarz', 'Summariz', 'Summarize'];

  const [calculatedIdx, setCalculatedIdx] = useState(
    getIndex(percentage, summarizeArr)
  );
  const handleChange = e => {
    const value = e.target.value;
    setPercentage(parseInt(value));
  };

  const handleMouseUp = () => {
    console.log('calculating index');
    setCalculatedIdx(getIndex(percentage, summarizeArr));
    if (!currentArticle.url) {
      return;
    }
    const { url, title } = currentArticle;
    getCurrentArticle({ url, title, percentage });
  };

  return (
    <div id="slide-container" className="articles-header-side-element">
      <label htmlFor="rangeValue" style={{ paddingRight: '5px' }}>
        {summarizeArr[calculatedIdx]}:
      </label>
      <i uk-icon="minus" />
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
      <i uk-icon="plus" />
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

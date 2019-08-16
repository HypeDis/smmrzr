import React, { useState } from 'react';

import ArticleTitlesAccordion from './ArticleTitlesAccordion';
import Slider from './Slider';

const ArticlesHeader = () => {
  return (
    <div>
      <div id="articles-header">
        <Slider />
        <ArticleTitlesAccordion />
        <div className="articles-header-side-element">{null}</div>
      </div>
      <hr style={{ margin: 0 }} />
    </div>
  );
};

export default ArticlesHeader;

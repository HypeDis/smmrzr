import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/index';

import Header from './components/Header';
import ArticleMain from './components/ArticleMain';

const Main = () => {
  return (
    <Provider store={store}>
      <div id="main-container">
        <Header />
        <div id="view-container">
          <ArticleMain />
        </div>
      </div>
    </Provider>
  );
};

export default Main;

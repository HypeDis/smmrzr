import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import rootReducer from './rootReducer';

const store = createStore(
  rootReducer /* preloadedState, */,
  composeEnhancers(applyMiddleware(logger, thunk))
);

export default store;

export * from './creators/currentTabCreators';
export * from './creators/tabCreators';
export * from './creators/articlesCreators';
export * from './creators/articlesHiddenCreators';
export * from './creators/currentArticleCreators';
export * from './creators/percentageCreators';

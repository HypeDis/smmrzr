import { combineReducers } from 'redux';

import {
  currentTabReducer,
  tabsReducer,
  articlesReducer,
  articlesHiddenReducer,
  currentArticleReducer,
  percentageReducer,
  prevTabReducer,
} from './reducers';

const rootReducer = combineReducers({
  tabs: tabsReducer,
  currentTab: currentTabReducer,
  articles: articlesReducer,
  articlesHidden: articlesHiddenReducer,
  currentArticle: currentArticleReducer,
  percentage: percentageReducer,
  prevTab: prevTabReducer,
});

export default rootReducer;

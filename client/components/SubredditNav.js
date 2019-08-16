import React from 'react';
import { connect } from 'react-redux';
import { setCurrentTab, getArticlesThunk, setPrevTab } from '../redux/index';

const SubredditNav = props => {
  const { tabs, currentTab, setCurrentTab, getArticles, setPrevTab } = props;
  const handleClick = evt => {
    evt.preventDefault();
    evt.persist();
    if (evt.target !== evt.currentTarget) {
      // if clicking on an element nested inside the element with the onclick function
      // you have to set the target to the parent node to access the parent nodes properties
      evt.target = evt.target.parentNode;
    }
    const currentSubreddit = evt.target.dataset.subreddit;
    setPrevTab(currentTab);
    setCurrentTab(currentSubreddit);
    // getArticles(currentSubreddit);
  };
  return (
    <div id="subreddit-nav">
      <div id="subreddit-nav-tabs" className="uk-tab">
        {tabs.map(tab => {
          return (
            <li
              key={tab}
              data-subreddit={tab}
              className={
                'subreddit-nav-tab ' +
                (tab === currentTab ? 'subreddit-nav-tab-active' : '')
              }
              onClick={handleClick}
            >
              <a href="#">{tab}</a>
            </li>
          );
        })}
      </div>
    </div>
  );
};

const mapState = ({ tabs, currentTab }) => ({
  tabs,
  currentTab,
});

const mapDispatch = dispatch => ({
  setCurrentTab: tabName => dispatch(setCurrentTab(tabName)),
  getArticles: subreddit => dispatch(getArticlesThunk(subreddit)),
  setPrevTab: currentSubreddit => dispatch(setPrevTab(currentSubreddit)),
});

export default connect(
  mapState,
  mapDispatch
)(SubredditNav);

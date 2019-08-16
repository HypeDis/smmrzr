// constants
export const SET_CURRENT_TAB = 'SET_CURRENT_TAB';

// creators
export const setCurrentTab = tabName => ({
  type: SET_CURRENT_TAB,
  tabName,
});

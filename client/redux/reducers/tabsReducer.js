const initialState = [
  'UpliftingNews',
  'News',
  'WorldNews',
  'Politics',
  'Technology',
  'Science',
  'Sports',
  'Entertainment',
  'TrueReddit',
  'FloridaMan',
];

const tabsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default tabsReducer;

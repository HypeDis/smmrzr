import React from 'react';
import SubredditNav from './SubredditNav';
const Header = props => {
  return (
    <div id="header">
      <h1 id="title" style={{ marginTop: '10vh' }}>
        SMMr/ZR
      </h1>
      {/* <form className="url-form">
        <label htmlFor="url">Article URL: </label>
        <input
          className="uk-input url-bar"
          type="text"
          name="url"
          value=""
          onChange={() => {}}
        />
      </form> */}
      <SubredditNav />
    </div>
  );
};

export default Header;

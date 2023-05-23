import React from 'react';

import './searchTerm.css';

// eslint-disable-next-line react/display-name
const SearchTerm = React.memo((props) => {
  return (
    <div className="search">
      <form
        className="ant-form"
        action=""
        onSubmit={(e) => props.onHandleSubmit(e)}
        // onChange={(e) => props.onHandleSubmit(e)}
      >
        <input
          className="ant-input"
          placeholder="Type to search..."
          type="search"
          name="query"
          onChange={(e) => {
            props.onHandleChange(e);
            props.onHandleSubmit(e);
          }}
          autoFocus
        />
      </form>
    </div>
  );
});

export default SearchTerm;

import React from 'react';

const SearchBar = ({ onInputChange, onFormSubmit }) => {
  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label htmlFor="">Image Search</label>
          <input type="text" onChange={e => onInputChange(e.target.value)} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

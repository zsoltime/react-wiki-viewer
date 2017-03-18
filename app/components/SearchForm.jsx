import React, { PropTypes } from 'react';

const SearchForm = (props) => {
  let search;
  function onSearch(e) {
    e.preventDefault();
    props.handleSubmit(search.value);
  }
  // TODO: Add autocomplete
  return (
    <form className="search-form" onSubmit={onSearch}>
      <input
        type="search"
        placeholder="Search Wiki"
        ref={(node) => { search = node; }}
      />
      <button type="submit">Search</button>
    </form>
  );
};

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchForm;

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
        className="search-form__field"
        placeholder="Search Wiki"
        ref={(node) => { search = node; }}
      />
      <button
        type="submit"
        className="search-form__btn"
      >Search</button>
      <a
        href="https://en.wikipedia.org/wiki/Special:Random"
        className="search-form__btn"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >Random</a>
    </form>
  );
};

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchForm;

import PropTypes from 'prop-types';
import { useState } from 'react';

export const Searchbar = ({ onSearch }) => {
  const [searchValue, setASearchValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setASearchValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(searchValue);
    setASearchValue('');
  };

  return (
    <header className="Searchbar">
      <form onSubmit={handleSubmit} className="SearchForm">
        <input
          type="text"
          autoComplete="off"
          name="searchQuery"
          autoFocus
          placeholder="Search images and photos"
          value={searchValue}
          onChange={handleChange}
          className="SearchForm-input"
        />

        <button type="submit" className="SearchForm-button">
          <span>Search</span>
        </button>
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

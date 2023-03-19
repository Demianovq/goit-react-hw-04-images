import PropTypes from 'prop-types';
import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ searchValue: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.searchValue);
    this.setState({ searchValue: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <input
            type="text"
            autoComplete="off"
            name="searchQuery"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchValue}
            onChange={this.handleChange}
            className="SearchForm-input"
          />

          <button type="submit" className="SearchForm-button">
            <span>Search</span>
          </button>
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    updateShelf: PropTypes.func,
  }
  
  state = {
    results: [],
  }

  updateShelf = data => {
    if (this.props.updateShelf) {
      this.props.updateShelf(data);
    }
  }

  searchResults = resultsArray => {
    this.setState({
      results: resultsArray
    });
  }

  render() {
    const {results} = this.state;
    const {books, shelves} = this.props;

    return (
      <div className='search-books'>
        <SearchBar results={this.searchResults} />
        <SearchResults
          results={results}
          books={books}
          shelves={shelves}
          updateShelf={this.updateShelf} />
      </div>
    );
  }
}

export default Search;
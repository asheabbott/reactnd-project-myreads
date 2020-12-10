import React, {Component} from 'react';
import Book from './Book';

class SearchResults extends Component {
  render() {
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          <Book />
        </ol>
      </div>
    );
  }
}

export default SearchResults;
import React, {Component} from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

class Search extends Component {
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
    },
    () => {
      // TODO: callback code
    });
  }

  render() {
    const {results} = this.state;
    const {books, shelves, shelf} = this.props;

    // console.log(shelves);

    // TODO: get book listings working in search results (including fix copy / paste props)

    return (
      <div className="search-books">
        <SearchBar results={this.searchResults} />
        <SearchResults 
          results={results} 
          books={books}
          shelves={shelves}
          shelf={shelf}
          updateShelf={this.updateShelf} />
      </div>
    );
  }
}

export default Search;
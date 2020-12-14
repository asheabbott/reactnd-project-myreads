import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class SearchBar extends Component {
  state = {
    query: '',
  }

  handleChange = event => {
    this.setState({
      query: event.target.value,
    },
    () => {
      setTimeout(() => {
        this.fetchResults();
      }, 800);
    });
  }

  fetchResults = () => {
    const {query} = this.state;
    const {results} = this.props;

    if (query.length) {
      BooksAPI.search(query)
        .then(queryResults => {
          if (queryResults && !queryResults.error) {
            results(queryResults);
          } else {
            results([]);
          }
        });
    } else {
      results([]);
    }
  }

  render() {
    const {query} = this.state;

    return (
      <div className='search-books-bar'>
        <Link
          className='close-search'
          to='/'>
          Close
        </Link>
        <div className='search-books-input-wrapper'>
          {/* NOTES: The search from BooksAPI is limited to a particular set of search terms. You can find these search terms here: https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
          
          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if you don't find a specific author or title. Every search is limited by search terms. */}
          <form>
            <input
              type='text'
              placeholder='Search by title or author'
							value={query}
							onChange={this.handleChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
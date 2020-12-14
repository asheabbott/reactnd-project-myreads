import React, {Component} from 'react';
import Book from './Book';

class SearchResults extends Component {
  updateShelf = shelf => {
    if (this.props.updateShelf) {
      this.props.updateShelf({book: shelf[0], shelf: shelf[1]});
    }
  }

  render() {
    const {results, books, shelves} = this.props;
    
    return (
      <div className='search-books-results'>
        <ol className='books-grid'>
          {results.map((book, index) => {
            let shelfID = '';

            books.some(indiv => indiv.id === book.id) ? shelfID = books.filter(indiv => indiv.id === book.id)[0].shelf : shelfID = 'none';

            return <Book
              key={book.id}
              shelves={shelves}
              shelf={shelfID}
              book={book}
              onShelfChange={this.updateShelf} />
          })}
        </ol>
      </div>
    );
  }
}

export default SearchResults;
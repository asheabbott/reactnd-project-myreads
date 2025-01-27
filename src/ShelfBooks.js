import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class ShelfBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    shelf: PropTypes.object.isRequired,
    updateShelf: PropTypes.func,
  }

  updateShelf = shelf => {
    if (this.props.updateShelf) {
      this.props.updateShelf({book: shelf[0], shelf: shelf[1]});
    }
  }

  render() {
    const {books, shelves, shelf} = this.props;

    return (
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {books.filter(book => shelf.id === book.shelf).map((book, index) => (
            <Book
              key={book.id}
              shelves={shelves}
              shelf={shelf.id}
              book={book}
              onShelfChange={this.updateShelf} />
          ))}
        </ol>
      </div>
    );
  }
}

export default ShelfBooks;
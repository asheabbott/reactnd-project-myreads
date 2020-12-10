import React, {Component} from 'react';
import Book from './Book';

class ShelfBooks extends Component {
  render() {
    return (  
      <div className="bookshelf-books">
        <ol className="books-grid">
          <Book />
        </ol>
      </div>
    );
  }
}

export default ShelfBooks;
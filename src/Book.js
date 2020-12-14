import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  static propTypes = {
    shelves: PropTypes.array.isRequired,
    shelf: PropTypes.string.isRequired,
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func,
  }

  handleChange = event => {
    const {book, onShelfChange} = this.props;
      
    if (onShelfChange) {
      onShelfChange([book, event.target.value]);
    }
  }

  render() {
    const {shelves, shelf, book} = this.props;

    const bookCover = book.imageLinks ? book.imageLinks.thumbnail : 'http://books.google.com/books/content?id=1yx1tgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api';

    return (
      <li>
        <div className='book'>
          <div className='book-top'>
            <div className='book-cover' style={{ backgroundImage: `url(${bookCover})` }}></div>
            <div className='book-shelf-changer'>
              <select value={shelf} onChange={this.handleChange}>
                <option value='move' disabled>Move to...</option>
                {shelves.map(singleShelf => (
                  <option
                    key={singleShelf.id}
                    value={singleShelf.id}>
                    {singleShelf.title}
                  </option>
                ))}
            <option value='none'>None</option>
              </select>
            </div>
          </div>
          <div className='book-title'>{book.title}</div>
          {book.authors && <div className='book-authors'>{book.authors.join(', ')}</div>}
        </div>
      </li>
    );
  }
}

export default Book;
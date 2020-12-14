import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Shelf from './Shelf';

class MainContent extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    updateShelf: PropTypes.func,
  }

  updateShelf = data => {
    if (this.props.updateShelf) {
      this.props.updateShelf(data);
    }
  }

  render() {
    const {books, shelves} = this.props;

    return (
      <div className='list-books-content'>
        {shelves.map((shelf) => (
          <Shelf 
            key={shelf.id} 
            books={books} 
            shelves={shelves} 
            shelf={shelf}
            updateShelf={this.updateShelf} />
        ))}
      </div>
    );
  }
}

export default MainContent;
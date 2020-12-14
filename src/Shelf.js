import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ShelfTitle from './ShelfTitle';
import ShelfBooks from './ShelfBooks';

class Shelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    shelf: PropTypes.object.isRequired,
    updateShelf: PropTypes.func,
  }

  updateShelf = data => {
    if (this.props.updateShelf) {
      this.props.updateShelf(data);
    }
  }

  render() {
    const {books, shelves, shelf} = this.props;

    return (
      <div>
        <div className='bookshelf'>
          <ShelfTitle shelf={shelf} />
          <ShelfBooks
            books={books}
            shelves={shelves}
            shelf={shelf}
            updateShelf={this.updateShelf} />
        </div>
      </div>
    );
  }
}

export default Shelf;
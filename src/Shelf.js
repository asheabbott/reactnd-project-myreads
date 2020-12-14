import React, {Component} from 'react';
import ShelfTitle from './ShelfTitle';
import ShelfBooks from './ShelfBooks';

class Shelf extends Component {
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
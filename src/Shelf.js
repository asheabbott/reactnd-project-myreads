import React, {Component} from 'react';
import ShelfTitle from './ShelfTitle';
import ShelfBooks from './ShelfBooks';

class Shelf extends Component {
  render() {
    return (
      <div>
        <div className="bookshelf">
          <ShelfTitle />
          <ShelfBooks />
        </div>
      </div>
    );
  }
}

export default Shelf;
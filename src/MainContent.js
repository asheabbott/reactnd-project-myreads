import React, {Component} from 'react';
import Shelf from './Shelf';

class MainContent extends Component {
  updateShelf = data => {
    if (this.props.updateShelf) {
      this.props.updateShelf(data);
    }
  }

  render() {
    const {books, shelves} = this.props;

    return (
      <div className="list-books-content">
        {shelves.map((shelf, index) => (
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
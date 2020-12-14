import React, {Component} from 'react';

class ShelfTitle extends Component {
  render() {
    const {shelf} = this.props;

    return (
      <h2 className="bookshelf-title">{shelf.title}</h2>
    );
  }
}

export default ShelfTitle;
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ShelfTitle extends Component {
  static propTypes = {
    shelf: PropTypes.object.isRequired,
  }

  render() {
    const {shelf} = this.props;

    return (
      <h2 className='bookshelf-title'>{shelf.title}</h2>
    );
  }
}

export default ShelfTitle;
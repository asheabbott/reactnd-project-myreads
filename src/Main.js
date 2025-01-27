import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import MainHeader from './MainHeader';
import MainContent from './MainContent';

class Main extends Component {
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
      <div className='list-books'>
        <MainHeader />
        <MainContent
          books={books}
          shelves={shelves}
          updateShelf={this.updateShelf} />

        <div className='open-search'>
          <Link
            className='open-search-button'
            to='/search'>
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}

export default Main;
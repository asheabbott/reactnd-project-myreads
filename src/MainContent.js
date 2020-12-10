import React, {Component} from 'react';
import Shelf from './Shelf';

class MainContent extends Component {
  render() {
    return (
      <div className="list-books-content">
        <Shelf />
      </div>
    );
  }
}

export default MainContent;
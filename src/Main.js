import React, {Component} from 'react';
import MainHeader from './MainHeader';
import MainContent from './MainContent';

class Main extends Component {
  render() {
    return (
      <div className="list-books">
        <MainHeader />
        <MainContent />

        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
        </div>
      </div>
    );
  }
}

export default Main;
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Main from './Main';
import Search from './Search';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends Component {
  state = {
    books: [],
    shelves: [
      {
        id: 'currentlyReading',
        title: 'Currently Reading',
      },
      {
        id: 'wantToRead',
        title: 'Want to Read',
      },
      {
        id: 'read',
        title: 'Read',
      },
    ],
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        this.setState(() => ({
          books,
        }));
      });
  }

  updateShelf = data => {      
    BooksAPI.update(data.book, data.shelf)
      .then(() => BooksAPI.getAll())  
      .then(books => {
        this.setState(() => ({
          books,
        }));
      }); 
  }

  render() {
    const {books, shelves} = this.state;
    
    return (
      <div className='app'>
        <Route path='/search' render={() => (
          <Search
            books={books} 
            shelves={shelves}
            updateShelf={this.updateShelf} />
        )} />
        <Route exact path='/' render={() => (
          <Main 
            books={books} 
            shelves={shelves}
            updateShelf={this.updateShelf} />
        )} />
      </div>
    )
  }
}

export default BooksApp
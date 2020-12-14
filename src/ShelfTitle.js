import React from 'react';

const ShelfTitle = props => {
  const {shelf} = props;

  return (
    <h2 className='bookshelf-title'>{shelf.title}</h2>
  );
}

export default ShelfTitle;
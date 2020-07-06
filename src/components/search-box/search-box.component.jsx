import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    type='search'
    aria-label='search friends'
    className='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
);

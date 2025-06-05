import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/characterSlice';
import './searchbar.css';

export default function SearchBar() {
  const searchQuery = useSelector(state => state.characters.searchQuery);
  const dispatch = useDispatch();

  return (
    <input
      className="searchbar-input"
      type="search"
      placeholder="Buscar personaje"
      value={searchQuery}
      onChange={e => dispatch(setSearchQuery(e.target.value))}
    />
  );
}
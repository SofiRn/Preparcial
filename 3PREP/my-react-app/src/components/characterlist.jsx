import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCustomCharacter } from '../redux/characterSlice';
import './characterlist.css';

export default function CharacterList() {
  const dispatch = useDispatch();
  const { apiCharacters, customCharacters, searchQuery, userType } = useSelector(state => state.characters);

  const allCharacters = [...apiCharacters, ...customCharacters];
  const filtered = allCharacters.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ul className="character-list">
      {filtered.map(c => (
        <li key={c.id} className="character-item">
          <span>
            <b className="character-name">{c.name}</b> - {c.status} - {c.species}
          </span>
          {userType === 'admin' && !c.url && (
            <span className="character-actions">
              <Link to={`/edit/${c.id}`} className="character-btn">Editar</Link>
              <button className="character-btn" onClick={() => dispatch(deleteCustomCharacter(c.id))}>Eliminar</button>
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
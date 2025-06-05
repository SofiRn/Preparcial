import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setApiCharacters, deleteCharacter, setEditingCharacter, setSearchQuery } from '../redux/counter/CounterSlice.js';
import { Link, useNavigate } from 'react-router-dom';

function CharacterList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { apiCharacters, customCharacters, searchQuery } = useSelector((state) => state.characters);
  const userType = useSelector((state) => state.auth.userType);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => dispatch(setApiCharacters(data.results.slice(0, 20))));
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteCharacter(id));
  };

  const handleEdit = (char) => {
    dispatch(setEditingCharacter(char));
    navigate(`/edit/${char.id}`);
  };

  const allCharacters = [...apiCharacters, ...customCharacters].filter((char) =>
    char.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Character List</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      />
      {userType === 'admin' && <Link to="/create"><button>Create Character</button></Link>}
      <ul>
        {allCharacters.map((char) => (
          <li key={char.id}>
            <strong>{char.name}</strong> - {char.status} - {char.species}
            {userType === 'admin' && (
              <>
                <button onClick={() => handleEdit(char)}>Edit</button>
                <button onClick={() => handleDelete(char.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;
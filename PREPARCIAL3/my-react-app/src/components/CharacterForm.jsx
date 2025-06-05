import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCharacter, updateCharacter } from '../redux/counter/CounterSlice.js';
import { useNavigate } from 'react-router-dom';

function CharacterForm({ isEdit = false }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const editingCharacter = useSelector((state) => state.counter.editingCharacter);

  const [form, setForm] = useState({
    name: '',
    status: '',
    species: '',
  });

  useEffect(() => {
    if (isEdit && editingCharacter) {
      setForm(editingCharacter);
    }
  }, [isEdit, editingCharacter]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      dispatch(updateCharacter(form));
    } else {
      dispatch(addCharacter(form));
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="status"
        placeholder="Status"
        value={form.status}
        onChange={handleChange}
        required
      />
      <input
        name="species"
        placeholder="Species"
        value={form.species}
        onChange={handleChange}
        required
      />
      <button type="submit">{isEdit ? 'Update' : 'Create'} Character</button>
    </form>
  );
}

export default CharacterForm;

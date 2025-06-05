import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCustomCharacter } from '../redux/characterSlice';
import CharacterForm from '../components/characterforms';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditCharacter() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const character = useSelector((state) => state.characters.customCharacters.find((c) => c.id === Number(id)));

	const handleSubmit = (data) => {
		dispatch(updateCustomCharacter({ ...data, id: Number(id) }));
		navigate('/');
	};

	if (!character) return <div>No encontrado</div>;

	return <CharacterForm initialData={character} onSubmit={handleSubmit} />;
}

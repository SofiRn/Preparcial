import React from 'react';
import { useDispatch } from 'react-redux';
import { addCustomCharacter } from '../redux/characterSlice';
import CharacterForm from '../components/characterforms';
import { useNavigate } from 'react-router-dom';

export default function CreateCharacter() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = (data) => {
		dispatch(addCustomCharacter({ ...data, id: Date.now() }));
		navigate('/');
	};

	return <CharacterForm onSubmit={handleSubmit} />;
}

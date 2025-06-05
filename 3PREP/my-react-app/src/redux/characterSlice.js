import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	apiCharacters: [],
	customCharacters: [],
	searchQuery: '',
	userType: 'admin', // Cambia a 'user' para probar permisos
};

const charactersSlice = createSlice({
	name: 'characters',
	initialState,
	reducers: {
		setApiCharacters(state, action) {
			state.apiCharacters = action.payload;
		},
		addCustomCharacter(state, action) {
			state.customCharacters.push(action.payload);
		},
		updateCustomCharacter(state, action) {
			const idx = state.customCharacters.findIndex((c) => c.id === action.payload.id);
			if (idx !== -1) state.customCharacters[idx] = action.payload;
		},
		deleteCustomCharacter(state, action) {
			state.customCharacters = state.customCharacters.filter((c) => c.id !== action.payload);
		},
		setSearchQuery(state, action) {
			state.searchQuery = action.payload;
		},
		setUserType(state, action) {
			state.userType = action.payload;
		},
	},
});

export const {
	setApiCharacters,
	addCustomCharacter,
	updateCustomCharacter,
	deleteCustomCharacter,
	setSearchQuery,
	setUserType,
} = charactersSlice.actions;

export default charactersSlice.reducer;

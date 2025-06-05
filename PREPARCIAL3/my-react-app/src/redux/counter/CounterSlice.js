// src/redux/counter/CounterSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
	apiCharacters: [],
	customCharacters: [],
	editingCharacter: null,
	searchQuery: '',
};

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		setApiCharacters: (state, action) => {
			state.apiCharacters = action.payload;
		},
		addCharacter: (state, action) => {
			state.customCharacters.push({ id: nanoid(), ...action.payload });
		},
		setEditingCharacter: (state, action) => {
			state.editingCharacter = action.payload;
		},
		updateCharacter: (state, action) => {
			const index = state.customCharacters.findIndex((c) => c.id === action.payload.id);
			if (index !== -1) {
				state.customCharacters[index] = action.payload;
			}
		},
		deleteCharacter: (state, action) => {
			state.customCharacters = state.customCharacters.filter((c) => c.id !== action.payload);
		},
		setSearchQuery: (state, action) => {
			state.searchQuery = action.payload;
		},
	},
});

export const { setApiCharacters, addCharacter, setEditingCharacter, updateCharacter, deleteCharacter, setSearchQuery } =
	counterSlice.actions;

export default counterSlice.reducer;

// import { createSlice, nanoid } from '@reduxjs/toolkit';

// const initialState = {
//   apiCharacters: [],
//   customCharacters: [],
//   editingCharacter: null,
//   searchQuery: '',
// };

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     setApiCharacters: (state, action) => {
//       state.apiCharacters = action.payload;
//     },
//     addCharacter: (state, action) => {
//       state.customCharacters.push({ id: nanoid(), ...action.payload });
//     },
//     setEditingCharacter: (state, action) => {
//       state.editingCharacter = action.payload;
//     },
//     updateCharacter: (state, action) => {
//       const index = state.customCharacters.findIndex((c) => c.id === action.payload.id);
//       if (index !== -1) {
//         state.customCharacters[index] = action.payload;
//       }
//     },
//     deleteCharacter: (state, action) => {
//       state.customCharacters = state.customCharacters.filter((c) => c.id !== action.payload);
//     },
//     setSearchQuery: (state, action) => {
//       state.searchQuery = action.payload;
//     },
//   },
// });

// export const {
//   setApiCharacters,
//   addCharacter,
//   setEditingCharacter,
//   updateCharacter,
//   deleteCharacter,
//   setSearchQuery,
// } = counterSlice.actions;

// export default counterSlice.reducer;

// // ====== src/redux/store.js ======
// import { configureStore } from '@reduxjs/toolkit';
// // import counterReducer from './counter/CounterSlice.js';
// import authReducer from './auth/authSlice.js';

// export const store = configureStore({
//   reducer: {
//     // counter: counterReducer,
//     auth: authReducer,
//   },
// });

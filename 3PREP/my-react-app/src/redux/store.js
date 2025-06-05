import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './characterSlice';

export default configureStore({
	reducer: {
		characters: charactersReducer,
	},
});

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/CounterSlice.js';

import authReducer from './auth/authSlice.js';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});
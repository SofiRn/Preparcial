import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userType: 'admin', // cambiar a 'user' para restringir funciones
  },
  reducers: {},
});

export default authSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isAuthenticated: false,
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authStart: (state) => {},
    authSuccess: (state, action) => {
      console.log('action', action);
      state.isAuthenticated = true;
      state.user = action.payload.user ? action.payload.user : state.user;
      state.token = action.payload.token;
    },
    authFail: (state, action) => {},
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = {};
      state.token = null;
    },
   
  },
});

export const { authStart, authSuccess, authFail, logout, setOrganisation } =
  authSlice.actions;

export default authSlice.reducer;

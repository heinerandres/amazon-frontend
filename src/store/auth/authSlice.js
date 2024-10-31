import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
   name: 'auth',
   initialState: {
       status: 'checking', // 'not-authenticated', 'authenticathed'
       uid: null,
       email: null,
       displayName: null,
       photoURL: null,
       errorMessage: null,
   },
   reducers: {
       Login: ( state, { payload } ) => {
        state.status = 'authenticated';
        state.uid = payload.uid;
        state.email = payload.email;
        state.displayName = payload.displayName;
        state.photoURL = payload.photoURL;
        state.errorMessage = null;
       },
       Logout: ( state, { payload })=>{
        state.status = 'not-authenticated';
        state.uid = null;
        state.email = null;
        state.displayName = null;
        state.photoURL = null;
        state.errorMessage = payload?.errorMessage;
       },
       checkingCredentials: ( state, { payload }) => {
        state.status = 'checking';
       },
       onError: ( state, { payload } ) => {
        state.errorMessage = payload;
       }
   }
});
export const { Login, Logout, checkingCredentials, onError } = authSlice.actions;
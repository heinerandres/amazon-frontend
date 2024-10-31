import { createSlice } from '@reduxjs/toolkit';

export const articulosSlice = createSlice({
   name: 'articulos',
   initialState: {
      status: '',
      articulos: [],
      errorMessage: undefined,
   },
   reducers: {
      onChecking: ( state ) => {
         state.status = 'checking';
         state.articulos = [];
         state.errorMessage = undefined;
      },
      setArticulos: ( state, { payload } ) => {
         state.status = 'done';
         state.articulos = payload;
         state.errorMessage = undefined;
      },
      onError: (state, { payload }) => {
         state.status = 'error';
         state.articulos = [];
         state.errorMessage = payload;
      },
      clearErrorMessage: ( state ) =>{
         state.errorMessage = undefined;
      },
   }
});
export const { onChecking, setArticulos, onError, clearErrorMessage } = articulosSlice.actions;


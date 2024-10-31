import { createSlice } from '@reduxjs/toolkit';

export const carritoSlice = createSlice({
   name: 'carrito',
   initialState: {
       carrito: {},
       articulos: [],
   },
   reducers: {

        onAddNewCarrito: ( state ) => {

        },
        setCarrito: ( state, { payload }) => {
            state.carrito = payload.carrito;
            state.articulos = payload.articulos;
        },
        setArticulosAlCarrito: (state, { payload }) => {
            state.carrito = payload.carrito;
            state.articulos = payload.articulos;
        },
        onError: (state, { payload }) => {
            state.status = 'error';
            state.carrito = {};
            state.errorMessage = payload;
        },
        clearErrorMessage: ( state ) =>{
            state.errorMessage = undefined;
        },
   }
});
export const { onAddNewCarrito, setCarrito, setArticulosAlCarrito, onError, clearErrorMessage } = carritoSlice.actions;
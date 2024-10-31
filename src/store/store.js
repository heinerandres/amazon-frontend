import { configureStore } from "@reduxjs/toolkit";
import { carritoSlice } from "./carrito/carritoSlice";
import { articulosSlice } from "./articulo/articulosSlice";
import { authSlice } from "./auth";




export const store = configureStore({
    reducer: {
        carrito: carritoSlice.reducer,
        articulos: articulosSlice.reducer,
        auth: authSlice.reducer,
    }
})
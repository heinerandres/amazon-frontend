import { useDispatch, useSelector } from "react-redux";
import { ecommerceApi } from '../api';
import { setCarrito, setArticulosAlCarrito, onError, clearErrorMessage } from "../store/carrito/carritoSlice";


export const useCarritoStore = () => {
    
    const { carrito } = useSelector(state => state.carrito);

    const dispatch = useDispatch();

    const getCarrito = async (usuario) => {
        try{
            const resp = await ecommerceApi.post('/carrito/obtenerCarrito', usuario);
            dispatch(setCarrito(resp.data));
        }catch(error){
            dispatch( onError("Error en el Api"));
            setTimeout(() =>{
                dispatch(clearErrorMessage);
            }, 10);
        }
    }

    const insertarCarrito = async (carrito) => {
        try{
            const resp = await ecommerceApi.post('/carrito/insertar', carrito);
            dispatch(setCarrito(resp.data));
        }catch(error){
            dispatch( onError("Error en el Api"));
            setTimeout(() =>{
                dispatch(clearErrorMessage);
            }, 10);
        }
    }

    const actualizarArticulosDelCarrito = async(jsonActualizar) => {
        try{
            const resp = await ecommerceApi.put('/carrito/actualizarCarrito', jsonActualizar);
            dispatch(setArticulosAlCarrito(resp.data));
        }catch(error){
            dispatch( onError("Error en el Api"));
            setTimeout(() =>{
                dispatch(clearErrorMessage);
            }, 10);
        }
    }

    return {
        carrito,

        getCarrito,
        insertarCarrito,
        actualizarArticulosDelCarrito,
    }
}
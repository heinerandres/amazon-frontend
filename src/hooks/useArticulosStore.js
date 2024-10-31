import { useDispatch, useSelector } from 'react-redux';
import { ecommerceApi } from '../api';
import { clearErrorMessage, onChecking, onError, setArticulos } from '../store/articulo/articulosSlice';

export const useArticulosStore = () => {

    const {
        articulos,
        status,
        errorMessage
    } = useSelector( state => state.articulos )
    
    const dispatch = useDispatch();


    const getArticulos = async () => {
        dispatch( onChecking() );
        try{
            const resp = await ecommerceApi.get('/articulo/');
            dispatch(setArticulos(resp.data.articulos))
        }catch(error){
            console.log(error);
            dispatch( onError("Error en el Api"));
            setTimeout(() =>{
                dispatch(clearErrorMessage);
            }, 10);
        }
    }


    return {
        //*propiedades
        articulos,
        status,
        errorMessage,
        
        //*metodos
        getArticulos
    }
}
import React, { useState } from 'react';
import { useCarritoStore } from '../../hooks/useCarritoStore';


export const SelectCantidadArticulos = ({ articulo, carrito, total, setTotal }) => {
    const cantidadDelCarro = carrito.carrito.articulos.find(item=> item.id === articulo._id).cantidad;
    const [ seleccionado, setSeleccionado ] = useState(cantidadDelCarro);
    const { actualizarArticulosDelCarrito } = useCarritoStore();

  
    const handleSelect = (event) => {
      if(seleccionado > event.target.value 
        && seleccionado !== event.target.value){
          //calcularNuevoTotal(event);
      }else{
        //calcularNuevoTotal(event);
      }
      setSeleccionado(event.target.value);

      const jsonActualizar = {
        carrito_id: carrito.carrito._id,
        insertar: [],
        actualizar:[
          {
            id: articulo._id,
            cantidad: event.target.value
          }
        ],
        eliminar:[]
      };
      actualizarArticulosDelCarrito(jsonActualizar);
    }

    const calcularNuevoTotal = (event) => {
      setTotal(total - 
                    ((seleccionado - parseInt(event.target.value) ) 
                    * articulo.precio));
      console.log("calcular total select");
    }



  return (
    <select value={ seleccionado } onChange={ () => handleSelect(event)}>
        {Array(parseInt(articulo.cantidad))
        .fill(1)
        .map((value, key) => {
            return <option key={key+1} value={key+1}>{(key===0)? `Cantidad: ${key+1}`: `${key+1}`}</option>;
        })}
    </select>
  )
}

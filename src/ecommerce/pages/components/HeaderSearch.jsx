import React, { useEffect, useState } from 'react'
import { useForm } from '../../../util/useForm'

export const HeaderSearch = ( { onSearchArticulo } ) => {

  const [ windowsSize, setWindowsSize ] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const [selectText, setSelectText]= useState('Todas las categorías');

  useEffect(() => {
    const handleResize = () => {
      setWindowsSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
      console.log(windowsSize);
      if(window.innerWidth <= 1280 && window.innerHeight <= 1024){
        setSelectText('Categorías')
      }
      else{
        setSelectText('Todas las Categorías');
      }
    };
    window.addEventListener('resize', handleResize);

    handleResize();

    return() => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { articulo, onResetForm, onInputChange } = useForm({
    articulo: '',
  });

  const onSubmit = ( event ) => {
    event.preventDefault();
    if( articulo.trim().length <=1 ) return;
    onSearchArticulo( articulo.trim() );
    onResetForm();
  }


  return (
    <form id="header-buscar" onSubmit={ (event) => onSubmit(event) }>
      <div id="div-select-buscar">
        <select >
          <option defaultValue="selected">{ selectText }</option>
        </select>
      </div>
      <div id="div-input-header">
        <input 
          id="input-header" 
          name="articulo" 
          value ={ articulo } 
          type="text" 
          placeholder="Buscar Amazon.com"
          onChange={ onInputChange }
        />
      </div>

      <div id="div-icono-buscar-header">
        <input type="submit" value=""></input>
      </div>
    </form>
  )
}

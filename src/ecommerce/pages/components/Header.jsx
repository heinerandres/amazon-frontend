import React, { useEffect } from 'react'
import { HeaderSearch } from '../../'
import { Navigate, useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { LogoutOutlined } from '@mui/icons-material';
import { useAuthStore } from '../../../hooks/useAuthStore';
import { useSelector } from 'react-redux';
import { useCarritoStore } from '../../../hooks/useCarritoStore';


export const Header = ({ onSearchArticulo }) => {

  const { getCarrito } = useCarritoStore();

  const respuesta = useSelector((state) => state.carrito);
  const usuario = useSelector(state => state.auth);
  const carrito = {
    usuario_id: usuario.uid
  };
  
  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    getCarrito(carrito);
  }, []);

  console.log(respuesta);


  const { startLogout } = useAuthStore();

  const navigate = useNavigate();

  const onClickHeaderIcon = () =>{
    navigate("/");
  };

  const onClickCarrito = () => {
    navigate("/carrito");
  };

  const onLogout = () => {
    startLogout();
  }
  return (
    <header>
      <a>
        <img onClick={()=>onClickHeaderIcon()} src='../img/logo-header.png'></img>
      </a>
      <HeaderSearch onSearchArticulo = { onSearchArticulo }/>
      
      <div id="header-identificarse">
        <span id="identificarse-label-1">Hola, Identificate</span>
        <span id="identificarse-label-2">Cuenta y Listas</span>
        
      </div>
      <div id="header-pedidos">
        <span>Pedidos</span>
      </div>
      <div onClick={()=>onClickCarrito()} id="header-carrito">
        <span id="numero-carritos-header">{ respuesta.articulos.length }</span><br></br>
        <span>
          <img src="../img/carrito-header.png"></img>
        </span>
        <label id="letras-carritos-header">Carrito</label>
      </div>
      <div className="header-logout">
        <IconButton color="primary" onClick={ onLogout }>
          <LogoutOutlined/>
        </IconButton>
      </div> 
    </header>
  )
}

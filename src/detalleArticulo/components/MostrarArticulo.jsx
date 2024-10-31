import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCarritoStore } from "../../hooks/useCarritoStore";
import { useSelector } from "react-redux";



export const MostrarArticulo = ( { articulo } ) => {

  ///////////////////CONSTANTES DEL DOM
  const cambiarImagen = (event) =>{
    const main_img = document.getElementById("main-img");
    if(event.target.firstChild.src != undefined){
      main_img.src = event.target.firstChild.src;
    }
  }

  const handleMouseOut = (event) => {
    const zoomResult = document.getElementById("x");
    const zoomLens = document.getElementById("zoomLens");
    zoomResult.style.display = "none";
    zoomLens.style.display = "none";
  }

  const zoomImagen = (event) => {
    const zoomResult = document.getElementById("x");
    const zoomLens = document.getElementById("zoomLens");
    zoomResult.style.display = "block";
    zoomLens.style.display = "block";
    const rect = event.target.getBoundingClientRect();
    const xPos = event.clientX - rect.left;
    const yPos = event.clientY - rect.top;

    const lensWidth = zoomLens.offsetWidth / 2;
    const lensHeight = zoomLens.offsetHeight / 2;

    let x = event.clientX - rect.left - lensWidth;
    let y = event.clientY - rect.top - lensHeight;

    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > rect.width - lensWidth * 2) x = rect.width - lensWidth * 2;
    if (y > rect.height - lensHeight * 2) y = rect.height - lensHeight * 2;

    zoomLens.style.left = `${x}px`;
    zoomLens.style.top = `${y}px`;

    zoomResult.style.backgroundImage = `url(${event.target.src})`;
    zoomResult.style.backgroundPosition = `-${xPos * 2}px -${yPos * 2}px`;
  }

  ///////////CONSTANTES PARA CONSULTAR EL CARRO
  const navigate = useNavigate();

  const {_id, 
    nombre, 
    img1, 
    img2, 
    img3, 
    img4, 
    img5, 
    descripcion, 
    precio, 
    cantidad } = articulo;

  const [ articuloSeleccionado, setArticulo ] = useState({...articulo, cantidad: 1});

  const { getCarrito, insertarCarrito, actualizarArticulosDelCarrito } = useCarritoStore();

  const usuario = useSelector(state => state.auth);

  const respuesta = useSelector((state) => state.carrito);
  const carrito = {
    usuario_id: usuario.uid
  };
  
  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    getCarrito(carrito);
  }, []);



  ///////////////////EVENTOS
  const handleInputChange = ({ target })=> {
    setArticulo({...articuloSeleccionado, cantidad: target.value});
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if(respuesta.carrito === null){
      const jsonCrear = {
        usuario_id : usuario.uid,
        estaPago: false,
        articulos: [{
            id: articulo._id,
            cantidad: articuloSeleccionado.cantidad
          }]
      }
      insertarCarrito(jsonCrear);
    }else{
      const jsonActualizar = {
        carrito_id: respuesta.carrito._id,
        insertar: [
          {
            id: articulo._id,
            cantidad: articuloSeleccionado.cantidad
          }
        ],
        actualizar:[],
        eliminar:[]
      };
      actualizarArticulosDelCarrito(jsonActualizar);
    }
    navigate("/carrito");
  };

  return (
    <div className="articulo-wrapper-detalle">
        <div className="flex-detalle">
          <div className="cambiar-imagen-detalle">
            <div>
              <img onMouseEnter = {()=>cambiarImagen(event)} src={ img1 }></img>
            </div>
            <div>
            <img onMouseEnter = {()=>cambiarImagen(event)}  src={ img2 }></img>
            </div>
            <div>
            <img onMouseEnter = {()=>cambiarImagen(event)}  src={ img3 }></img>
            </div>
            <div>
            <img onMouseEnter = {()=>cambiarImagen(event)}  src={ img4 }></img>
            </div>
          </div>
          <div className="img-wrapper-detalle">
              <img id="main-img" src= { img1 } onMouseOut={()=>handleMouseOut(event)} onMouseMove={() => zoomImagen(event)}></img>
          </div>
          <div className="wrapper-texto-detalle">
            <div className="nombre-articulo-detalle">
              <label>{ nombre }</label>
            </div>
            <div className="wrapper-precio-detalle">
              <label>${ precio }</label>
            </div>
            <div className="descripcion-articulo">
              <span className="span-bold">Acerca de este articulo: </span> <br></br><br></br>
              <span>{ descripcion }</span>
            </div>
            <form className="agregar-al-carrito" onSubmit={ () => onSubmit(event) }>
              <select onChange={(event) => handleInputChange(event)}>
                {Array(parseInt(cantidad))
                .fill(1)
                .map((value, key) => {
                  return <option key={key+1} value={key+1}>{(key===0)? `Cantidad: ${key+1}`: `${key+1}`}</option>;
                })}
              </select>
              <input type="submit" value="Agregar al carrito"/>
            </form>
          </div>
        </div>
        <div id="zoomLens"></div>
        <div className="zoom-result" id="x">
          <img></img>

        </div>
    </div>
  )
}

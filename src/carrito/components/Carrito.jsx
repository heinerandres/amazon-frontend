import { useSelector } from "react-redux";
import { SelectCantidadArticulos } from "./SelectCantidadArticulos";
import { useEffect, useState } from "react";
import { useCarritoStore } from "../../hooks/useCarritoStore";
import { Navigate, useNavigate } from 'react-router-dom';


export const Carrito = () => {
  
  const [total, setTotal] = useState(0);

  const[ totalCheckeds, setTotalCheckeds ] = useState(0);

  const [ checkeds, setCheckeds ] = useState([]);

  const carrito = useSelector((state) => state.carrito);

  const usuario = useSelector(state => state.auth);

  const { actualizarArticulosDelCarrito } = useCarritoStore();

  const { getCarrito } = useCarritoStore();
  
  const navigate = useNavigate();

  useEffect(()=>{
    if(carrito.articulos.length !== 0){
      handleTotal();
    }
  }, [carrito]);

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    getCarrito({ usuario_id: usuario.uid});
  }, []); 
  

  const handleTotal = () => {
    let letTotal = 0;
      carrito.carrito.articulos.forEach(item =>{
        letTotal += item.cantidad * carrito.articulos.find(articulo=> articulo._id === item.id).precio;
      });
      setTotal(letTotal);
  };
  const handlePago = () => {
    navigate("/");
  }

  const handleEliminar = ( articulo ) => {
     const jsonEliminar = {
      carrito_id: carrito.carrito._id,
      insertar: [],
      actualizar:[],
      eliminar:[articulo._id]
    };
    actualizarArticulosDelCarrito(jsonEliminar);
  }
  const handleCheck = ( articulo ) => {
    const DOMtotal = document.getElementById("total");
    const DOMtotalCheckeds = document.getElementById("totalCheckeds");

    if(event.target.checked){
      DOMtotal.style.display = "none";
      DOMtotalCheckeds.style.display = "block";
      setTotalCheckeds(totalCheckeds + 
        (articulo.precio * (carrito.carrito.articulos.find(
          item => item.id === articulo._id).cantidad) ));
          setCheckeds([ ...checkeds, articulo ]);
    }
    else{
      setTotalCheckeds(totalCheckeds - 
        (articulo.precio * (carrito.carrito.articulos.find(
          item => item.id === articulo._id).cantidad) ));
      const filtered = checkeds.filter(item=>item._id !== articulo._id);
      setCheckeds(filtered);
      if(filtered.length === 0){
        DOMtotal.style.display = "block";
        DOMtotalCheckeds.style.display = "none";
      }
    }
  }
  
  return (
    <div className="wrapper-carrito">
      <div className="wrapper-carrito-subtotal">
        <div className="div-carrito">
          <div className="header-carrito">
            <label className="titulo-carrito">Carrito</label>
            <a>Deseleccionar todos los articulos</a>
            <label className="titulo-precio">Precio</label>
          </div>
          {carrito.articulos.map(articulo=>(
            <div key={ articulo._id } className="wrapper-item-carrito">
            <div className="div-check">
              <input onClick= { () => handleCheck( articulo, event ) } className="check-carrito" type="checkbox"/>
            </div>
            <div className="div-imagen">
              <img src={ articulo.img1 }></img>
            </div>
            <div className="div-textos">
              <div className="texto-nombre-carrito">
                <label>{ articulo.nombre }</label>
              </div>
              <div className="div-disponibilidad">
                <label>Disponible</label>
              </div>
              <div className="div-opciones">
                <div className="div-select-cantidad-carrito">
                  <SelectCantidadArticulos articulo = { articulo } carrito={ carrito } total= { total } setTotal={ setTotal }/>
                </div>
                <div className="barra-divisora"></div>
                <label onClick={() => handleEliminar( articulo ) } className="label-eliminar-carrito">Eliminar</label>
                <div className="barra-divisora"></div>
                <label className="label-compartir-carrito">Compartir</label>
              </div>
            </div>
            <div className="div-precio">
              <label>${ articulo.precio }</label>
            </div>
          </div>
          ))}
        </div>
        <div className="div-subtotal">
          <div className="div-textos-subtotal">
            <label>Total: 2  </label><br></br>
            <label>productos,</label><span id="total"> ${ total }</span> <span id="totalCheckeds">${ totalCheckeds }</span> 
          </div>
          <div className="div-pagar-carrito">
            <input type="button" onClick={ handlePago } value="Proceder al pago"/>
          </div>
        </div>
      </div>
    </div>

  )
}
